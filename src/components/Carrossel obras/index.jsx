import { useState, useEffect, useRef } from 'react'
import './App.css';
import {motion} from 'framer-motion'
import { Artist, ArtistName, ArtistPicture } from '../ArtistsContainer/styles';

import obra from './../../assets/images/campoDeTrigo.jpg'
import obra1 from './../../assets/vangogh/noiteEstrelada.jpg'
import obra2 from './../../assets/picasso/obra.jpg'
import obra3 from './../../assets/picasso/obras2.jpg'
import obra4 from './../../assets/davinci/obra.jpg'
import obra5 from './../../assets/davinci/obra2.webp'
import obra6 from './../../assets/monet/obras.jpg'
import obra7 from './../../assets/monet/obra2.jpg'
import obra8 from './../../assets/rembrandt/obra.jpg'
import obra9 from './../../assets/rembrandt/obra2.jpg'
import obra10 from './../../assets/dali/obra.jpg'
import obra11 from './../../assets/dali/obra2.jpg'
import obra12 from './../../assets/michelangelo/obra.jpg'
import obra13 from './../../assets/michelangelo/obra2.jpg'
import obra14 from './../../assets/raphael/obra.jpg'


const images = [obra, obra1, obra2, obra3, obra4, obra5, obra6, obra7, obra8, obra9, obra10, obra11, obra12, obra13, obra14];
const names = ['Campo de trigo', 'Noite Estrelada', 'O Quarto Azul', 'Retrato de Gertrude Stein', 'Mona Lisa', 'A Última Ceia', 'Nenúfares', 'Mulheres no Jardim', 'A Ronda Nocturna', 'Autorretrato com Dois Círculos', 'A Persistência da Memória', 'Cristo de São João da Cruz'];
const links = ['./campo-de-trigo', './noite-estrelada', './o-quarto-azul', './retrato-de-gertrude-stein', './monalisa', './a-ultima-ceia', './nenúfares', './mulheres-no-jardim', './a-ronda-nocturna', './autorretrato-com-dois-circulos', './a-persistencia-da-memoria', './cristo-de-sao-joao-da-cruz'];

function ObrasCarousel() {
  const carousel = useRef();
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel?.offsetWidth);
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);
  

  return (
    <div className="App">
      <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing" }}>
        <motion.div
          className="getImage"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {images.map((image, index) => (
            <motion.div className="item" key={index}>
              <a href={links[index]}>
                <Artist>
                  <ArtistPicture src={image} />
                  <ArtistName>{names[index]}</ArtistName>
                </Artist>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ObrasCarousel;
