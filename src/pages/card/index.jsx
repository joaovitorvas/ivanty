import { Header } from '../../components/Header'
import { HeaderPC } from '../../components/HeaderPc';
import Footer from '../../components/Footer';
import { CardItem } from '../../components/CardItemContainer';
import image from './../../assets/images/campoDeTrigo.jpg'
import { CardItems, Container, FinalizarCompra } from './styles';


const Card = () => {
  return (
    <div className="Pinturas">
      <Header link={'./'} item={'Home'} link2={'./artists'} item2={'Artistas'} link3={'./about'} item3={'Sobre'}/>
      <HeaderPC/>
      <Container>
        <CardItems>
          <CardItem image={image} title={'Campo de Trigo'} author={'Edward Munch'} price={'799.99'}/>
        </CardItems>
        <a href={'./'}>
          <FinalizarCompra>
            Finalizar Compra
          </FinalizarCompra>
        </a> 
      </Container>
      
      <Footer/>
    </div>
  );
}

export { Card }