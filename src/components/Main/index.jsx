import { ArtistsContainer } from '../ArtistsContainer'
import { Categories } from '../Categories';
import { Main } from "./styles.js";

export const MainContainer = () => {
  return (
    <Main>
        <ArtistsContainer/>
        <Categories />
        <Categories />
        <Categories />
    </Main>
  );
};
