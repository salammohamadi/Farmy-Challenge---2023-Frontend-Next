import { ButtonStyled } from './Button.styles';

export default function Button({ children, onClick, type, width, disabled }) {
  return (
    <ButtonStyled
      onClick={onClick}
      type={type}
      width={width}
      disabled={disabled}
    >
      {children}
    </ButtonStyled>
  );
}
