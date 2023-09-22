import { ArtistName, ArtContainer, Container, ArtistText } from './styles';
import { ArtistPicture } from './styles';
import artist from './../../assets/images/artist.jpg'
import { Artist } from './styles';
import Carrossel from '../Carrossel';

export const ArtistsContainer = () => {
    return (
        <>
            <Container>
                <ArtistText>Artista em Destaque: </ArtistText>
                <Carrossel></Carrossel>
            </Container>
        </>
    );
  }
