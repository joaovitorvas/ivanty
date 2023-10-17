import { PinturasCard } from "../PinturasCard";
import obra from './../../assets/images/campoDeTrigo.jpg'
import obra1 from './../../assets/vangogh/noiteEstrelada.jpg'
import obra2 from './../../assets/picasso/obra.jpg'
import obra3 from './../../assets/picasso/obras2.jpg'
import obra4 from './../../assets/davinci/obra.jpg'
import obra5 from './../../assets/davinci/obra2.webp'
import obra6 from './../../assets/monet/obras.jpg'
import obra7 from './../../assets/monet/obra2.jpg'
import obra8 from './../../assets/rembrandt/obra.jpg'
import obra9 from './../../assets/rembrandt/obra2.jpg'
import obra10 from './../../assets/dali/obra.jpg'
import obra11 from './../../assets/dali/obra2.jpg'
import obra12 from './../../assets/michelangelo/obra.jpg'
import obra13 from './../../assets/michelangelo/obra2.jpg'
import obra14 from './../../assets/raphael/obra.jpg'

import { GridContainer, ObrasEmDestaqueContainer, ObrasText } from "./styles";

export const ObrasDestaque = () => {
    return (
        <>
            <ObrasEmDestaqueContainer>
                <ObrasText>
                    Obras em destaque
                </ObrasText>
                <GridContainer>
                    <PinturasCard link={'./campo-de-trigo'} title={'Campo de trigo'} author={'Vincent Van Gogh'} img={obra} price={'799.99'}/>
                    <PinturasCard link={'./noite-estrelada'} title={'Noite Estrelada'} author={'Vincent Van Gogh'} img={obra1} price={'899.99'}/>
                    <PinturasCard link={'./o-quarto-azul'} title={'O Quarto Azul'} author={'Pablo Picasso'} img={obra2} price={'999.99'}/>
                    <PinturasCard link={'./retrato-de-gertrude-stein'} title={'Retrato de Gertrude Stein'} author={'Pablo Picasso'} img={obra3} price={'849.99'}/>
                    <PinturasCard link={'./monalisa'} title={'Mona Lisa'} author={'Leonardo da Vinci'} img={obra4} price={'1999.99'}/>
                    <PinturasCard link={'./a-ultima-ceia'} title={'A Última Ceia'} author={'Leonardo da Vinci'} img={obra5} price={'1499.99'}/>
                    <PinturasCard link={'./nenúfares'} title={'Nenúfares'} author={'Claude Monet'} img={obra6} price={'749.99'}/>
                    <PinturasCard link={'./mulheres-no-jardim'} title={'Mulheres no Jardim'} author={'Claude Monet'} img={obra7} price={'799.99'}/>
                    <PinturasCard link={'./a-ronda-nocturna'} title={'A Ronda Nocturna'} author={'Rembrandt'} img={obra8} price={'899.99'}/>
                    <PinturasCard link={'./autorretrato-com-dois-circulos'} title={'Autorretrato com Dois Círculos'} author={'Rembrandt'} img={obra9} price={'949.99'}/>
                    <PinturasCard link={'./a-persistencia-da-memoria'} title={'A Persistência da Memória'} author={'Salvador Dalí'} img={obra10} price={'1049.99'}/>
                    <PinturasCard link={'./cristo-de-sao-joao-da-cruz'} title={'Cristo de São João da Cruz'} author={'Salvador Dalí'} img={obra11} price={'999.99'}/>
                    <PinturasCard link={'./david'} title={'David'} author={'Michelangelo'} img={obra12} price={'1199.99'}/>
                    <PinturasCard link={'./a-criacao-de-adao'} title={'A Criação de Adão'} author={'Michelangelo'} img={obra13} price={'1249.99'}/>
                    <PinturasCard link={'./escola-de-atenas'} title={'Escola de Atenas'} author={'Raphael'} img={obra14} price={'799.99'}/>
                </GridContainer>
            </ObrasEmDestaqueContainer>
        </>
    );
  }
