import { Header } from '../../components/Header'
import { Banner } from '../../components/Banner'
import pintura from './../../assets/images/pintura.jpg'
import { PinturasDescription, PinturasDescriptionSloganText, PinturasDescriptionSloganTitle } from './styles';
import { PinturasCard } from '../../components/PinturasCard';
import obra from './../../assets/images/campoDeTrigo.jpg'
import { ObrasDestaque } from '../../components/ObrasDestaque';
let title = 'Campo de trigo'
let author = 'Vincent Van Gogh'
let price = '799,99'

const Pinturas = () => {
  return (
    <div className="Pinturas">
      <Header/>
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
    </div>
  );
}

export { Pinturas }