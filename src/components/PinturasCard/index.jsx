import { BuyButton, BuyButtonText, GridContainer, GridContainer2, HeartIcon, Icons, PinturaAuthor, PinturaContainer, PinturaDetails, PinturaImg, PinturaPrice, PinturaTitle } from "./styles";
import campoDeTrigo from './../../assets/images/campoDeTrigo.jpg'
import heart from './../../assets/images/heart.svg'
import card from './../../assets/images/card.svg'

export const PinturasCard = (props) => {
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
                    <HeartIcon src={heart}/>
                    <HeartIcon src={card}/>
                </Icons>
            </GridContainer2>
        </PinturaContainer>
    </>
  );
};
