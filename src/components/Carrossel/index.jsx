import { useState, useEffect, useRef } from 'react'
import './App.css';
import {motion} from 'framer-motion'
import { Artist, ArtistName, ArtistPicture } from '../ArtistsContainer/styles';
import image1 from './../../assets/images/artist.jpg'
import image2 from './../../assets/picasso/photo.jpg'
import image3 from './../../assets/davinci/photo.jpg'
import image4 from './../../assets/monet/photo.jpg'
import image5 from './../../assets/rembrandt/photo.jpg'
import image6 from './../../assets/dali/photo.jpg'
import image7 from './../../assets/warhol/photo.webp'
import image8 from './../../assets/michelangelo/photo.jpg'
import image9 from './../../assets/raphael/photo.jpg'
import image10 from './../../assets/vermeer/photo.jpg'
import image11 from './../../assets/caravaggio/photo.jpg'
import image12 from './../../assets/boticelli/photo.png'

// Importe as imagens conforme necessário
const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12]
// Adicione os nomes dos artistas correspondentes às imagens
const names = ['Van Gogh', 'Picasso', 'Da Vinci', 'Monet', 'Rembrandt', 'Dali', 'Warhol', 'Michelangelo', 'Raphael', 'Vermeer', 'Caravaggio', 'Botticelli']
// Adicione os links correspondentes aos artistas
const links = ['/vangogh', '/picasso', '/davinci', '/monet', '/rembrandt', '/dali', '/warhol', '/michelangelo', '/raphael', '/vermeer', '/caravaggio', '/botticelli']

function Carousel() {
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

export default Carousel;
