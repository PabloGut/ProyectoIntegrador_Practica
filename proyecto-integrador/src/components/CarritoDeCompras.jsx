import { useContext } from 'react'
import productos from '../assets/productos.json'
import { CartContext } from './Context/CartContext'
import { Link } from 'react-router-dom'
import CarritoVacio from "./CarritoVacio";

const CarritoDeCompras = () => {
    const{carrito,vaciarCarrito, eliminarProductoDelCarrito,totalProductosCarrito, sumarProductosCarrito, 
           incrementarItems, decrementarItems} = useContext(CartContext)


    if(totalProductosCarrito() ==0){
        return (
           <CarritoVacio/>
        )
    }
    return (
           <div className="container py-5">
            <div className="row">
                <div className="col">

                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" className="text-center">#</th>
                                <th scope="col" className="text-center">Nombre</th>
                                <th scope="col" className="text-center">Marca</th>
                                <th scope="col" className="text-center">Precio U.</th>
                                <th scope="col" className="text-center">Cantidad</th>
                                <th scope="col" className="text-center">Precio</th>
                                <th scope="col" className="text-center"><button className="btn bg-secondary-subtle colorVioleta btn-sm" 
                                   onClick={vaciarCarrito}>Vaciar Carrito</button></th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                             carrito.map(item => (
                                <tr key={item.id}>
                                    <td className="align-middle"><img src={item.foto} alt={item.nombre} width={80} /></td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="align-middle text-center">{item.marca}</td>
                                    <td className="align-middle text-center">{item.precio}</td>
                                    <td className="align-middle text-center"><button className="btn bg-secondary-subtle colorVioleta 
                                      btn-sm mx-2" onClick={()=>{decrementarItems(item.id)}}>-</button>{item.cantidad}<button className="btn bg-secondary-subtle colorVioleta 
                                      btn-sm mx-2" onClick={()=>{incrementarItems(item.id)}}>+</button></td>
                                    <td className="align-middle text-center">${item.precio * item.cantidad}</td>
                                    <td className="align-middle text-end"><button className="btn bg-secondary-subtle colorVioleta 
                                      btn-sm" onClick={()=>{eliminarProductoDelCarrito(item.id)}}>Eliminar</button></td>
                                   
                                </tr>
                             ))
                           }
                           <tr>
                            <td className="align-middle" colSpan={5}><b>Total a pagar</b></td>
                            <td className="align-middle text-center"><b>${sumarProductosCarrito()}</b></td>
                            <td className="align-middle text-end"><Link to={"/checkout"} className="btn bg-secondary-subtle colorVioleta btn-sm">Terminar Compra</Link></td>
                           </tr>
                        </tbody>
                    </table>

                </div>

            </div>
        </div>
    )
}

export default CarritoDeCompras