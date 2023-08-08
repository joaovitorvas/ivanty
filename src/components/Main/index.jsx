import { ArtistsContainer } from '../ArtistsContainer'
import { Main } from "./styles.js";
import { ArtsContainer } from '../ArtsContainer';

export const MainContainer = () => {
  return (
    <Main>
        <ArtistsContainer/>
        <ArtsContainer/>
        <ArtsContainer/>
    </Main>
  );
};
