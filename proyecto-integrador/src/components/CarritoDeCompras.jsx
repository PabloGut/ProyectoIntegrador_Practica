import { useContext } from 'react'
import productos from '../assets/productos.json'
import { CartContext } from './Context/CartContext'
import { Link } from 'react-router-dom'


const CarritoDeCompras = () => {
    const{carrito,vaciarCarrito, eliminarProductoDelCarrito,totalProductosCarrito, sumarProductosCarrito, 
           incrementarItems, decrementarItems} = useContext(CartContext)


    if(totalProductosCarrito() ==0){
        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col">
                            <h1 className="fw-bold mb-5">Mi carrito</h1>
                            <h3 className="fw-bold">Su carrito está vacío!</h3>
                            <p className="fw-light">Para seguir comprando, navegar por las categorias en el sitio, o busque su producto</p>
                            <p> <Link to={"/productos"} className="btn btnColorVioleta"> ELEGIR PRODUCTOS </Link> </p>
                    </div>
                </div>
            </div>
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
                            <td>&nbsp;</td>
                           </tr>
                        </tbody>
                    </table>

                </div>

            </div>
        </div>
    )
}

export default CarritoDeCompras