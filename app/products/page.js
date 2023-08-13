import { SaladMaker } from '@/components/salad-maker';

export default async function Page() {
  const res = await fetch('http://localhost:3000/api/products');

  const {
    businessLogic: { saladTypes },
    ingredients,
  } = await res.json();

  return <SaladMaker saladTypes={saladTypes} ingredients={ingredients} />;
}
