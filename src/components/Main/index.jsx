import { ArtistsContainer } from '../ArtistsContainer'
import { Categories } from '../Categories';
import { Main } from "./styles.js";
import backgroundImage from './../../assets/images/pintura.jpg'
import backgroundImage2 from './../../assets/images/fotografia.jfif'
let text = 'Pinturas'
let text2 = 'Fotografias'

export const MainContainer = () => {
  return (
    <Main>
        <ArtistsContainer/>
        <Categories backgroundImage={backgroundImage} categoriesText={text}/>
        <Categories backgroundImage={backgroundImage2} categoriesText={text2}/>
    </Main>
  );
};
