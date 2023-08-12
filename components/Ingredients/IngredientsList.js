import { styled } from 'styled-components';

export const IngredientsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-height: 70vh;
  overflow: auto;
  padding: 1rem;
  border: 1px solid var(--border-color-1);
  border-radius: 4px;
`;
