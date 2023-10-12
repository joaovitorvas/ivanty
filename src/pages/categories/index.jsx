import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import { HeaderPC } from "../../components/HeaderPc";
import {Banner} from './../../components/Banner'
import bannerCategories from './../../assets/images/bannerCategories.jpg'
import { CategoriesContent } from "./styles";
import { Categories } from "../../components/Categories";
import backgroundImage from './../../assets/images/pintura.jpg'
import backgroundImage2 from './../../assets/images/fotografia.jfif'
let text = 'Pinturas'
let text2 = 'Fotografias'

const CategoriesScreen = (props) => {
  return (
    <div className="Pinturas">
      <Header/>
      <HeaderPC/>
      <CategoriesContent>
        <Banner imagem={bannerCategories}/>
        <Categories link={'./pinturas'} backgroundImage={backgroundImage} categoriesText={text}/>
        <Categories link={'./fotografias'} backgroundImage={backgroundImage2} categoriesText={text2}/>
      </CategoriesContent>
      <Footer/>
    </div>
  );
}

export { CategoriesScreen }