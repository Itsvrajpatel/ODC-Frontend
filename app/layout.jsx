import './globals.css';

export const metadata = {
  title: 'Owner Driver Collective | Freight Operations',
  description: 'A freight operations SaaS platform built for the Australian road transport industry.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
