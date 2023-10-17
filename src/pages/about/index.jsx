import { Banner } from "../../components/Banner";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import { HeaderPC } from "../../components/HeaderPc";
import surrealistBanner from './../../assets/images/surrealistBanner.png'
import { Container, Image, Ivanty, Subtitle, Text, Title } from "./styles";
import womanBanner from './../../assets/images/IVANTY.png'
import brazilianDiversity from './../../assets/images/brazilianDiversity.jpg'

const About = (props) => {
  return (
    <div className="Pinturas">
      <Header link={'./artists'} item={'Artistas'} link2={'./categories'} item2={'Categories'}/>
      <HeaderPC/>
      <Banner imagem={surrealistBanner}/>
      <Container>
        <Title>O QUE É A <Ivanty>IVANTY</Ivanty>?</Title>
        <Image src={womanBanner}/>
        <Text>
          Somos uma vitrine digital de obras de arte com o objetivo de criar um espaço no mercado de trabalho para os pequenos artistas, e também incentivar a compra de arte, propondo um local onde os artistas possam expor e vender suas obras.
          </Text>
        <Title>
          O QUE NÓS LEVOU A PRODUZIR ESSA VITRINE?
          </Title>
        <Subtitle>
          Falta de Oportunidade
          </Subtitle>
        <Text>
        Um problema que vários artistas enfrentam no início de sua carreira é a falta de mercado e rentabilidade da arte.
        </Text>
        <Subtitle>
          O mercado de arte cresce em 50%
        </Subtitle>
        <Text>
        O mercado de arte contemporânea teve um desempenho histórico no primeiro semestre de 2022, com crescimento de 50%!
        </Text>
        <Image src={brazilianDiversity}/>
      </Container>
      <Footer/>
    </div>
  );
}

export { About }