import { CardContainer, PictureImage } from "./styles";
import { PictureContainer } from "./styles";
import imagem from './../../assets/images/Rectangle 6.png'
 
export const CardsContainer = () => {
    return (
        <>
            <CardContainer>
                <PictureContainer>
                    <PictureImage src={imagem}/>
                </PictureContainer>
            </CardContainer>
        </>
    );
}