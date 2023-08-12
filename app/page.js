import Link from 'next/link';
import styles from './page.module.css';
import { SaladMaker } from '@/components/salad-maker';

export default async function Home() {
  const res = await fetch('http://localhost:3000/api/salads');

  const {
    businessLogic: { saladTypes },
    ingredients,
  } = await res.json();

  return (
    <main className={styles.main}>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>Add salad</Link>
        </li>
      </ul>
      export default Home
      <SaladMaker saladTypes={saladTypes} ingredients={ingredients} />
    </main>
  );
}
