import React from "react";
import './styles.css'
import logo from './../../assets/images/Logotipo.svg'
import faceLogo from './../../assets/icons/logo-facebook.svg'
import twitterLogo from './../../assets/icons/logo-twitter.svg'
import instaLogo from './../../assets/icons/logo-instagram.svg'
import whatsappLogo from './../../assets/icons/logo-whatsapp.svg'

const Footer = () => {
  return (
    <footer>
      <div className="rodape">
        <div className="top">
            <a href={'./'}>
          <div className="logoo">
              <img className="logotipo" src={logo} alt="Logo" />
            <p>Ivanty</p>
          </div>
            </a>
          <div className="media-icons">
            <a href="/#">
              <img
                className="facebook"
                src={faceLogo}
                alt="Facebook"
              />
            </a>
            <a href="/#">
              <img
                className="twitter"
                src={twitterLogo}
                alt="Twitter"
              />
            </a>
            <a href="/#">
              <img
                className="instagram"
                src={instaLogo}
                alt="Instagram"
              />
            </a>
            <a href="/#">
              <img
                className="whatsap"
                src={whatsappLogo}
                alt="WhatsApp"
              />
            </a>
          </div>
        </div>
        <div className="link-boxes">
          <ul className="box">
            <li className="link_name">Navegação</li>
            <li>
              <a href={'./categories'}>Categorias</a>
            </li>
            <li>
              <a href={'./profile'}>Perfil</a>
            </li>
            <li>
              <a href={'./artists'}>Artistas</a>
            </li>
          </ul>
          <ul className="box">
            <li className="link_name">Sobré nos</li>
            <li>
              <a href={'./about'}>Quem somos</a>
            </li>
          </ul>
          <ul className="box">
            <li className="link_name">Conta</li>
            <li>
              <a href={'./profile'}>Gerenciar perfil</a>
            </li>
          </ul> 
          <ul className="box">
            <li className="link_name">Contato</li>
            <li>
              <a href="/#">email@email.com</a>
            </li>
            <li>
              <a href="/#">11 00000000</a>
            </li>
          </ul>
          <ul className="box input-box">
            <li className="link_name">Reporte algum erro</li>
            <li>
              <input type="text" placeholder="Digite seu nome " />
            </li>
            <li>
              <input type="text" placeholder="Digite uma melhora" />
            </li>
            <a href="./">
              <li>
                <input type="button" value="Enviar" />
              </li>
            </a>
          </ul>
        </div>
      </div>
      <div className="bottom-details">
        <div className="bottom_text">
          <span className="copyright_text">
            Copyright © 2023 <a href="/#">Logo.</a>
          </span>
          <span className="policy_terms">
            <a href="/#">Privacy policy</a>
            <a href="/#">Terms & condition</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
