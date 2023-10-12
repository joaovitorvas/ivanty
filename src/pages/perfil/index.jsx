import Footer from '../../components/Footer';
import { Header } from '../../components/Header'
import { HeaderPC } from '../../components/HeaderPc';
import { PerfilContent } from '../../components/PerfilContent';

const Perfil = () => {
  return (
    <div className="Pinturas">
      <Header/>
      <HeaderPC/>
      <PerfilContent/>
      <Footer/>
    </div>
  );
}

export { Perfil }