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

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>  
    <GlobalStyle />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pinturas" element={<Pinturas />} />
        <Route path="/card" element={<Card />} />
        <Route path="/perfil" element={<Perfil />} />
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