import { Header } from '../../components/Header'
import { CardBox } from '../../components/CardBox';
import cardPainting from './../../assets/images/oGrito.jpg'

const Card = (props) => {
  return (
    <div className="Pinturas">
      <Header/>
      <CardBox painting={cardPainting} title={'O grito'} author={'Edward Munch'} price={'799.99'}/>
    </div>
  );
}

export { Card }