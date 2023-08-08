import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { GlobalStyle } from './../src/globals/globalstyle';
import { Home } from './pages/home/index'

function App() {
  return (
    <Router>
    <GlobalStyle />
        <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  );
}

export default App;