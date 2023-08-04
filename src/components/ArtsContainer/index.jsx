import { ArtContainer } from "./styles.js";
import pintura from './../../assets/images/pintura.jpg'
import './styles.css'

export const ArtsContainer = () => {
    return (
        <ArtContainer>
            <img src={pintura} alt="" className="pintura"/>
        </ArtContainer>
    );
}