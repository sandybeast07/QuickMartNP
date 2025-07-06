import { Metadata } from 'next';
import './globals.css';

export const metadata = {
  title: 'QuickMartNP',
  description: 'An online clothing store situated in Nepal, offering amazing designs in jerseys',
  keywords: 'clothing, online store, jerseys, Nepal',
  generator: 'Suvam Bista',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
export const dynamic = 'force-dynamic';
export const revalidate = 0; 

