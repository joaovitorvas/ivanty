import { ArtistsContainer } from '../ArtistsContainer'
import { Main } from "./styles.js";
import { ObrasDestaque } from '../ObrasDestaque';
import { CategoriesContainer } from '../CategoriesContainer';

export const MainContainer = () => {
  return (
    <Main>
        <ArtistsContainer/>
        <br/>
        <br/>
        <CategoriesContainer/>
        <ObrasDestaque/>
    </Main>
  );
};
