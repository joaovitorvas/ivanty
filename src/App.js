import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { GlobalStyle } from './../src/globals/globalstyle';
import { Home } from './pages/home/index'
import { Pinturas } from './pages/pinturas/index'
// import { PinturaOGrito } from './pages/pinturaOGrito/index'
import { Card } from "./pages/card";
import { Perfil } from "./pages/perfil";

function App() {
  return (
    <Router>
    <GlobalStyle />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pinturas" element={<Pinturas />} />
        <Route path="/card" element={<Card />} />
        <Route path="/perfil" element={<Perfil />} />
        {/* <Route path="/oGrito" element={<PinturaOGrito />} /> */}
        </Routes>
    </Router>
  );
}

export default App;