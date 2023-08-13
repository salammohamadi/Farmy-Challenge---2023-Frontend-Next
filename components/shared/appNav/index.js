'use client';
import Link from 'next/link';
import { NavStyled } from './Nav.styles';

export default function AppNav() {
  return (
    <NavStyled>
      <ul className='nav-list'>
        <li className='nav-item'>
          <Link href='/'>salads</Link>
        </li>

        <li className='nav-item'>
          <Link href='/products'>products</Link>
        </li>
      </ul>
    </NavStyled>
  );
}
