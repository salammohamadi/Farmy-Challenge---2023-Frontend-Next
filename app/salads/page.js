import SaladBar from '@/components/salad-bar';
import { BASE_URL } from '@/src/constants/baseURL';

export default async function Salads() {
  const res = await fetch(`${BASE_URL}/salads`, {
    cache: 'no-store',
  });

  const { ingredients, salads } = await res.json();

  return <SaladBar salads={salads} ingredients={ingredients} />;
}
