import { CategoriesTitle, ImgContainer } from "./styles";

export const Categories = (props) => {
    return (
        <>
        <a href={props.link}>
            <ImgContainer backgroundImage={props.backgroundImage}>
                <CategoriesTitle>{props.categoriesText}</CategoriesTitle>
           </ImgContainer> 
        </a>
        </>
    );
  }
