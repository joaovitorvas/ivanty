import { HeaderContainer } from "./styles";
import { Menu } from "../Menu";
import { Logo } from "../Logo";
import { SearchButton } from "../SearchButton";
import { Card } from "../Card";

export const Header = () => {
    return (
      <HeaderContainer>
        <Logo/>
        <SearchButton></SearchButton>
        <Card></Card>
        <Menu/>
      </HeaderContainer>
    );
  }
  
