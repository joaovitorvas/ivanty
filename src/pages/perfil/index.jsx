import Footer from '../../components/Footer';
import { Header } from '../../components/Header'
import { HeaderPC } from '../../components/HeaderPc';
import { PerfilContent } from '../../components/PerfilContent';

const Perfil = (props) => {
  return (
    <div className="Pinturas">
      <Header/>
      <HeaderPC/>
      <PerfilContent backgrondPhoto={props.backgrondPhoto} photo={props.photo} name={props.name} head={props.head} bio={props.bio} title={props.title} title2={props.title2} title3={props.title3} author={props.author} obra={props.obra} obra2={props.obra2} obra3={props.obra3} price={props.price} price2={props.price2} price3={props.price3}/>
      <Footer/>
    </div>
  );
}

export { Perfil }