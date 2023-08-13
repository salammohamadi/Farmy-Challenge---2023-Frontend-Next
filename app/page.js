import Link from 'next/link';
import styles from './page.module.css';
import { Salad } from '@/components/salad';

export default async function Home() {
  const res = await fetch('http://localhost:3000/api/salads');

  const { ingredients, salads } = await res.json();

  return (
    <main className={styles.main}>
      {salads.map(item => (
        <Salad saladData={item} ingredients={ingredients} />
      ))}
    </main>
  );
}
