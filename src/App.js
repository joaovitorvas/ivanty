import { Header } from "./components/Header/index";
import { GlobalStyle } from "./globals/globalstyle";
import { Banner } from "./components/Banner";
import { Main } from "./components/Main";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
        <Header/>
        <Banner/>
        <Main/>
    </div>
  
  );
}

export default App;
