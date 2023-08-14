'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavStyled } from './Nav.styles';

const navItems = [
  {
    path: '/',
    name: 'home',
    key: 'home',
  },
  {
    path: '/salads',
    name: 'Salads',
    key: 'salads',
  },
  {
    path: '/products',
    name: 'Products',
    key: 'Products',
  },
];

export default function AppNav() {
  const pathname = usePathname();

  return (
    <NavStyled>
      <ul className='nav-list'>
        {navItems.map(item => {
          const isActive = item.path === pathname;

          return (
            <li
              className={`nav-item ${isActive ? 'active' : ''}`}
              key={item.key}
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </NavStyled>
  );
}
