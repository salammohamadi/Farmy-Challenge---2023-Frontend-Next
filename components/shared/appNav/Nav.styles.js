import { styled } from 'styled-components';

export const NavStyled = styled.nav`
  display: flex;

  .nav-list {
    list-style-type: none;
    display: flex;
    background-color: var(--bg-color-1);
    border-radius: 7px;
    gap: 0.5rem;
  }

  .nav-item {
    color: inherit;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 600;
    padding: 1rem 3rem;
    border-radius: 50px;

    &:hover {
      background-color: var(--bg-color-3);
    }
  }

  .active {
    border: 1px solid var(--bg-color-2);
    box-shadow: 1px 5px 10px var(--bg-color-2);
    background-color: var(--bg-color-2);
  }
`;
