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
          <a href="/artists">
            <NavigateButton>Artistas</NavigateButton>
          </a>
          <a href="/categories">
            <NavigateButton>Categorias</NavigateButton>
          </a>
          <a href="/register">
            <NavigateButton>Cadastrar-se</NavigateButton>
          </a>
        </SecondHeaderContainer>
      </HeaderContainers>
      </div>

    );
  }
  
