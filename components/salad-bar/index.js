'use client';
import { Salad } from '../salad';
import { Container } from '@/components/shared/container';

export default function SaladBar({ salads, ingredients }) {
  return (
    <Container>
      {salads.map(item => (
        <Salad saladData={item} ingredients={ingredients} key={item.id} />
      ))}
    </Container>
  );
}
