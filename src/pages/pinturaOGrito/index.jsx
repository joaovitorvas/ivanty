import { Header } from '../../components/Header'
import { Banner } from '../../components/Banner'
import pintura from './../../assets/images/oGrito.jpg'
import { TextBox } from '../../components/ObraTextBox'

const PinturaOGrito = () => {
  return (
    <div className="Pinturas">
      <Header/>
      <Banner imagem={pintura}/>
      <TextBox>O Grito</TextBox>
    </div>
  );
}

export { PinturaOGrito }