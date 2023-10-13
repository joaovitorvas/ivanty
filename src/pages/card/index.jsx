import { Header } from '../../components/Header'
import { HeaderPC } from '../../components/HeaderPc';
import Footer from '../../components/Footer';
import { CardItem } from '../../components/CardItemContainer';
import image from './../../assets/images/campoDeTrigo.jpg'


const Card = () => {
  return (
    <div className="Pinturas">
      <Header/>
      <HeaderPC/>
      <CardItem image={image} title={'Campo de Trigo'} author={'Edward Munch'} price={'799.99'}/>
      <CardItem image={image} title={'Campo de Trigo'} author={'Edward Munch'} price={'799.99'}/>
      <CardItem image={image} title={'Campo de Trigo'} author={'Edward Munch'} price={'799.99'}/>
      <Footer/>
    </div>
  );
}

export { Card }