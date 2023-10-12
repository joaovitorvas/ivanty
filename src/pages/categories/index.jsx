import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import { HeaderPC } from "../../components/HeaderPc";
import { CategoriesContent, DescriptText, DescriptTitle, DescriptionContainer } from "./styles";
import backgroundImage from './../../assets/images/pintura.jpg'
import backgroundImage2 from './../../assets/images/fotografia.jfif'
import { Categories } from "../../components/Categories";
import categoriesBanner from './../../assets/images/categoriesBanner.jpg'
import { Banner } from "../../components/Banner";
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
           Você quer explorar a diversidade de expressões artísticas que existem no mundo? Então, você precisa conhecer a página Arte em Foco, um projeto inovador que reúne elementos da arte clássica e da arte contemporânea em um só lugar. Aqui, você pode navegar por diferentes categorias de arte, como pintura, fotografia, escultura, e muito mais. Você também pode apreciar as obras de artistas renomados e novos talentos, e aprender sobre a história e o contexto de cada uma delas. Arte em Foco é uma página que celebra a beleza e a criatividade da arte em todas as suas formas. Não perca tempo e visite agora mesmo!
          </DescriptText>
        </DescriptionContainer>
        <Categories link={'./pinturas'} backgroundImage={backgroundImage} categoriesText={text}/>
        <Categories link={'./fotografias'} backgroundImage={backgroundImage2} categoriesText={text2}/>
      </CategoriesContent>
      <Footer/>
    </div>
  );
}

export { CategoriesScreen }