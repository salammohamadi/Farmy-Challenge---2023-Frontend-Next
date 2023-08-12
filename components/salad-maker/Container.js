import { styled } from 'styled-components';

export const Container = styled.div`
  margin: auto 20rem;
  align-items: center;
  padding: 1rem;
  min-height: 100vh;
  background-color: var(--bg-color-1);

  .form-header {
    display: flex;
    justify-content: space-between;
  }

  .salad-type,
  .title {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 0;
    background: none;
    border: none;
    border-radius: 0;
    outline: none;
  }

  .title {
    background-color: transparent;
    font-size: 2rem;
  }

  .salad-type {
    background-color: var(--bg-color-2);
    border-radius: 1px;
    width: 8rem;
    text-align: center;
  }
`;
