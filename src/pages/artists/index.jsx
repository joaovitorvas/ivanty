import { Banner } from "../../components/Banner";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import { HeaderPC } from "../../components/HeaderPc";
import popartBanner from './../../assets/images/popartBanner.jpg'

const Artists = (props) => {
  return (
    <div className="Pinturas">
      <Header/>
      <HeaderPC/>
      <Banner imagem={popartBanner}/>    
      <Footer/>
    </div>
  );
}

export { Artists }