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
import { About } from "./pages/about";
import Login from "./pages/forms";
import { Fotografias } from "./pages/fotografias";
import { Categories } from "./pages/categories";
import { Obras } from "./pages/obras";
import { Artists } from "./pages/artists";

function App() {
  return (
    <Router>
    <GlobalStyle />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pinturas" element={<Pinturas />} />
        <Route path="/card" element={<Card />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/fotografias" element={<Fotografias />} />
        <Route path="/pinturas" element={<Pinturas />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/obras" element={<Obras />} />
        <Route path="/artists" element={<Artists />} />
        {/* <Route path="/oGrito" element={<PinturaOGrito />} /> */}
        </Routes>
    </Router>
  );
}

export default App;