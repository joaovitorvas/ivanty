import { useState, useEffect, useRef } from 'react'
import './App.css';
import {motion} from 'framer-motion'
import { Categories } from '../Categories';

import backgroundImage from './../../assets/images/brazilianDiversity.jpg'
import backgroundImage2 from './../../assets/images/fotorreaslismoBiodiversity.jpg'
import backgroundImage3 from './../../assets/images/arteConceitual.jpg'
import backgroundImage4 from './../../assets/images/arteMinimalista.jpg'
let text = 'Pop Art'
let text2 = 'Fotorrealismo'
let text3 = 'Arte conceitual'
let text4 = 'Arte minimalista'

function ObrasCarousel() {
  const carousel = useRef();
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel?.offsetWidth);
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);
  
  // criar um array com os objetos que contêm as propriedades do componente Categories
  const categories = [
    {link: './popart', backgroundImage: backgroundImage, categoriesText: text},
    {link: './fotorrealismo', backgroundImage: backgroundImage2, categoriesText: text2},
    {link: './arteconceitual', backgroundImage: backgroundImage3, categoriesText: text3},
    {link: './arteminimalista', backgroundImage: backgroundImage4, categoriesText: text4}
  ]

  return (
    <div className="App">
      <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing" }}>
        <motion.div
          className="getImage"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {categories.map((category, index) => (
            <Categories key={index} link={category.link} backgroundImage={category.backgroundImage} categoriesText={category.categoriesText} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ObrasCarousel;
