import { Header } from '../../components/Header'
import { HeaderPC } from '../../components/HeaderPc';
import Footer from '../../components/Footer';
import { Container, GridContainer, ProductAuthor, ProductImage, ProductName, ProductPrice } from './styles';
import campoTrigo from './../../assets/images/campoDeTrigo.jpg'

const BuyItem = () => {
  return (
    <div className="Pinturas">
      <Header/>
      <HeaderPC/>
      <Container>
        <ProductImage src={campoTrigo}/>
        <GridContainer>
            <div>
                <ProductName>Campo de Trigo</ProductName>
                <ProductAuthor>Edward Munch</ProductAuthor>
            </div>
            <ProductPrice> R$ 799.99</ProductPrice>
        </GridContainer>
      </Container>
      <Footer/>
    </div>
  );
}

export { BuyItem }