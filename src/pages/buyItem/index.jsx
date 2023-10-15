import { Header } from '../../components/Header'
import { HeaderPC } from '../../components/HeaderPc';
import Footer from '../../components/Footer';
import { Button, Button2, Buttons, Container, DescriptionContainer, DescriptionText, DescriptionTitle, GridContainer, GridContainer3, ProductAuthor, ProductImage, ProductName, ProductPrice } from './styles';
import { ObrasDestaque } from '../../components/ObrasDestaque';

const BuyItem = (props) => {
  return (
    <>

    <div className="BuyItem">
      <Header/>
      <HeaderPC/>
      <Container>
      <div>
        <ProductImage src={props.image}/>
        <GridContainer>
            <div>
                <ProductName>{props.name}</ProductName>
                <ProductAuthor>{props.author}</ProductAuthor>
            </div>
            <ProductPrice> R$ {props.price}</ProductPrice>
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
            {props.description}
          </DescriptionText>
          <DescriptionTitle>
            Mais caracteristicas:
          </DescriptionTitle>
          <DescriptionText>
            {props.moreDetails}
          </DescriptionText>
      </Container>
      <ObrasDestaque/>

      <Footer/>
    </div>
    <div className='BuyItemPC'>
      <Header/>
      <HeaderPC/>
      <Container>
      <GridContainer>
        <ProductImage src={props.image}/>
        <GridContainer3>
          <div>
            <ProductName>{props.name}</ProductName>
            <ProductAuthor>{props.author}</ProductAuthor>
            <ProductPrice> {props.price}</ProductPrice>
          </div>
          <Buttons>
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
            </Buttons>
        </GridContainer3>
      </GridContainer>
      <DescriptionContainer>
        <DescriptionTitle>
              Descrição:
            </DescriptionTitle>
            <DescriptionText>
              {props.description}
            </DescriptionText>
            <DescriptionTitle>
              Mais caracteristicas:
            </DescriptionTitle>
            <DescriptionText>
              {props.moreDetails}
            </DescriptionText>
      </DescriptionContainer>
      
          
        </Container>
      <Footer/>
    </div>
    </>
  );
}

export { BuyItem }