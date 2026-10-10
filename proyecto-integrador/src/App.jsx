import CarritoDeCompras from "./components/CarritoDeCompras"
import Catalogo from "./components/Catalogo"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Alta from "./components/Alta"
import {Routes, Route} from "react-router-dom"

/*
npm i react-router-dom 
*/

/*
Min 2:01:56 programar eliminar producto del carrito
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
     </Routes>
     <Footer/>
    </>
  )
}

export default App
