import EditPerfil from '../../components/EditPerfil';
import Footer from '../../components/Footer';
import { Header } from '../../components/Header'
import { HeaderPC } from '../../components/HeaderPc';

const EditPerfilPage = () => {
  return (
    <div className="Pinturas">
      <Header/>
      <HeaderPC/>
      <EditPerfil/>
      <Footer/>
    </div>
  );
}

export { EditPerfilPage }