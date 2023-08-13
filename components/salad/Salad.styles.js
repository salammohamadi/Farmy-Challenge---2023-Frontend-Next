import { styled } from 'styled-components';

export const SaladStyled = styled.div`
  background-color: var(--bg-color-2);

  border-radius: 10px;
  width: 10rem;
  height: 10rem;
  padding: 1rem;

  .ingredient-list {
    list-style-type: none;
    display: flex;
    height: 50%;
    overflow: auto;
  }

  .cost {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .price {
    opacity: 0.7;
    font-weight: 700;
  }
`;
