import { Header } from '../../components/Header'
import { HeaderPC } from '../../components/HeaderPc';
import Footer from '../../components/Footer';
import { Banner } from '../../components/Banner';
import { ArtistsContainer } from '../../components/ArtistsContainer';
import { Container, Title, Text } from './styles';
import { ObrasDestaque } from '../../components/ObrasDestaque';

const CategorieItem = (props) => {
  return (
    <div className="Pinturas">
      <Header item={'Formato'} item2={'Estilo'} item3={'Tema'}/>   
      <HeaderPC/>  
        <Banner imagem={props.banner} />
        <Container>
          <Title>
            {props.title}
          </Title>
          <Text>
            {props.text}
          </Text>
          <ObrasDestaque/>
          <ArtistsContainer/>
        </Container>
      <Footer/>
    </div>
  );
}

export { CategorieItem }