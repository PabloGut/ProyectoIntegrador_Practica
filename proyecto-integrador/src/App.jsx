import CarritoDeCompras from "./components/CarritoDeCompras"
import Catalogo from "./components/Catalogo"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Alta from "./components/Alta"
import {Routes, Route} from "react-router-dom"
import Checkout from "./components/Context/Checkout"

/*
npm i react-router-dom 
*/

/*
Min 2:11:02 Inicio etapa6
*/
function App() {

  return (
    <>
     <Header/>
     <Routes>
      <Route path={"/"} element={ <Catalogo/>}/>
      <Route path={"/productos"} element={ <Catalogo/>}/>
      <Route path={"/productos/:categoria"} element={ <Catalogo/>}/>
      <Route path={"/alta"} element={<Alta/>}/>
      <Route path={"/carrito"} element={<CarritoDeCompras/>}/>
      <Route path={"/checkout"} element={<Checkout/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
