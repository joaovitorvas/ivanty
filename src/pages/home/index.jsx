import { Header } from '../../components/Header'
import { Banner } from '../../components/Banner'
import { MainContainer } from '../../components/Main';
import banner from './../../assets/images/banner.png'
import obra from './../../assets/images/campoDeTrigo.jpg'
import { PinturasCard } from '../../components/PinturasCard';
let title = 'Campo de trigo'
let author = 'Vincent Van Gogh'
let price = '799,99'


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

