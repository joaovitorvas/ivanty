import { HeaderContainers, Name } from "./styles";
import { FirstHeaderContainer } from "./styles";
import { Logo } from "../Logo";
import { SearchButton } from "../SearchButtonPC";
import { Card } from "../Card";
import { NavigateButton } from "./styles";
import { SecondHeaderContainer } from "./styles";

export const HeaderPC = () => {
    return (
      <div className="headerTelasMaiores">

      <HeaderContainers>
        <FirstHeaderContainer>
          <Logo/> 
          <Name>Ivanty</Name>
          <SearchButton></SearchButton>
          <Card></Card>
        </FirstHeaderContainer>
       
      </HeaderContainers>
      </div>

    );
  }
  
