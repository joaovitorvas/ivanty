import { Header } from '../../components/Header'
import { HeaderPC } from '../../components/HeaderPc';
import { PerfilContent } from '../../components/PerfilContent';

const Perfil = () => {
  return (
    <div className="Pinturas">
      <Header/>
      <HeaderPC/>
      <PerfilContent/>
    </div>
  );
}

export { Perfil }