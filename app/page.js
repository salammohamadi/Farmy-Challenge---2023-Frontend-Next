import Link from 'next/link';
import styles from './page.module.css';

export default async function Home() {
  return (
    <main className={styles.main}>
      <header>
        <nav>
          <h1>welcome to Farmy</h1>
          <Link href='/salads'>salads</Link>
        </nav>
      </header>
    </main>
  );
}
