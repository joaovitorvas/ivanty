import { ArtistsContainer } from "../../components/ArtistsContainer";
import { Banner } from "../../components/Banner";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import { HeaderPC } from "../../components/HeaderPc";
import popartBanner from './../../assets/images/popartBanner.jpg'
import { Container, ListArtists, Text, TextContainer } from "./styles";
import { ArtistBox } from "../../components/ArtistBox";

import artist1 from './../../assets/images/artist.jpg'
import artist2 from './../../assets/picasso/photo.jpg'
import artist3 from './../../assets/davinci/photo.jpg'
import artist4 from './../../assets/monet/photo.jpg'
import artist5 from './../../assets/rembrandt/photo.jpg'
import artist6 from './../../assets/dali/photo.jpg'
import artist7 from './../../assets/warhol/photo.webp'
import artist8 from './../../assets/michelangelo/photo.jpg'
import artist9 from './../../assets/raphael/photo.jpg'
import artist10 from './../../assets/vermeer/photo.jpg'
import artist11 from './../../assets/caravaggio/photo.jpg'
import artist12 from './../../assets/boticelli/photo.png'


const Artists = (props) => {
  return (
    <div className="Pinturas">
      <Header link={'./'} item={'Home'} link2={'./about'} item2={'Sobre'}/>
      <HeaderPC/>
      <Banner imagem={popartBanner}/>
      <TextContainer>
        <Text>Os melhores artistas estão aqui, conheça um pouco dos artistas que fazem a nossa plataforma única.</Text>
      </TextContainer>

      <Container>
      <ListArtists>
        <ArtistBox img={artist1} name={'Van Gogh'} bio={'Vincent Van Gogh (1853-1890) foi um importante pintor holandês.'} link={'/vangogh'}/>
        <ArtistBox img={artist2} name={'Picasso'} bio={'Pablo Picasso foi um pintor, escultor, ceramista, cenógrafo, poeta e dramaturgo espanhol.'} link={'/picasso'}/>
        <ArtistBox img={artist3} name={'Da Vinci'} bio={'Leonardo da Vinci (1452-1519) foi um polímata italiano do Renascimento.'} link={'/davinci'}/>
        <ArtistBox img={artist4} name={'Monet'} bio={'Claude Monet (1840-1926) foi um pintor francês e o mais célebre entre os pintores impressionistas.'} link={'/monet'}/>
        <ArtistBox img={artist5} name={'Rembrandt'} bio={'Rembrandt Harmenszoon van Rijn (1606-1669) foi um pintor e gravador holandês.'} link={'/rembrandt'}/>
        <ArtistBox img={artist6} name={'Dali'} bio={'Salvador Dalí (1904-1989) foi um artista, diretor e produtor americano.'} link={'/dali'}/>
        <ArtistBox img={artist7} name={'Warhol'} bio={'Andy Warhol (1928-1987) foi um artista, diretor e produtor americano.'} link={'/warhol'}/>
        <ArtistBox img={artist8} name={'Michelangelo'} bio={'Michelangelo (1475-1564) foi um pintor, escultor, poeta e arquiteto italiano.'} link={'/michelangelo'}/>
        <ArtistBox img={artist9} name={'Raphael'} bio={'Raphael (1483-1520) foi um mestre da pintura e da arquitetura da escola de Florença durante o Renascimento italiano.'} link={'/raphael'}/>
        <ArtistBox img={artist10} name={'Vermeer'} bio={'Johannes Vermeer (1632-1675) foi um pintor holandês renomado por suas obras detalhadas que retratam cenas domésticas comuns.'} link={'/vermeer'}/>
        <ArtistBox img={artist11} name={'Caravaggio'} bio={'Caravaggio (1571-1610) foi um pintor italiano notável por seu uso realista de luz e sombra.'} link={'/caravaggio'}/>
        <ArtistBox img={artist12} name={'Botticelli'} bio={'Sandro Botticelli (1445-1510) foi um pintor italiano da primeira parte do Renascimento.'} link={'/botticelli'}/>
      </ListArtists>
        <ArtistsContainer/>  
      </Container>
      <Footer/>
    </div>
  );
}

export { Artists }