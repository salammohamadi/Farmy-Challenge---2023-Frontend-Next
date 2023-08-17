import { styled } from 'styled-components';

export const TargetSaladStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;

  .target-title {
    font-size: 1rem;
  }

  .target-value {
    font-size: 1.5rem;
    margin: 0.5rem;

    color: ${props => (!!props.maxed ? 'red' : 'inherit')};
  }
`;
