import { Header } from '../../components/Header'
import { Banner } from '../../components/Banner'
import pintura from './../../assets/images/pintura.jpg'
import { PinturasDescription, PinturasDescriptionSloganText, PinturasDescriptionSloganTitle } from './styles';
import { ObrasDestaque } from '../../components/ObrasDestaque';
import { HeaderPC } from '../../components/HeaderPc';
import Footer from '../../components/Footer';

const Pinturas = () => {
  return (
    <div className="Pinturas">
      <Header/>
      <HeaderPC/>
      <Banner imagem={pintura}/>
      <PinturasDescription>
        <PinturasDescriptionSloganTitle>
          Descubra a Magia das Pinturas
        </PinturasDescriptionSloganTitle>
        <PinturasDescriptionSloganText>
          Explore um mundo de cores e emoções. Nossa coleção de pinturas irá cativar sua imaginação e enriquecer sua vida. Da clássica à contemporânea, cada obra é uma história contada com pinceladas. Venha se apaixonar pela arte conosco!
        </PinturasDescriptionSloganText>
      </PinturasDescription>
      <ObrasDestaque/>
      <Footer/>
    </div>
  );
}

export { Pinturas }