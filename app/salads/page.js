import { Salad } from '@/components/salad';
import SaladBar from '@/components/salad-bar';

export default async function Salads() {
  const res = await fetch('http://localhost:3000/api/salads');

  const { ingredients, salads } = await res.json();

  return <SaladBar salads={salads} ingredients={ingredients} />;
}
