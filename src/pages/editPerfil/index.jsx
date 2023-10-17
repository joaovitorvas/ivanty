import EditPerfil from '../../components/EditPerfil';
import Footer from '../../components/Footer';
import { Header } from '../../components/Header'
import { HeaderPC } from '../../components/HeaderPc';

const EditPerfilPage = () => {
  return (
    <div className="Pinturas">
      <Header link={'./'} item={'Home'} link2={'./artists'} item2={'Artistas'} link3={'./about'} item3={'Sobre'}/>
      <HeaderPC/>
      <EditPerfil/>
      <Footer/>
    </div>
  );
}

export { EditPerfilPage }