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
          <div className="logoo">
            <img className="logotipo" src={logo} alt="Logo" />
            <p>VANTA</p>
          </div>
          <div className="media-icons">
            <a href="#">
              <img
                className="facebook"
                src={faceLogo}
                alt="Facebook"
              />
            </a>
            <a href="#">
              <img
                className="twitter"
                src={twitterLogo}
                alt="Twitter"
              />
            </a>
            <a href="#">
              <img
                className="instagram"
                src={instaLogo}
                alt="Instagram"
              />
            </a>
            <a href="#">
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
            <li className="link_name">Suporte</li>
            <li>
              <a href="#">Instruções</a>
            </li>
            <li>
              <a href="#">Tutorial</a>
            </li>
            <li>
              <a href="#">Ajuda</a>
            </li>
            <li>
              <a href="#">Colaboradores</a>
            </li>
          </ul>
          <ul className="box">
            <li className="link_name">Administradores</li>
            <li>
              <a href="#">Quem somos</a>
            </li>
            <li>
              <a href="#">Sobre Vanta</a>
            </li>
            <li>
              <a href="#">Como começou</a>
            </li>
            <li>
              <a href="#">Porque arte</a>
            </li>
          </ul>
          <ul className="box">
            <li className="link_name">Conta</li>
            <li>
              <a href="#">Obras</a>
            </li>
            <li>
              <a href="#">Necessidade</a>
            </li>
            <li>
              <a href="#">Aprimoramento</a>
            </li>
            <li>
              <a href="#">História</a>
            </li>
          </ul>
          <ul className="box">
            <li className="link_name">Recursos</li>
            <li>
              <a href="#">Perfil</a>
            </li>
            <li>
              <a href="#">Preferência</a>
            </li>
            <li>
              <a href="#">Escolha</a>
            </li>
            <li>
              <a href="#">Armazenar</a>
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
            Copyright © 2023 <a href="#">Logo.</a>
          </span>
          <span className="policy_terms">
            <a href="#">Privacy policy</a>
            <a href="#">Terms & condition</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;