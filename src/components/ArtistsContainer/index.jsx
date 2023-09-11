import { ArtistName, ArtContainer, Container, ArtistText } from './styles';
import { ArtistPicture } from './styles';
import artist from './../../assets/images/artist.jpg'
import { Artist } from './styles';

export const ArtistsContainer = () => {
    return (
        <>
        <Container>
            <ArtistText>Artistas em destaque:</ArtistText>
           <ArtContainer>
                <Artist>
                    <ArtistPicture src={artist}/>
                    <ArtistName>name</ArtistName>
                </Artist>
                <Artist>
                    <ArtistPicture src={artist}/>
                    <ArtistName>name</ArtistName>
                </Artist>
                <Artist>
                    <ArtistPicture src={artist}/>
                    <ArtistName>name</ArtistName>
                </Artist>
           </ArtContainer>
        </Container>
        </>
    );
  }
