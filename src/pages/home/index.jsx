import { Header } from '../../components/Header'
import { Banner } from '../../components/Banner'
import { MainContainer } from '../../components/Main';
import banner from './../../assets/images/banner.png'
import Footer from '../../components/Footer';
import { HeaderPC } from '../../components/HeaderPc';


const Home = () => {
  return (
    <div className="Home">
      <Header link={'./artists'} item={'Artistas'} link2={'./about'} item2={'Sobre'}/>
      <HeaderPC/>
      <Banner imagem={banner}/>
      <MainContainer/>
      <Footer/>
    </div>
  );
}

export { Home }

