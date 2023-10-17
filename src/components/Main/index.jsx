import { ArtistsContainer } from '../ArtistsContainer'
import { Categories } from '../Categories';
import { Main, ListCategories } from "./styles.js";
import backgroundImage from './../../assets/images/pintura.jpg'
import backgroundImage2 from './../../assets/images/fotografia.jfif'
import { ObrasDestaque } from '../ObrasDestaque';
import ObrasCarousel from '../Carrossel obras';
let text = 'Pinturas'
let text2 = 'Fotografias'

export const MainContainer = () => {
  return (
    <Main>
        <ArtistsContainer/>
        <ObrasCarousel/>
        <ListCategories>
          <Categories link={'./pinturas'} backgroundImage={backgroundImage} categoriesText={text}/>
          <Categories link={'./fotografias'} backgroundImage={backgroundImage2} categoriesText={text2}/>
        </ListCategories>
        <ObrasDestaque/>
    </Main>
  );
};
