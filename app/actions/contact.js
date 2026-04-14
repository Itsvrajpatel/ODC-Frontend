'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContact(prevState, formData) {
  const name = formData.get('name')?.toString().trim();
  const email = formData.get('email')?.toString().trim();
  const message = formData.get('message')?.toString().trim();

  // Server-side validation
  const errors = {};

  if (!name || name.length < 2) {
    errors.name = 'Full name is required (at least 2 characters).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.email = 'A valid email address is required.';
  }

  if (!message || message.length < 10) {
    errors.message = 'Message must be at least 10 characters.';
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors, values: { name, email, message } };
  }

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'vrajtemp1@gmail.com',
      subject: `New ODC Contact: ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f97316;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #334155;">Name</td>
              <td style="padding: 8px; color: #1e293b;">${name}</td>
            </tr>
            <tr style="background: #f8fafc;">
              <td style="padding: 8px; font-weight: bold; color: #334155;">Email</td>
              <td style="padding: 8px; color: #1e293b;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #334155; vertical-align: top;">Message</td>
              <td style="padding: 8px; color: #1e293b;">${message.replace(/\n/g, '<br/>')}</td>
            </tr>
          </table>
          <p style="color: #94a3b8; font-size: 12px; margin-top: 24px;">
            Sent from the Owner Driver Collective contact form.
          </p>
        </div>
      `,
    });
  } catch (err) {
    console.error('Resend error:', err);
    return {
      success: false,
      errors: { form: 'Failed to send message. Please try again later.' },
      values: { name, email, message },
    };
  }

  return { success: true, errors: {}, values: {} };
}
