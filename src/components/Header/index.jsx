import { HeaderContainers } from "./styles";
import { FirstHeaderContainer } from "./styles";
import { Menu } from "../Menu";
import { Logo } from "../Logo";
import { SearchButton } from "../SearchButton";
import { Card } from "../Card";
import { NavigateButton } from "./styles";

export const Header = (props) => {
    return (
      <div className="headerTelasMenores">

      <HeaderContainers>
        <FirstHeaderContainer>
          <Logo/>
          <div></div>
          <Card></Card>
          <Menu/>
        </FirstHeaderContainer>
        <SearchButton></SearchButton>
          <a href={props.link}>
            <NavigateButton>{props.item}</NavigateButton>
          </a>
          <a href={props.link2}>
            <NavigateButton>{props.item2}</NavigateButton>
          </a>
          <a href={props.link3}>
            <NavigateButton>{props.item3}</NavigateButton>
          </a>
      </HeaderContainers>
      </div>

    );
  }
  
