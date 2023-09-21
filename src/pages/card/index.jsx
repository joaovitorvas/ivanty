import { Header } from '../../components/Header'
import { CardPainting, CardTitle, CardsContainer, GridContainer } from './styles';
import cardPainting from './../../assets/images/oGrito.jpg'

const Card = () => {
  return (
    <div className="Pinturas">
      <Header/>
      <CardsContainer>
        <CardTitle>Produtos</CardTitle>
        <GridContainer>
          <CardPainting src={cardPainting} />
        </GridContainer>  
      </CardsContainer>
    </div>
  );
}

export { Card }