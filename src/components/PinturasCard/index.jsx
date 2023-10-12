import { BuyButton, BuyButtonText, GridContainer, GridContainer2, HeartIcon, Icons, PinturaAuthor, PinturaContainer, PinturaDetails, PinturaImg, PinturaPrice, PinturaTitle } from "./styles";
import heart from './../../assets/images/heart.svg'
import card from './../../assets/images/card.svg'
import heartP from './../../assets/images/heartPrenchido.svg'


import React, { useState } from 'react';

export const PinturasCard = (props) => {

const [isHeartFilled, setIsHeartFilled] = useState(false);

  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled);
  };

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
                    <BuyButtonText>
                        COMPRAR
                    </BuyButtonText>
                </BuyButton>
                <Icons>
                    <HeartIcon src={isHeartFilled ? heartP : heart} onClick={handleHeartClick}/>
                    <HeartIcon src={card}/>
                </Icons>
            </GridContainer2>
        </PinturaContainer>
    </>
  );
};
