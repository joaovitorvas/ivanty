import { HeaderContainers } from "./styles";
import { FirstHeaderContainer } from "./styles";
import { Menu } from "../Menu";
import { Logo } from "../Logo";
import { SearchButton } from "../SearchButton";
import { Card } from "../Card";
import { NavigateButton } from "./styles";
import { SecondHeaderContainer } from "./styles";

export const Header = () => {
    return (
      <div className="headerTelasMenores">

      <HeaderContainers>
        <FirstHeaderContainer>
          <Logo/>
          <SearchButton></SearchButton>
          <Card></Card>
          <Menu/>
        </FirstHeaderContainer>
        <SecondHeaderContainer>
          <a href="/">
            <NavigateButton>Cadastrar-se</NavigateButton>
          </a>
          <a href="/login">
            <NavigateButton>Log-in</NavigateButton>
          </a>
          <a href="/login">
            <NavigateButton>Categorias</NavigateButton>
          </a>
        </SecondHeaderContainer>
      </HeaderContainers>
      </div>

    );
  }
  
