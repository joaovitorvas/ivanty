import { BuyButton, BuyButtonText, GridContainer, GridContainer2, HeartIcon, PinturaAuthor, PinturaContainer, PinturaDetails, PinturaImg, PinturaPrice, PinturaTitle } from "./styles";
import campoDeTrigo from './../../assets/images/campoDeTrigo.jpg'
import heart from './../../assets/images/heart.svg'

export const PinturasCard = () => {
  return (
    <>
        <PinturaContainer>
            <PinturaImg src={campoDeTrigo}/>
            <GridContainer>
                <PinturaDetails>
                    <PinturaTitle>
                        Campo de Trigo
                    </PinturaTitle>
                    <PinturaAuthor>
                        Van Gogh
                    </PinturaAuthor>
                </PinturaDetails>
                <PinturaPrice>
                    R$ 799,99
                </PinturaPrice>
            </GridContainer>
            <GridContainer2>
                <BuyButton>
                    <BuyButtonText>
                        COMPRAR
                    </BuyButtonText>
                </BuyButton>
            </GridContainer2>
        </PinturaContainer>
    </>
  );
};
