import { HeaderContainer } from "./styles";
import { Menu } from "../Menu";
import { Logo } from "../Logo";

export const Header = () => {
    return (
      <HeaderContainer>
        <Menu/>
        <Logo/>
      </HeaderContainer>
    );
  }
  
