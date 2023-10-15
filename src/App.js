import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import { GlobalStyle } from './../src/globals/globalstyle';
import { Home } from './pages/home/index'
import { Pinturas } from './pages/pinturas/index'
// import { PinturaOGrito } from './pages/pinturaOGrito/index'
import { Card } from "./pages/card";
import { Perfil } from "./pages/perfil";
import { About } from "./pages/about";
import Login from "./pages/forms";
import { Fotografias } from "./pages/fotografias";
import { CategoriesScreen } from "./pages/categories";
import { Obras } from "./pages/obras";
import { Artists } from "./pages/artists";
import Register from "./pages/register";
import { BuyItem } from "./pages/buyItem";
import { EditPerfilPage } from "./pages/editPerfil";
import photo from './assets/images/artist.jpg'
import obra from './assets/vangogh/comedoresDeBatata.jpg'
import obra2 from './assets/vangogh/noiteEstrelada.jpg'
import obra3 from './assets/vangogh/campoDeTrigo.jpg'
import photoPicasso from './assets/picasso/photo.jpg'
import obraPicasso from './assets/picasso/obra.jpg'
import obraPicasso2 from './assets/picasso/obras2.jpg'
import obraPicasso3 from './assets/picasso/obra3.jpg'
import photoDaVinci from './assets/davinci/photo.jpg'
import obraVinci from './assets/davinci/obra.jpg'
import obraVinci2 from './assets/davinci/obra2.webp'
import obraVinci3 from './assets/davinci/obra3.jpg'
import photoMonet from './assets/monet/photo.jpg'
import obraMonet from './assets/monet/obras.jpg'
import obraMonet2 from './assets/monet/obra2.jpg'
import obraMonet3 from './assets/monet/obra3.jpg'
import photoRembrandt from './assets/rembrandt/photo.jpg'
import obraRembrandt from './assets/rembrandt/obra.jpg'
import obraRembrandt2 from './assets/rembrandt/obra2.jpg'
import obraRembrandt3 from './assets/rembrandt/obra3.jpg'
import photoDali from './assets/dali/photo.jpg'
import obraDali from './assets/dali/obra.jpg'
import obraDali2 from './assets/dali/obra2.jpg'
import obraDali3 from './assets/dali/obra3.jpg'
import photoWarhol from './assets/warhol/photo.webp'
import obraWarhol from './assets/warhol/obra.jpg'
import obraWarhol2 from './assets/warhol/obra2.jpg'
import obraWarhol3 from './assets/warhol/obra3.jpg'
import photoMichelangelo from './assets/michelangelo/photo.jpg'
import obraMichelangelo from './assets/michelangelo/obra.jpg'
import obraMichelangelo2 from './assets/michelangelo/obra2.jpg'
import obraMichelangelo3 from './assets/michelangelo/obra3.webp'
import photoRaphael from './assets/raphael/photo.jpg'
import obraRaphael from './assets/raphael/obra.jpg'
import obraRaphael2 from './assets/raphael/obra2.jpg'
import obraRaphael3 from './assets/raphael/obra3.jpg'
import photoVermeer from './assets/vermeer/photo.jpg'
import obraVermeer from './assets/vermeer/obra.jpg'
import obraVermeer2 from './assets/vermeer/obra2.jpg'
import obraVermeer3 from './assets/vermeer/obra3.jpg'
import photoCaravaggio from './assets/caravaggio/photo.jpg'
import obraCaravaggio from './assets/caravaggio/obra.jpg'
import obraCaravaggio2 from './assets/caravaggio/obra2.jpg'
import obraCaravaggio3 from './assets/caravaggio/obra3.jpg'
import photoBotticelli from './assets/boticelli/photo.png'
import obraBotticelli from './assets/boticelli/obra.jpg'
import obraBotticelli2 from './assets/boticelli/obra2.jpg'
import obraBotticelli3 from './assets/boticelli/obra3.jpg'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>  
    <GlobalStyle />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pinturas" element={<Pinturas />} />
        <Route path="/card" element={<Card />} />
        <Route path="/vangogh" element={<Perfil backgrondPhoto={obra2} photo={photo} name={'Van Gogh'} head={'Pintor/Holanda/37 anos'} bio={'Vincent Van Gogh (1853-1890) foi um importante pintor holandês, um dos maiores representantes da pintura pós-impressionista.'} title={'Noite estrelada'} title2={'Campo de Trigo'} title3={'Os comedores de Batata'} author={'Vincent Van Gogh'} obra={obra2} obra2={obra3} obra3={obra} price={1999.90} price2={1199.90} price3={'899.90'} />} />
        <Route path="/picasso" element={<Perfil backgrondPhoto={obraPicasso} photo={photoPicasso} name={'Pablo Picasso'} head={'Pintor/Espanhol/91 anos'} bio={'Pablo Picasso foi um pintor, escultor, ceramista, cenógrafo, poeta e dramaturgo espanhol. Nasceu em Málaga em 1881 e morreu em Mougins em 1973. Foi um dos maiores e mais influentes artistas do século XX, co-fundador do cubismoe inventor da colagem.'} title={'O quarto azul'} title2={'Retrato de Gertrude Stein'} title3={'Chicago Picasso'} author={'Pablo Picasso'} obra={obraPicasso} obra2={obraPicasso2} obra3={obraPicasso3} price={1999.90} price2={1199.90} price3={'899.90'} />} />
        <Route path="/davinci" element={<Perfil backgrondPhoto={obraVinci} photo={photoDaVinci} name={'Leonardo da Vinci'} head={'cientista, matemático, engenheiro, inventor, anatomista, pintor, escultor, arquiteto, botânico, poeta e músico.'} bio={'Leonardo da Vinci (1452-1519) foi um polímata italiano do Renascimento, considerado um dos maiores gênios da humanidade. Ele se destacou como cientista, matemático, engenheiro, inventor, anatomista, pintor, escultor, arquiteto, botânico, poeta e músico. É considerado um dos maiores pintores de todos os tempos. Seus trabalhos e projetos científicos quase sempre ficaram escondidos em livros de anotações'} title={'Mona Lisa'} title2={'A última ceia'} title3={'Homem Vitruviano'} author={'Pablo Picasso'} obra={obraVinci} obra2={obraVinci2} obra3={obraVinci3} price={1999.90} price2={1199.90} price3={'899.90'} />} />
        <Route path="/monet" element={<Perfil backgrondPhoto={obraMonet} photo={photoMonet} name={'Claude Monet'} head={'Pintor/Francês/86 anos'} bio={'Claude Monet (1840-1926) foi um pintor francês e o mais célebre entre os pintores impressionistas. O termo impressionismo surgiu devido a um dos primeiros quadros de Monet, "Impressão, nascer do sol", quando de uma crítica feita ao quadro pelo pintor e escritor Louis Leroy.'} title={'Nenúfares'} title2={'Mulheres no Jardim'} title3={'A Ponte Japonesa'} author={'Claude Monet'} obra={obraMonet} obra2={obraMonet2} obra3={obraMonet3} price={1999.90} price2={1199.90} price3={'899.90'} />} />
        <Route path="/rembrandt" element={<Perfil backgrondPhoto={obraRembrandt} photo={photoRembrandt} name={'Rembrandt'} head={'Pintor/Holandês/63 anos'} bio={'Rembrandt Harmenszoon van Rijn (1606-1669) foi um pintor e gravador holandês. É geralmente considerado um dos maiores nomes da história da arte europeia e o mais importante na história da Holanda.'} title={'A Ronda Nocturna'} title2={'Autorretrato com Dois Círculos'} title3={'A Lição de Anatomia do Dr. Nicolaes Tulp'} author={'Rembrandt'} obra={obraRembrandt} obra2={obraRembrandt2} obra3={obraRembrandt3} price={1999.90} price2={1199.90} price3={'899.90'} />} />
        <Route path="/dali" element={<Perfil backgrondPhoto={obraDali} photo={photoDali} name={'Salvador Dalí'} head={'Pintor/Espanhol/84 anos'} bio={'Salvador Dalí (1904-1989) foi um pintor catalão, um dos maiores representantes do surrealismo. Dalí é conhecido pelo seu trabalho surrealista e por suas habilidades pictóricas precisas.'} title={'A Persistência da Memória'} title2={'Cristo de São João da Cruz'} title3={'O Grande Masturbador'} author={'Salvador Dalí'} obra={obraDali} obra2={obraDali2} obra3={obraDali3} price={1999.90} price2={1199.90} price3={'899.90'} />} />
        <Route path="/warhol" element={<Perfil backgrondPhoto={obraWarhol} photo={photoWarhol} name={'Andy Warhol'} head={'Artista/Estados Unidos/58 anos'} bio={'Andy Warhol (1928-1987) foi um artista, diretor e produtor americano. Ele foi uma figura central no movimento de arte pop e é conhecido por explorar a relação entre expressão artística, cultura de celebridades e publicidade.'} title={'Latas de Sopa Campbell'} title2={'Marilyn Monroe'} title3={'Oito Elvises'} author={'Andy Warhol'} obra={obraWarhol} obra2={obraWarhol2} obra3={obraWarhol3} price={1999.90} price2={1199.90} price3={'899.90'} />} />
        <Route path="/michelangelo" element={<Perfil backgrondPhoto={obraMichelangelo} photo={photoMichelangelo} name={'Michelangelo'} head={'Escultor/Pintor/Arquiteto/Poeta/Itália/88 anos'} bio={'Michelangelo (1475-1564) foi um pintor, escultor, poeta e arquiteto italiano, considerado um dos maiores criadores na história da arte do ocidente.'} title={'David'} title2={'A Criação de Adão'} title3={'A Última Julgamento'} author={'Michelangelo'} obra={obraMichelangelo} obra2={obraMichelangelo2} obra3={obraMichelangelo3} price={1999.90} price2={1199.90} price3={'899.90'} />} />
        <Route path="/raphael" element={<Perfil backgrondPhoto={obraRaphael} photo={photoRaphael} name={'Raphael'} head={'Pintor/Itália/37 anos'} bio={'Raphael (1483-1520) foi um mestre da pintura e da arquitetura da escola de Florença durante o Renascimento italiano.'} title={'Escola de Atenas'} title2={'Madona Sistina'} title3={'Retrato de Baldassare Castiglione'} author={'Raphael'} obra={obraRaphael} obra2={obraRaphael2} obra3={obraRaphael3} price={1999.90} price2={1199.90} price3={'899.90'} />} />
        <Route path="/vermeer" element={<Perfil backgrondPhoto={obraVermeer} photo={photoVermeer} name={'Johannes Vermeer'} head={'Pintor/Holandês/43 anos'} bio={'Johannes Vermeer (1632-1675) foi um pintor holandês renomado por suas obras detalhadas que retratam cenas domésticas comuns.'} title={'A Leiteira'} title2={'A Rua de Delft'} title3={'A Carta de Amor'} author={'Johannes Vermeer'} obra={obraVermeer} obra2={obraVermeer2} obra3={obraVermeer3} price={1999.90} price2={1199.90} price3={'899.90'} />} />
        <Route path="/caravaggio" element={<Perfil backgrondPhoto={obraCaravaggio} photo={photoCaravaggio} name={'Caravaggio'} head={'Pintor/Itália/38 anos'} bio={'Caravaggio (1571-1610) foi um pintor italiano notável por seu uso realista de luz e sombra.'} title={'A Ceia em Emaús'} title2={'David com a Cabeça de Golias'} title3={'Judite Decapitando Holofernes'} author={'Caravaggio'} obra={obraCaravaggio} obra2={obraCaravaggio2} obra3={obraCaravaggio3} price={1999.90} price2={1199.90} price3={'899.90'} />} />
        <Route path="/botticelli" element={<Perfil backgrondPhoto={obraBotticelli} photo={photoBotticelli} name={'Sandro Botticelli'} head={'Pintor/Itália/65 anos'} bio={'Sandro Botticelli (1445-1510) foi um pintor italiano da primeira parte do Renascimento. Ele é conhecido por suas representações mitológicas e religiosas.'} title={'O Nascimento de Vênus'} title2={'Primavera'} title3={'A Adoração dos Magos'} author={'Sandro Botticelli'} obra={obraBotticelli} obra2={obraBotticelli2} obra3={obraBotticelli3} price={1999.90} price2={1199.90} price3={'899.90'} />} />
        <Route path="/fotografias" element={<Fotografias />} />
        <Route path="/pinturas" element={<Pinturas />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<CategoriesScreen />} />
        <Route path="/obras" element={<Obras />} />
        <Route path="/artists" element={<Artists />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path="/buyItem" element={<BuyItem />} /> 
        <Route path="/profile" element={<EditPerfilPage />} /> 
        </Routes>
    </BrowserRouter>
  );
}

export default App;