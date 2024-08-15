import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./components/pages/Home"
import Contato from "./components/pages/Contato"
import Empresa from "./components/pages/Empresa"
import Footer from "./components/layout/Footer"

export default function App() {

  return (
    <BrowserRouter>
      <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/empresa"}>Empresa</Link></li>
        <li><Link to={"/contato"}>Entre em Contato</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}