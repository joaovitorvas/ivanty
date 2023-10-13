import { BuyButton, BuyButtonText, GridContainer, GridContainer2, HeartIcon, PinturaAuthor, PinturaContainer, PinturaDetails, PinturaImg, PinturaPrice, PinturaTitle } from "./styles";
import heart from './../../assets/images/heart.svg'
import card from './../../assets/images/card.svg'
import heartP from './../../assets/images/heartPrenchido.svg'
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { IconsContainer } from "../CardItemContainer/styles";


export const PinturasCard = (props) => {

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
    <>
        <PinturaContainer>
            <PinturaImg src={props.img}/>
            <GridContainer>
                <PinturaDetails>
                    <PinturaTitle>
                        {props.title}
                    </PinturaTitle>
                    <PinturaAuthor>
                        {props.author}
                    </PinturaAuthor>
                </PinturaDetails>
                <PinturaPrice>
                    R$ {props.price}
                </PinturaPrice>
            </GridContainer>
            <GridContainer2>
                <BuyButton>
                    <Link to={`/buyItem`}>
                        <BuyButtonText>
                            COMPRAR
                        </BuyButtonText>
                    </Link>
                    
                </BuyButton>
                <IconsContainer>
                    <HeartIcon src={isHeartFilled ? heartP : heart} onClick={handleHeartClick}/>
                    <HeartIcon src={card}/>
                </IconsContainer>
           
            </GridContainer2>
        </PinturaContainer>
    </>
  );
};
