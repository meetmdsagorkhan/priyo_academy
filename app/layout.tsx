import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Priyo Academy | Learn Skills. Get Work. Receive Payments.',
  description:
    'Priyo Academy helps learners gain in-demand skills, access freelance opportunities in Priyo Marketplace, and receive secure payments via Priyo Pay.',
  keywords: ['Priyo Academy', 'Skill Development', 'Online Courses', 'Freelancing', 'Priyo Pay', 'Bangladesh EdTech'],
  openGraph: {
    title: 'Priyo Academy Ecosystem',
    description: 'Learn → Work → Earn → Get Paid with Priyo Academy, Priyo Marketplace, and Priyo Pay.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
