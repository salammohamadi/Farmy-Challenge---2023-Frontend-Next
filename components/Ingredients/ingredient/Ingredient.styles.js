import { styled } from 'styled-components';

export const IngredientStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--bg-color-3);
  padding: 1rem;
  border: 1px solid var(--border-color-1);
  border-radius: 4px;

  .ingredient-name {
    font-size: 2rem;
    white-space: nowrap;
  }

  .ingredient-inputs {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .ingredient-data {
    width: 2rem;
  }

  .delete-btn {
    cursor: pointer;
  }
`;
