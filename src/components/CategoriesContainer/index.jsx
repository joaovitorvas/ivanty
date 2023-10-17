import { Container, ArtistText } from './styles';
import ObrasCarousel from '../Carrossel obras';

export const CategoriesContainer = () => {
    return (
        <>
            <Container>
                <ArtistText>Categorias em Destaque </ArtistText>
                <ObrasCarousel></ObrasCarousel>
            </Container>
        </>
    );
  }
