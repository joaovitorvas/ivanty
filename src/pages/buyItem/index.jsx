import { Header } from '../../components/Header'
import { HeaderPC } from '../../components/HeaderPc';
import Footer from '../../components/Footer';
import { Button, Button2, Container, DescriptionText, DescriptionTitle, GridContainer, GridContainerBuy, ProductAuthor, ProductImage, ProductName, ProductPrice } from './styles';
import campoTrigo from './../../assets/images/campoDeTrigo.jpg'
import { ObrasDestaque } from '../../components/ObrasDestaque';

const BuyItem = () => {
  return (
    <div className="Pinturas">
      <Header/>
      <HeaderPC/>
      <Container>
      <div>
        <ProductImage src={campoTrigo}/>
        <GridContainer>
            <div>
                <ProductName>Campo de Trigo</ProductName>
                <ProductAuthor>Edward Munch</ProductAuthor>
            </div>
            <ProductPrice> R$ 799.99</ProductPrice>
        </GridContainer>
      </div>
   
        <div>
        <a href={'./'}>
          <Button>
            Comprar
          </Button>
        </a>
        <a href={'./card'}>
          <Button2>
            Adicionar ao carrinho
          </Button2>
        </a>
        </div>
      
          <DescriptionTitle>
            Descrição:
          </DescriptionTitle>
          <DescriptionText>
          O Grito é uma das mais famosas pinturas da história da arte ocidental. Foi feita em 1893 pelo artista norueguês Edvard Munch, que utilizou tinta a óleo, têmpera e giz pastel sobre cartão.
            A composição mede 91 x 73,5 cm e se encontra atualmente na Galeria Nacional de Oslo, na Noruega.
            É considerada uma obra-prima, pois o artista conseguiu traduzir o sentimento de angústia e solidão.
          </DescriptionText>
          <DescriptionTitle>
            Mais caracteristicas:
          </DescriptionTitle>
          <DescriptionText>
            <li>Feito em tela 2x4</li>
            <li>Tamanho único</li>
            <li>Modelo exclusivo</li>
          </DescriptionText>
      </Container>
      <ObrasDestaque/>

      <Footer/>
    </div>
  );
}

export { BuyItem }