import { styled } from 'styled-components';

export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 3rem;
  margin-bottom: 2rem;

  .nav-list {
    list-style: none;
    display: flex;
    background-color: var(--bg-color-1);
    border-radius: 7px;
  }

  .nav-item {
    color: inherit;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 700;
    padding: 0.5rem 2rem;
    border-radius: 5px;
  }
`;
