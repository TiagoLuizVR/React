import Soma from './componentes/Soma'
import Subtracao from './componentes/Subtracao'
import Multiplicacao from './componentes/Multiplicacao'
import Divisao from './componentes/Divisao'
import './App.css'
import styles from './styles/App.module.css'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <header id={styles.cabecalho}>
          <div className={styles.opmenu}><Link to={"TelaSoma"}>Adição</Link></div>
          <div className={styles.opmenu}><Link to={"TelaSub"}>Subtração</Link></div>
          <div className={styles.opmenu}><Link to={"TelaMult"}>Multiplicação</Link></div>
          <div className={styles.opmenu}><Link to={"TelaDiv"}>Divisão</Link></div>
        </header>
        <Routes>
          <Route path="TelaSoma" element={<Soma />}></Route>
          <Route path="TelaSub" element={<Subtracao />}></Route>
          <Route path="TelaMult" element={<Multiplicacao />}></Route>
          <Route path="TelaDiv" element={<Divisao />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}