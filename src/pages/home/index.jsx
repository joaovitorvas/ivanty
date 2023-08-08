import { Header } from '../../components/Header'
import { Banner } from '../../components/Banner'
import { MainContainer } from '../../components/Main';

const Home = () => {
  return (
    <div className="Home">
      <Header/>
      <Banner/>
      <MainContainer/>
    </div>
  );
}

export { Home }