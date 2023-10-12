import { Header } from '../../components/Header'
import { CardBox } from '../../components/CardBox';
import cardPainting from './../../assets/images/oGrito.jpg'
import { HeaderPC } from '../../components/HeaderPc';
import Footer from '../../components/Footer';
import { Container } from './styles';

const Card = (props) => {
  return (
    <div className="Pinturas">
      <Header/>
      <HeaderPC/>
        <Container>
          
        </Container>
      <Footer/>
    </div>
  );
}

export { Card }