import { ArtistsContainer } from "../../components/ArtistsContainer";
import { Banner } from "../../components/Banner";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import { HeaderPC } from "../../components/HeaderPc";
import popartBanner from './../../assets/images/popartBanner.jpg'
import { Container, ListArtists, Text, TextContainer } from "./styles";
import { ArtistBox } from "../../components/ArtistBox";
import artist from './../../assets/images/artist.jpg'
let name = 'Vincent Van Gogh'
let bio = 'Vincent Van Gogh (1853-1890) foi um importante pintor holandês, um dos maiores representantes da pintura pós-impressionista.'
let link = './artists'


const Artists = (props) => {
  return (
    <div className="Pinturas">
      <Header/>
      <HeaderPC/>
      <Banner imagem={popartBanner}/>
      <TextContainer>
        <Text>Os melhores artistas estão aqui, conheça um pouco dos artistas que fazem a nossa plataforma única.</Text>
      </TextContainer>

      <Container>
        <ListArtists>
          <ArtistBox img={artist} name={name} bio={bio} link={link}/>
          <ArtistBox img={artist} name={name} bio={bio} link={link}/>
          <ArtistBox img={artist} name={name} bio={bio} link={link}/>
          <ArtistBox img={artist} name={name} bio={bio} link={link}/>
          <ArtistBox img={artist} name={name} bio={bio} link={link}/>
          <ArtistBox img={artist} name={name} bio={bio} link={link}/>
          <ArtistBox img={artist} name={name} bio={bio} link={link}/>
          <ArtistBox img={artist} name={name} bio={bio} link={link}/>
          <ArtistBox img={artist} name={name} bio={bio} link={link}/>
          <ArtistBox img={artist} name={name} bio={bio} link={link}/>
          <ArtistBox img={artist} name={name} bio={bio} link={link}/>
          <ArtistBox img={artist} name={name} bio={bio} link={link}/>
          <ArtistBox img={artist} name={name} bio={bio} link={link}/>
          <ArtistBox img={artist} name={name} bio={bio} link={link}/>
          <ArtistBox img={artist} name={name} bio={bio} link={link}/>
          <ArtistBox img={artist} name={name} bio={bio} link={link}/>
          <ArtistBox img={artist} name={name} bio={bio} link={link}/>
          <ArtistBox img={artist} name={name} bio={bio} link={link}/>
          <ArtistBox img={artist} name={name} bio={bio} link={link}/>
          <ArtistBox img={artist} name={name} bio={bio} link={link}/>
        </ListArtists>
        <ArtistsContainer/>  
      </Container>
      <Footer/>
    </div>
  );
}

export { Artists }