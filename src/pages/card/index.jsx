import { Header } from '../../components/Header'
import { CardBox } from '../../components/CardBox';
import cardPainting from './../../assets/images/oGrito.jpg'
import { HeaderPC } from '../../components/HeaderPc';
import Footer from '../../components/Footer';

const Card = (props) => {
  return (
    <div className="Pinturas">
      <Header/>
      <HeaderPC/>
      <CardBox painting={cardPainting} title={'O grito'} author={'Edward Munch'} price={'799.99'}/>
      <Footer/>
    </div>
  );
}

export { Card }