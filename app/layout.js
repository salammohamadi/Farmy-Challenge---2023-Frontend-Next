import './globals.css';
import { Inter } from 'next/font/google';
import AppNav from '/components/shared/appNav';
import styles from './layout.module.css';
import StyledComponentsRegistry from '@/lib/registry';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My Salad Bar',
  description: 'Make Salad and share your favorites',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <main className={styles.main}>
            <AppNav />
            {children}
          </main>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
