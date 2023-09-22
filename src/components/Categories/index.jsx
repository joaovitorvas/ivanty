import { CategoriesTitle, ImgContainer } from "./styles";

export const Categories = (props) => {
    return (
        <>
        <a href="/pinturas">
            <ImgContainer backgroundImage={props.backgroundImage}>
                <CategoriesTitle>{props.categoriesText}</CategoriesTitle>
           </ImgContainer> 
        </a>
        </>
    );
  }
