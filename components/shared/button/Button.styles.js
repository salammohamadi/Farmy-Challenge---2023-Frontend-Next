import { styled } from 'styled-components';

export const ButtonStyled = styled.button`
  cursor: pointer;

  &:hover {
    box-shadow: 0px 2px 10px var(--bg-color-3);
  }

  padding: 0.5em;
  border: 1px solid var(--border-color-1);
  border-radius: 4px;
  background-color: ${props =>
    props.type === 'primary' && !props.disabled
      ? 'var(--bg-color-2)'
      : 'var(--bg-color-3)'};
  width: ${props => props.width || '25%'};
  margin: ${props => (props.type === 'primary' ? '0 0.5rem' : '')};
`;
