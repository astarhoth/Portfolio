import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Sobre from './pages/sobre/sobre.jsx';
import Projetos from './pages/projetos/projetos.jsx';
import Header from "./contents/header.jsx";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/projetos" element={<Projetos />} />
      </Routes>
    </>
  );
}
