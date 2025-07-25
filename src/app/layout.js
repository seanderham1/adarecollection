// src/app/layout.js
import { Inter, Questrial } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

const questrial = Questrial({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-questrial',
  display: 'swap',
});

export const metadata = {
  title: 'Adare Collection - Exclusive Properties',
  description: 'An exclusive portfolio of exceptional properties.',
};

export default function RootLayout({ children }) {
  return (
    // Apply both font variables to the html tag for global availability
    <html lang="en" className={`${inter.variable} ${questrial.variable}`}>
      {/* === UPDATED: Apply Questrial's className to the body === */}
      <body className={questrial.className}>
        {children}
      </body>
    </html>
  );
}