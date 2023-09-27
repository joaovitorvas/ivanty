import logo from './../../assets/images/Logotipo.svg'
import { LogoContainer, Logo, LogoName } from './styles';

export const LogoBox = () => {
    return (
        <>
            <LogoContainer>
                <Logo src={logo}/>
                <LogoName>Vanta</LogoName>
            </LogoContainer>
        </>
    );
  }
