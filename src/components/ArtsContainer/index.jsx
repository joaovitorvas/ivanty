import { ArtContainer } from "./styles.js";
import pintura from './../../assets/images/pintura.jpg'
import './styles.css'
import { ArtText } from "./styles.js";

export const ArtsContainer = () => {
    return (
        <ArtContainer>
            <img src={pintura} alt="" className="pintura"/>
            <ArtText>Pinturas</ArtText>
        </ArtContainer>
    );
}