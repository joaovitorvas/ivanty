import { Header } from "./components/Header/index";
import { GlobalStyle } from "./globals/globalstyle";
import { Banner } from "./components/Banner";
import { MainContainer } from "./components/Main";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
        <Header/>
        <Banner/>
        <MainContainer/>
    </div>
  
  );
}

export default App;
