"use client";

import React, { useActionState, useEffect, useRef } from 'react';
import { submitContact } from '../app/actions/contact';
import styles from './ContactForm.module.css';

const initialState = { success: false, errors: {}, values: {} };

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, initialState);
  const formRef = useRef(null);

  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset();
    }
  }, [state.success]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Left: Info Panel */}
        <div className={styles.infoPanel}>
          <p className={styles.eyebrow}>Get in touch</p>
          <h2 className={styles.heading}>Let's talk about your freight operations</h2>
          <p className={styles.subtext}>
            Whether you're a driver, operator, or shipper - we'd love to hear from you.
            Fill in the form and we'll get back to you shortly.
          </p>

          <div className={styles.contactDetails}>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📍</span>
              <span>Australia</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>✉️</span>
              <span>hello@odc.com.au</span>
            </div>
          </div>

          <div className={styles.decorLine}></div>
        </div>

        {/* Right: Form */}
        <div className={styles.formPanel}>
          {state.success ? (
            <div className={styles.successBox}>
              <div className={styles.successIcon}>✓</div>
              <h3>Message received!</h3>
              <p>Thank you for reaching out. We'll be in touch soon.</p>
              <button
                className={styles.resetBtn}
                onClick={() => window.location.reload()}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form ref={formRef} action={formAction} className={styles.form} noValidate>
              {/* Name */}
              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="name">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="e.g. John Smith"
                  defaultValue={state.values?.name || ''}
                  className={`${styles.input} ${state.errors?.name ? styles.inputError : ''}`}
                  aria-describedby="name-error"
                />
                {state.errors?.name && (
                  <p className={styles.errorMsg} id="name-error" role="alert">
                    ⚠ {state.errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="e.g. john@example.com.au"
                  defaultValue={state.values?.email || ''}
                  className={`${styles.input} ${state.errors?.email ? styles.inputError : ''}`}
                  aria-describedby="email-error"
                />
                {state.errors?.email && (
                  <p className={styles.errorMsg} id="email-error" role="alert">
                    ⚠ {state.errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your freight operations or what you'd like to know..."
                  defaultValue={state.values?.message || ''}
                  className={`${styles.input} ${styles.textarea} ${state.errors?.message ? styles.inputError : ''}`}
                  aria-describedby="message-error"
                />
                {state.errors?.message && (
                  <p className={styles.errorMsg} id="message-error" role="alert">
                    ⚠ {state.errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isPending}
                className={`${styles.submitBtn} ${isPending ? styles.submitting : ''}`}
              >
                {isPending ? (
                  <><span className={styles.spinner}></span> Sending…</>
                ) : (
                  'Send Message →'
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
