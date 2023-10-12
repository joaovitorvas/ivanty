import { Header } from '../../components/Header'
import { Banner } from '../../components/Banner'
import pintura from './../../assets/images/oGrito.jpg'
import { TextBox } from '../../components/ObraTextBox'
import { HeaderPC } from '../../components/HeaderPc'
import Footer from '../../components/Footer'

const PinturaOGrito = () => {
  return (
    <div className="Pinturas">
      <Header/>
      <HeaderPC/>
      <Banner imagem={pintura}/>
      <TextBox>O Grito</TextBox>
      <Footer/>
    </div>
  );
}

export { PinturaOGrito }