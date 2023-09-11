import { ArtistName, Container } from './styles';
import { ArtistPicture } from './styles';
import artist from './../../assets/images/artist.jpg'
import { Artist } from './styles';

export const ArtistsContainer = () => {
    return (
        <>
           <Container>
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
           </Container>
        </>
    );
  }
