import { useState } from "react";
import { CardAuthor, CardImage, CardPrice, CardTitle, Container, GridContainer, IconsContainer } from "./styles";
import { HeartIcon } from "../PinturasCard/styles"
import trash from './../../assets/icons/trash-sharp.svg'
import heartP from './../../assets/images/heartPrenchido.svg'
import heart from './../../assets/images/heart.svg'

export const CardItem = (props) => {

  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled);
  };

  const [isVisible, setIsVisible] = useState(true);

  const handleTrashClick = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }


  return (     
        <Container>
          <CardImage src={props.image}/>
          <GridContainer>
            <div>
              <CardTitle>{props.title}</CardTitle>
              <CardAuthor>{props.author}</CardAuthor>
              <CardPrice>R$ {props.price}</CardPrice>
            </div>
            <IconsContainer> 
              <HeartIcon src={isHeartFilled ? heartP : heart} onClick={handleHeartClick}/>
              <HeartIcon src={trash} onClick={handleTrashClick}/>
            </IconsContainer>
          </GridContainer>
        </Container>
  );
}

