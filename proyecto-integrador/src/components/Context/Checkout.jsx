import { useContext, useState } from "react"
import { CartContext } from "./CartContext"
import mockAPI from "../mockAPI"
import CarritoVacio from "../CarritoVacio"
import { Link } from "react-router-dom"

const Checkout = ()=>{
    const {carrito,totalProductosCarrito,sumarProductosCarrito,vaciarCarrito,generarPedidoCarrito} = useContext(CartContext)
    const[nombre,setNombre]=useState("")
    const[email,setEmail]=useState("")
    const[celular,setCelular]=useState("")
    const[pedidoOk,setPedidoOk] = useState(false)
    const[pedidoError,setPedidoError] = useState(false)

    const generarPedido = async () =>{
        try{

            const comprador =[nombre,email,celular]
            const productos = carrito.map(item=>({id:item.id,nombre:item.nombre,precioUnitario:item.precio,cantidad:item.cantidad,
                precioTotal:(item.precio*item.cantidad)}))
            const fecha = new Date()
            const fechaActual = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
            const pedido = {comprador,productos,total:sumarProductosCarrito(), fecha:fechaActual}
            
    
            const respuesta= await generarPedidoCarrito(pedido)
            console.log(respuesta)
            if(respuesta.status ==201){
                vaciarCarrito()
                setPedidoOk(true)
                console.info("Su pedido fue completado con exito")
            }else{
                setPedidoError(true)
            }
        }catch(error){
             setPedidoError(true)
        }
    }


   

    if(pedidoOk){
        return (

             <div className="container py-5">
                <div className="row">
                    <div className="col">
                            <h1 className="fw-bold mb-5">Tu pedido</h1>
                            <h3 className="fw-bold">Tu pedido fue realizado con éxito</h3>
                            <p className="fw-light">Para seguir comprando, navegar por las categorias en el sitio, o busque su producto</p>
                            <p> <Link to={"/productos"} className="btn btnColorVioleta"> IR A LA PAGINA PRINCIPAL </Link> </p>
                    </div>
                </div>
            </div>

        )
    }

    if(pedidoError){
        return (

             <div className="container py-5">
                <div className="row">
                    <div className="col">
                            <h1 className="fw-bold mb-5">Tu pedido</h1>
                            <h3 className="fw-bold">Error! No se puedo completar tu compra</h3>
                            <p className="fw-light">Para seguir comprando, navegar por las categorias en el sitio, o busque su producto</p>
                            <p> <Link to={"/productos"} className="btn btnColorVioleta"> IR A LA PAGINA PRINCIPAL </Link> </p>
                    </div>
                </div>
            </div>

        )
    }

     if(totalProductosCarrito() ==0){
        return (
           <CarritoVacio/>
        )
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control" value={nombre} onInput={(e)=>{setNombre(e.target.value)}} required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control" value={email} onInput={(e)=>{setEmail(e.target.value)}} required/>
                        </div>
                            <div className="mb-3">
                            <label className="form-label">Celular</label>
                            <input type="text" className="form-control" value={celular} onInput={(e)=>{setCelular(e.target.value)}}/>
                        </div>
                        <button type="button" className="btn btn-primary" onClick={generarPedido}>Generar Compra</button>
                        </form>
                </div>
                <div className="col">
                     <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" className="text-center">&nbsp;</th>
                                <th scope="col" className="text-center">Nombre</th>
                                <th scope="col" className="text-center">Precio U.</th>
                                <th scope="col" className="text-center">Cantidad</th>
                                <th scope="col" className="text-center">Precio</th>
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
                                    <td className="align-middle text-center">x{item.cantidad}</td>
                                    <td className="align-middle text-center">${item.precio * item.cantidad}</td>
                                </tr>
                             ))
                           }
                           <tr>
                            <td className="align-middle" colSpan={5}><b>Total a pagar</b></td>
                            <td className="align-middle text-center"><b>${sumarProductosCarrito()}</b></td>
                           </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default Checkout