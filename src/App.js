import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import { GlobalStyle } from './../src/globals/globalstyle';
import { Home } from './pages/home/index'
import { Card } from "./pages/card";
import { Perfil } from "./pages/perfil";
import { About } from "./pages/about";
import Login from "./pages/forms";
import { CategoriesScreen } from "./pages/categories";
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
import photoDaVinci from './assets/davinci/photo.png'
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
import { CategorieItem } from "./pages/categorieItem";
import popArt from './assets/images/brazilianDiversity.jpg'
import fotorrealismo from './assets/images/fotorreaslismoBiodiversity.jpg'
import arteConceitual from './assets/images/arteConceitual.jpg'
import arteMinimalista from './assets/images/arteMinimalista.jpg'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>  
    <GlobalStyle />
        <Routes>
        <Route path="/" element={<Home />} />
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
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<CategoriesScreen />} />
        <Route path="/artists" element={<Artists />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path="/profile" element={<EditPerfilPage />} /> 
        <Route path="/monalisa" element={
        <BuyItem 
          image={obraVinci}
          name={'Monalisa'}
          author={'Leonardo da Vinci'}
          price={'1999.90'}
          description={"A Monalisa é uma das pinturas mais reconhecidas e celebradas do mundo. Criada pelo famoso artista italiano Leonardo da Vinci no século XVI, esta obra-prima é conhecida por seu sorriso enigmático e sua técnica inovadora. A pintura retrata uma mulher sentada contra um fundo de paisagem distante, uma composição que era nova e inovadora na época. Hoje, a Monalisa é exibida no Museu do Louvre em Paris e continua a fascinar e inspirar visitantes de todo o mundo."}
          moreDetails={"A Monalisa é pintada em óleo sobre madeira de álamo e mede 77 cm por 53 cm. Leonardo da Vinci começou a pintar a Monalisa em 1503 ou 1504 em Florença, Itália. Embora a identidade exata da mulher retratada seja desconhecida, alguns especulam que ela pode ser Lisa Gherardini, a esposa de um comerciante florentino."}
        />} />
        <Route path="/campo-de-trigo" element={
    <BuyItem 
        image={obra3}
        name={'Campo de trigo'}
        author={'Vincent Van Gogh'}
        price={'799.99'}
        description={"Campo de trigo é uma obra de Vincent Van Gogh que retrata um campo de trigo sob um céu nublado. A pintura é conhecida por sua paleta vibrante e pinceladas expressivas."}
        moreDetails={"Vincent Van Gogh é conhecido por suas paisagens impressionistas e uso expressivo de cor e textura. Esta pintura é um exemplo perfeito de seu estilo único."}
    />} />

<Route path="/noite-estrelada" element={
    <BuyItem 
        image={obra2}
        name={'Noite Estrelada'}
        author={'Vincent Van Gogh'}
        price={'899.99'}
        description={"Noite Estrelada é uma das obras mais conhecidas de Vincent Van Gogh. A pintura retrata a vista da janela do quarto do artista em um asilo em Saint-Rémy-de-Provence, na França, com um céu dramático e estrelado."}
        moreDetails={"A Noite Estrelada é uma das obras mais reconhecidas e amadas de Van Gogh. A pintura é conhecida por suas pinceladas ousadas e uso expressivo da cor."}
    />} />

<Route path="/o-quarto-azul" element={
    <BuyItem 
        image={obraPicasso}
        name={'O Quarto Azul'}
        author={'Pablo Picasso'}
        price={'999.99'}
        description={"O Quarto Azul de Pablo Picasso é uma pintura a óleo sobre tela criada entre 1901 e 1904. A obra retrata uma mulher nua se curvando em uma banheira."}
        moreDetails={"O Quarto Azul faz parte do período azul de Picasso, uma fase em que ele pintou quase exclusivamente em tons de azul e azul-verde, pontuados por toques ocasionais de outras cores quentes."}
    />} />
    <Route path="/cristo-de-sao-joao-da-cruz" element={
    <BuyItem 
        image={obraDali2}
        name={'Cristo de São João da Cruz'}
        author={'Salvador Dalí'}
        price={'1499.99'}
        description={"Cristo de São João da Cruz é uma obra de Salvador Dalí executada em 1951. A pintura representa Jesus Cristo na cruz flutuando num céu escuro sobre um lago com um barco e pescadores. Embora seja uma representação da crucificação, é desprovido de pregos, sangue e da coroa de espinhos, porque, de acordo com Dalí, segundo um sonho que teve, essas características não fariam a sua ideia de Cristo."}
        moreDetails={"A pintura é conhecida como o 'Cristo de São João da Cruz,' porque o seu projeto é baseado num desenho do século XVI do frade espanhol São João da Cruz. A composição de Cristo é também baseada num triângulo e num círculo (o triângulo é formado por braços de Cristo, o círculo é formado pela cabeça de Cristo). O triângulo, uma vez que tem três lados, pode ser visto como uma referência à Trindade, e o círculo pode ser visto como uma alusão ao pensamento platônico."}
    />} />

<Route path="/david" element={
    <BuyItem 
        image={obraMichelangelo}
        name={'David'}
        author={'Michelangelo'}
        price={'1999.99'}
        description={"David é uma escultura de Michelangelo criada entre 1501 e 1504. É uma representação do herói bíblico David antes de sua batalha com Golias. A escultura tem 5.17 metros de altura e foi feita a partir de um único bloco de mármore."}
        moreDetails={"A escultura representa David com uma expressão concentrada e tensa, demonstrando a enorme habilidade de Michelangelo em retratar a anatomia humana. A obra está atualmente localizada na Galleria dell'Accademia, em Florença."}
    />} />

<Route path="/a-criacao-de-adao" element={
    <BuyItem 
        image={obraMichelangelo2}
        name={'A Criação de Adão'}
        author={'Michelangelo'}
        price={'2499.99'}
        description={"A Criação de Adão é um afresco pintado por Michelangelo no teto da Capela Sistina entre os anos de 1508 e 1510. A cena representa um episódio do Livro do Gênesis no qual Deus cria o primeiro homem a partir do pó da terra: Adão."}
        moreDetails={"Deus é representado como um ancião barbudo, envolto em um manto que divide com alguns anjos. Seu braço direito está esticado para criar o poder da vida de seu próprio dedo para Adão, o qual está com o braço esquerdo estendido em contraposição ao do criador."}
    />} />

  <Route path="/escola-de-atenas" element={
    <BuyItem 
        image={obraRaphael}
        name={'Escola de Atenas'}
        author={'Raphael'}
        price={'2999.99'}
        description={"Escola de Atenas é uma das mais famosas pinturas do renascentista italiano Rafael e representa a Academia de Atenas. Foi pintada entre 1509 e 1510 na Stanza della Segnatura sob encomenda do Vaticano."}
        moreDetails={"A pintura descreve a interpretação da filosofia como um ramo do conhecimento que simboliza o pensamento filosófico e a busca da verdade. Mostrando uma reunião de filósofos gregos envolvidos em várias atividades, o afresco é considerado um excelente exemplo da arte do Renascimento e considerada a obra-prima de Rafael."}
    />} />
    <Route path="/retrato-de-gertrude-stein" element={
    <BuyItem 
        image={obraPicasso2}
        name={'Retrato de Gertrude Stein'}
        author={'Pablo Picasso'}
        price={'849.99'}
        description={"Retrato de Gertrude Stein é uma pintura a óleo de Gertrude Stein, uma escritora americana e colecionadora de arte, feita por Pablo Picasso entre 1905 e 1906. A pintura está no Metropolitan Museum of Art em Nova York. É considerada uma das obras importantes do período rosa de Picasso."}
        moreDetails={"O retrato tem significado histórico, devido ao papel de Stein na vida inicial de Picasso como artista lutador e eventual sucesso comercial. Representa um passo significativo de transição na mudança do artista para o cubismo."}
    />} />


<Route path="/a-ultima-ceia" element={
    <BuyItem 
        image={obraVinci2}
        name={'A Última Ceia'}
        author={'Leonardo da Vinci'}
        price={'1499.99'}
        description={"A Última Ceia é uma pintura mural feita por Leonardo da Vinci de 1495 a 1498. Está localizada no refeitório do Convento de Santa Maria Delle Grazie, em Milão, Itália. A composição pictórica mede 4,60 por 8,80 metros e é uma das obras mais famosas do mundo e das mais conhecidas do artista, assim como uma das mais estudadas e copiadas da história da arte."}
        moreDetails={"A Última Ceia é uma das obras mais reconhecidas e amadas de Da Vinci. A pintura é conhecida por suas pinceladas ousadas e uso expressivo da cor."}
    />} />
<Route path="/retrato-de-gertrude-stein" element={
    <BuyItem 
        image={obra3}
        name={'Retrato de Gertrude Stein'}
        author={'Pablo Picasso'}
        price={'849.99'}
        description={"Retrato de Gertrude Stein é uma pintura icônica de Pablo Picasso, retratando a escritora americana Gertrude Stein. A obra é conhecida por sua representação única e modernista do sujeito."}
        moreDetails={"Este retrato é famoso por sua representação estilizada e abstrata de Gertrude Stein, que foi uma figura importante na cena artística parisiense do início do século XX."}
    />} />

<Route path="/nenúfares" element={
    <BuyItem 
        image={obraMonet}
        name={'Nenúfares'}
        author={'Claude Monet'}
        price={'749.99'}
        description={"Nenúfares é uma série de pinturas a óleo do impressionista francês Claude Monet. A série retrata o jardim de flores e a lagoa de nenúfares na casa de Monet em Giverny. As pinturas são famosas por sua representação vibrante e colorida da luz e da água."}
        moreDetails={"Os Nenúfares de Monet são frequentemente elogiados por sua representação quase abstrata da natureza, com pinceladas soltas e cores vibrantes que capturam a beleza efêmera da paisagem."}
    />} />

<Route path="/mulheres-no-jardim" element={
    <BuyItem 
        image={obraMonet2}
        name={'Mulheres no Jardim'}
        author={'Claude Monet'}
        price={'799.99'}
        description={"Mulheres no Jardim é uma pintura do artista impressionista francês Claude Monet. A obra retrata quatro mulheres em diferentes atividades num jardim, cada uma delas iluminada de maneira única, demonstrando a habilidade de Monet em capturar diferentes efeitos de luz."}
        moreDetails={"Esta pintura é um exemplo perfeito do estilo impressionista de Monet, com sua ênfase na luz natural, cores vibrantes e pinceladas soltas."}
    />} />

<Route path="/a-ronda-nocturna" element={
    <BuyItem 
        image={obraRembrandt}
        name={'A Ronda Nocturna'}
        author={'Rembrandt'}
        price={'899.99'}
        description={"A Ronda Nocturna é uma das obras mais famosas do pintor holandês Rembrandt. A pintura retrata uma cena noturna de uma companhia de milícia civil se preparando para marchar. É famosa por seu tamanho, dramaticidade e uso magistral da luz e sombra."}
        moreDetails={"A Ronda Nocturna é frequentemente elogiada por sua representação dramática e realista dos personagens, bem como pelo uso inovador da luz para criar profundidade e atmosfera."}
    />} />

<Route path="/autorretrato-com-dois-circulos" element={
    <BuyItem 
        image={obraRembrandt2}
        name={'Autorretrato com Dois Círculos'}
        author={'Rembrandt'}
        price={'949.99'}
        description={"Autorretrato com Dois Círculos é uma das obras mais famosas do pintor holandês Rembrandt. A pintura é conhecida por sua representação honesta e introspectiva do artista, bem como pelo uso simbólico de dois círculos ao fundo."}
        moreDetails={"Este autorretrato é frequentemente elogiado por sua representação emocionalmente carregada de Rembrandt, bem como pela habilidade técnica e uso expressivo da luz e sombra."}
    />} />

<Route path="/a-persistencia-da-memoria" element={
    <BuyItem 
        image={obraDali}
        name={'A Persistência da Memória'}
        author={'Salvador Dalí'}
        price={'1049.99'}
        description={"A Persistência da Memória é uma das obras mais famosas do pintor surrealista Salvador Dalí. A pintura é conhecida por suas imagens icônicas de relógios derretidos, que são frequentemente interpretados como uma representação do conceito fluido de tempo."}
        moreDetails={"A Persistência da Memória é frequentemente elogiada por sua representação imaginativa e surrealista da realidade, bem como pelo uso inovador de imagens para explorar ideias complexas."}
    />} />
    <Route path="/popart" 
    element={<CategorieItem banner={popArt} 
    text={'A pop art é uma arte vibrante e crítica, inspirada na cultura de massa. Venha conhecer a exposição Pop Art: A Arte que Explodiu no Museu de Arte Moderna de São Paulo e se surpreenda com as obras de Andy Warhol, Roy Lichtenstein e outros. A exposição vai até o dia 30 de novembro de 2023.'}
    title={'Pop Art'}/>} 
    />
   <Route path='/fotorrealismo' 
   element={<CategorieItem banner={fotorrealismo} 
   text={'O fotorrealismo é uma arte que busca reproduzir a realidade com precisão fotográfica. Venha conhecer a exposição Fotorrealismo: A Arte da Ilusão no Museu de Arte Contemporânea de São Paulo e se impressione com as obras de Richard Estes, Chuck Close, Audrey Flack e outros. A exposição vai até o dia 15 de dezembro de 2023.'} 
   title={'Fotorrealismo'}/>} 
   />

   <Route path='/arteconceitual' element={<CategorieItem banner={arteConceitual} text={'A arte conceitual é uma forma de arte em que o conceito ou a ideia por trás da obra é mais importante do que o aspecto visual ou sensorial do produto final. Essa forma de arte enfatiza a importância de uma ideia ou conceito sobre a técnica e a estética, usada principalmente para expressar o abstrato. Ela surgiu como um movimento artístico nos anos 1960 e o termo geralmente se refere à arte feita desde meados dos anos 1960 até meados dos anos 1970. Venha conhecer a exposição Arte Conceitual: A Arte da Ideia no Museu de Arte Moderna de São Paulo e descubra como artistas como Joseph Kosuth, Art & Language, John Baldessari e outros exploraram e expressaram suas ideias.'} title={'Arte Conceitual'}/>} /> 
   <Route path='/arteminimalista' element={<CategorieItem banner={arteMinimalista} text={'A arte minimalista é um estilo de arte e design que se caracteriza pela extrema simplicidade, focando em linhas limpas, cores mínimas e formas básicas. A arte minimalista não contém um significado subjacente ou uma compreensão mais profunda, como na maioria das artes abstratas. Ela se originou em Nova York no final dos anos 1960 e é marcada por uma abordagem literal e objetiva. Venha conhecer a exposição Arte Minimalista: A Arte do Essencial no Museu de Arte Contemporânea de São Paulo e se encante com as obras de Frank Stella, Donald Judd, Sol LeWitt e outros.'} title={'Arte Minimalista'}/>} />
   

        </Routes>
    </BrowserRouter>
  );
}

export default App;