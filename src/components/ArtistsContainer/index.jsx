import { Container, ArtistText } from './styles';
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
