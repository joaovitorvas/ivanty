import { PinturasCard } from "../PinturasCard";
import obra from './../../assets/images/campoDeTrigo.jpg'
import { GridContainer, ObrasEmDestaqueContainer, ObrasText } from "./styles";
let title = 'Campo de trigo'
let author = 'Vincent Van Gogh'
let price = '799,99'


export const ObrasDestaque = () => {
    return (
        <>
            <ObrasEmDestaqueContainer>
                <ObrasText>
                    Obras em destaque:
                </ObrasText>
                <GridContainer>
                    <PinturasCard title={title} author={author} img={obra} price={price}/>
                    <PinturasCard title={title} author={author} img={obra} price={price}/>
                    <PinturasCard title={title} author={author} img={obra} price={price}/>
                    <PinturasCard title={title} author={author} img={obra} price={price}/>
                </GridContainer>
            </ObrasEmDestaqueContainer>
        </>
    );
  }
