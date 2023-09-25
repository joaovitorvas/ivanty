import { ButtonContainer, ButtonContainerFalse } from "./styles";

const Button = ({ title, onClick, disabled }) => {
  if(disabled === false){
    return <ButtonContainer onClick={onClick} disabled={disabled}>
    {title}
    </ButtonContainer>;
  } else {
    return <ButtonContainerFalse onClick={onClick} disabled={disabled}>
    {title}
    </ButtonContainerFalse>;
  }
};

export default Button;
