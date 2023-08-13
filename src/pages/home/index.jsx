import { Header } from '../../components/Header'
import { Banner } from '../../components/Banner'
import { MainContainer } from '../../components/Main';
import banner from './../../assets/images/banner.png'

const Home = () => {
  return (
    <div className="Home">
      <Header/>
      <Banner imagem={banner}/>
      <MainContainer/>
    </div>
  );
}

export { Home }

