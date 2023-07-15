import { Header } from "./components/Header/index";
import { GlobalStyle } from "./globals/globalstyle";
import { Banner } from "./components/Banner";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
        <Header/>
        <Banner/>
    </div>
  
  );
}

export default App;
