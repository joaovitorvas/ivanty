import { CategoriesTitle, ImgContainer, Container } from "./styles";

export const Categories = (props) => {
    return (
        <>
            <Container>
                <a href={props.link}>
                <ImgContainer backgroundImage={props.backgroundImage}>
                    <CategoriesTitle>{props.categoriesText}</CategoriesTitle>
                </ImgContainer> 
                </a>
            </Container>
        </>
    );
  }
