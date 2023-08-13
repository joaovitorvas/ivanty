import { Header } from '../../components/Header'
import { Banner } from '../../components/Banner'
import pintura from './../../assets/images/pintura.jpg'

const Pinturas = () => {
  return (
    <div className="Pinturas">
      <Header/>
      <Banner imagem={pintura}/>
    </div>
  );
}

export { Pinturas }