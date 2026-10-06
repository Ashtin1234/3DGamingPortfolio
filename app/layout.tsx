import './globals.css';
import type { Metadata } from 'next';
import { Orbitron, Rajdhani } from 'next/font/google';

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-orbitron',
});

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-rajdhani',
});

export const metadata: Metadata = {
  title: 'Ashtin Anto | 3D Gaming Portfolio',
  description: 'Interactive 3D gaming portfolio showcasing creative development and design projects.',
  openGraph: {
    title: 'Ashtin Anto | 3D Gaming Portfolio',
    description: 'Interactive 3D gaming portfolio showcasing creative development and design projects.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${rajdhani.variable}`}>
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
