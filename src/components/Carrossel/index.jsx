import { useState, useEffect, useRef } from 'react'
import './App.css';
import {motion} from 'framer-motion'

import image1 from './../../assets/images/artist.jpg'
import image2 from './../../assets/images/artist.jpg'
import image3 from './../../assets/images/artist.jpg'
import image4 from './../../assets/images/artist.jpg'
import image5 from './../../assets/images/artist.jpg'
import image6 from './../../assets/images/artist.jpg'

import { Artist, ArtistName, ArtistPicture } from '../ArtistsContainer/styles';

function Carousel() {
  const carousel = useRef();
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel?.offsetWidth);
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);
  

  const images = [image1, image2, image3, image4, image5, image6] // Importe as imagens conforme necessário
  
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
              <a href="/perfil">
                <Artist>
                  <ArtistPicture src={image} />
                  <ArtistName>Nome do Artista</ArtistName> {/* Substitua "Nome do Artista" pelo nome correto */}
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