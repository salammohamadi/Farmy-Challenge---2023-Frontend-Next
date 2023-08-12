import { styled } from 'styled-components';

export const IngredientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .target-total-data {
    display: flex;
    justify-content: space-between;
    padding-top: 1rem;
  }

  .target-title {
    font-size: 1rem;
  }

  .target-value {
    font-size: 1.5rem;
    margin: 0.5rem;
  }
`;
