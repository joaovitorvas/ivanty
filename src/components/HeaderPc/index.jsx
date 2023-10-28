import { HeaderContainers, Logo, MenuPC, MenuItem, AMenuItem } from "./styles";
import { FirstHeaderContainer } from "./styles";
import { SearchButton } from './../SearchButtonPC'
import { Card } from './../Card'
import logo from './../../assets/images/Logotipo.svg'

export const HeaderPC = () => {
    return (
      <div className="headerTelasMaiores">

      <HeaderContainers>
        <FirstHeaderContainer>
          <a href="/">
            <Logo src={logo}/>
          </a>
          <MenuPC>
            <AMenuItem href={'/profile'}>
              <MenuItem>Perfil</MenuItem>
            </AMenuItem>
            <AMenuItem href={'/artists'}>
              <MenuItem>Artistas</MenuItem>
            </AMenuItem>
            <AMenuItem href={'/about'}>
              <MenuItem>Sobre</MenuItem>
            </AMenuItem>
          <AMenuItem href={'/register'}>
              <MenuItem>Cadastrar-se</MenuItem>
            </AMenuItem>
          </MenuPC>
          <SearchButton></SearchButton>
          <Card></Card>
        </FirstHeaderContainer>
       
      </HeaderContainers>
      </div>

    );
  }
  
