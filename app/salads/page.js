import Link from 'next/link';
import { SaladMaker } from '@/components/salad-maker';

export default async function Home() {
  const res = await fetch('http://localhost:3000/api/salads');

  const {
    businessLogic: { saladTypes },
    ingredients,
  } = await res.json();

  return <SaladMaker saladTypes={saladTypes} ingredients={ingredients} />;
}
