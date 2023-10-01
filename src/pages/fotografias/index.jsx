import { Header } from '../../components/Header'
import { Banner } from '../../components/Banner'
import pintura from './../../assets/images/oBeijo.jpg'
import { PinturasDescription, PinturasDescriptionSloganText, PinturasDescriptionSloganTitle } from './styles';
import { PinturasCard } from '../../components/PinturasCard';
import obra from './../../assets/images/campoDeTrigo.jpg'
import { ObrasDestaque } from '../../components/ObrasDestaque';
let title = 'Campo de trigo'
let author = 'Vincent Van Gogh'
let price = '799,99'

const Fotografias = () => {
  return (
    <div className="Fotografias">
      <Header/>
      <Banner imagem={pintura}/>
      <PinturasDescription>
        <PinturasDescriptionSloganTitle>
          Revele a Magia dos Cliques Fotográficos
        </PinturasDescriptionSloganTitle>
        <PinturasDescriptionSloganText>
        Desvende um universo de imagens e emoções. Nossa coleção de fotografias vai cativar sua imaginação e enriquecer sua vida. Da clássica à contemporânea, cada clique é uma história capturada em pixels. Venha se apaixonar pela arte da fotografia conosco!
        </PinturasDescriptionSloganText>

      </PinturasDescription>
      <ObrasDestaque/>
    </div>
  );
}

export { Fotografias }