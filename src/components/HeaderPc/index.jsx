import { HeaderContainers, LogoNameContainer, LogoNameText, Logo, MenuPC, MenuItem } from "./styles";
import { FirstHeaderContainer } from "./styles";
import {SearchButton} from './../components/SearchButton'
import logo from './../../assets/images/Logotipo.svg'

export const HeaderPC = () => {
    return (
      <div className="headerTelasMaiores">

      <HeaderContainers>
        <FirstHeaderContainer>
          <LogoNameContainer>
            <Logo src={logo}/>
            <LogoNameText>Ivanty</LogoNameText>
          </LogoNameContainer>
          <MenuPC>
            <MenuItem>Categorias</MenuItem>
            <MenuItem>Perfil</MenuItem>
            <MenuItem>Obras</MenuItem>
            <MenuItem>Artistas</MenuItem>
            <MenuItem>Sobre</MenuItem>
          </MenuPC>
          <SearchButton></SearchButton>
        </FirstHeaderContainer>
       
      </HeaderContainers>
      </div>

    );
  }
  
