import logo from './../../assets/images/Logotipo.svg'
import './styles.css'

export const Logo = () => {
    return (
        <>
        <a href="/">
           <img src={logo} alt="" className="logo"/>
        </a>
        </>
    );
  }
