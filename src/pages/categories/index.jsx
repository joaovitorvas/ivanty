import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import { HeaderPC } from "../../components/HeaderPc";
import { CategoriesContent, DescriptText, DescriptTitle, DescriptionContainer, PinturasLIst } from "./styles";
import backgroundImage from './../../assets/images/pintura.jpg'
import backgroundImage2 from './../../assets/images/fotografia.jfif'
import { Categories } from "../../components/Categories";
import categoriesBanner from './../../assets/images/categoriesBanner.jpg'
import { Banner } from "../../components/Banner";
import { PinturasCard } from "../../components/PinturasCard";
import obra8 from './../../assets/rembrandt/obra.jpg'
import obra9 from './../../assets/rembrandt/obra2.jpg'
import obra10 from './../../assets/dali/obra.jpg'
import obra11 from './../../assets/dali/obra2.jpg'
import obra12 from './../../assets/michelangelo/obra.jpg'
let text = 'Pinturas'
let text2 = 'Fotografias'

const CategoriesScreen = (props) => {
  return (
    <div className="Pinturas">
      <Header/>
      <HeaderPC/>
        <Banner imagem={categoriesBanner}/>
      <CategoriesContent>
        <DescriptionContainer>
          <DescriptTitle>
           Você é um amante da arte?
          </DescriptTitle>
          <DescriptText>
           Você quer explorar a diversidade de expressões artísticas que existem no mundo? Então, você precisa conhecer a Ivanty, um projeto inovador que reúne elementos da arte clássica e da arte contemporânea em um só lugar. Aqui, você pode navegar por diferentes categorias de arte, como pintura, fotografia, escultura, e muito mais. Você também pode apreciar as obras de artistas renomados e novos talentos, e aprender sobre a história e o contexto de cada uma delas. Arte em Foco é uma página que celebra a beleza e a criatividade da arte em todas as suas formas.
          </DescriptText>
        </DescriptionContainer>
        <Categories link={'./pinturas'} backgroundImage={backgroundImage} categoriesText={text}/>
        <Categories link={'./fotografias'} backgroundImage={backgroundImage2} categoriesText={text2}/>
        <DescriptionContainer>
          <DescriptTitle>
           Não conseguiu escolher? 
          </DescriptTitle>
          <DescriptText>
           Veja algumas das obras que estão bombando em nossa plataforma: 
          </DescriptText>
          <PinturasLIst>
          <PinturasCard title={'A Ronda Nocturna'} author={'Rembrandt'} img={obra8} price={'899.99'}/>
          <PinturasCard title={'Autorretrato com Dois Círculos'} author={'Rembrandt'} img={obra9} price={'949.99'}/>
          <PinturasCard title={'A Persistência da Memória'} author={'Salvador Dalí'} img={obra10} price={'1049.99'}/>
          <PinturasCard title={'Cristo de São João da Cruz'} author={'Salvador Dalí'} img={obra11} price={'999.99'}/>
          <PinturasCard title={'David'} author={'Michelangelo'} img={obra12} price={'1199.99'}/>
          </PinturasLIst>
        </DescriptionContainer>
        
      </CategoriesContent>
      <Footer/>
    </div>
  );
}

export { CategoriesScreen }