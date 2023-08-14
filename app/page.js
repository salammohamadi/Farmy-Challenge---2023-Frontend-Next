import { Salad } from '@/components/salad';
import SaladBar from '@/components/salad-bar';

export default async function Home() {
  const res = await fetch('http://localhost:3000/api/salads');

  const { ingredients, salads } = await res.json();

  return <>welcome</>;
}
