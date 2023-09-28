import { CardDetails, CardPainting, CardsContainer, GridContainer, PaintingAuthor, PaintingPrice, PaintingTitle } from './styles';

export const CardBox = (props) => {
  return (
    <div className="Pinturas">
      <CardsContainer>
        <GridContainer>
          <CardPainting src={props.painting} />
          <CardDetails>
            <PaintingTitle> {props.title} </PaintingTitle>
            <PaintingAuthor> {props.author} </PaintingAuthor>
            <p></p>
            <p></p>
            <PaintingPrice>R$ {props.price} </PaintingPrice>
          </CardDetails>
        </GridContainer>  
      </CardsContainer>
    </div>
  );
}

