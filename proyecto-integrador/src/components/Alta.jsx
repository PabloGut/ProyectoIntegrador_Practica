import { useState } from "react"
import productosJSON from "../assets/productos.json"
//MINUTO 2:26 clase 4
const Alta = () => {
   // let productos =[]
   //const[productos,setProductos] = useState([])
   const[productos,setProductos] = useState(productosJSON)
   const[nombre,setNombre]  = useState("Smart TV Samsung 55")
   const[precio,setPrecio]  = useState(1000)
   const[stock,setStock]  = useState(1000)
   const[marca,setMarca]  = useState("Samsung")
   const[categoria,setCategoria]  = useState("TV")
   const[detalle,setDetalle]  = useState("Smart TV Samsung 55")
   const[foto,setFoto]  = useState("https://images.fravega.com/f500/7f5361a66917eb266870f62a3c414a6a.jpg")
   const[envio,setEnvio]  = useState(false)
   const[modoEdicion,setModoEdicion]  = useState(false)
   const[IdEdicion,setIdEdicion]  = useState(0)
   

   const generarId = () => {
    return (productos.length +1)
   }


    const limpiarCampos = () => {
        setNombre("")
        setPrecio("")
        setStock("")
        setMarca("")
        setCategoria("")
        setDetalle("")
        setFoto("")
        setEnvio(false)
   }
    const cancelarEdicion = ()=>{
        setModoEdicion(false)
        setIdEdicion(0)
        limpiarCampos()
   }


   const guardarItem = (e) => {
    console.log("Guardar!!!")
    const id = generarId()
    const producto = {id, nombre, precio, stock, marca, categoria, detalle, foto, envio:(envio==="true" ? true : false)}
    setProductos([...productos, producto])
    console.log(productos)
   }

   const editarItem = () => {
        const producto = productos.find(item => item.id === IdEdicion)
        producto.nombre = nombre
        producto.precio = precio
        producto.stock = stock
        producto.marca = marca
        producto.categoria = categoria
        producto.detalle = detalle
        producto.foto = foto
        producto.envio = envio==="true" ? true : false
         console.log("Se actualizó correctamente el producto con #: " + IdEdicion)
         cancelarEdicion()
   }

   const eliminarItem = (id) =>{
    const productosActualizados = productos.filter(item => item.id != id)
       setProductos([...productosActualizados])
       console.log(" Se elimino correctamente el producto con #: " + id)
   }

   const editarProducto = (id)=>{
        setModoEdicion(true)
        setIdEdicion(id)
        const producto = productos.find(item => item.id === id)
        setNombre(producto.nombre)
        setPrecio(producto.precio)
        setStock(producto.stock)
        setMarca(producto.marca)
        setCategoria(producto.categoria)
        setDetalle(producto.detalles)
        setFoto(producto.foto)
        setEnvio(producto.envio)

   }

   const eliminarProducto = (id)=>{
    const producto = productos.find(item => item.id === id)
    const respuesta = confirm("¿Está seguro que desea eliminar el producto "+ producto.nombre + "?")

    if(respuesta){
       eliminarItem(id)
    }

   }
  
   //value={nombre} onInput={(e)=>{setNombre(e.target.value)}
   // value significa que el valor del input es igual al estado nombre, y onInput significa que cuando el usuario escriba en el input, se ejecutará la función setNombre, que actualizará el estado nombre con el valor del input.
    //la diferencia con onChange es que onInput se ejecuta cada vez que el usuario escribe en el input, mientras que onChange se ejecuta cuando el usuario termina de escribir y sale del input.

    return (
        <>
          <div className="container  my-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 bg-white p-3">
                       <h2 className="fw-bold">{modoEdicion ? "Editar" : "Alta de"} Productos</h2>   

                        <form>
                            <div className="mb-3">
                                <label  className="form-label">Nombre</label>
                                <input type="text" className="form-control" value={nombre} onInput={(e)=>{setNombre(e.target.value)}}/>
                            </div>
                             <div className="mb-3">
                                <label  className="form-label">Precio</label>
                                <input type="number" className="form-control" value={precio} onInput={(e)=>{setPrecio(e.target.value)}}/>
                            </div>
                            <div className="mb-3">
                                <label  className="form-label">Stock</label>
                                <input type="number" className="form-control" value={stock} onInput={(e)=>{setStock(e.target.value)}}/>
                            </div>
                             <div className="mb-3">
                                <label  className="form-label">Marca</label>
                                <input type="text" className="form-control" value={marca} onInput={(e)=>{setMarca(e.target.value)}}/>
                            </div>
                             <div className="mb-3">
                                <label  className="form-label">Categoria</label>
                                <select className="form-select" value={categoria} onInput={(e)=>{setCategora(e.target.value)}}>
                                    <option value="tv">TV</option>
                                    <option value="electrodomésticos">Electrodomésticos</option>
                                    <option value="deportes">Deportes</option>
                                    <option value="herramientas">Herramientas</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label  className="form-label">Detalle</label>
                                <textarea className="form-control" rows="5" value={detalle} onInput={(e)=>{setDetalle(e.target.value)}} />
                            </div>
                            <div className="mb-3">
                                <label  className="form-label">Foto</label>
                                <input type="text" className="form-control" value={foto} onInput={(e)=>{setFoto(e.target.value)}}/>
                            </div>
                             <div className="mb-3">
                                <label  className="form-label">Envio Grátis</label>
                                 <select className="form-select" value={envio} onInput={(e)=>{setEnvio(e.target.value)}}>
                                    <option value="true">Si</option>
                                    <option value="false">No</option>
                                </select>
                            </div>
                            <button type="button" className={`btn ${modoEdicion ? "btn-warning" : "btn-primary"}`} onClick={modoEdicion ? editarItem : guardarItem}>{modoEdicion ? "Editar" : "Guardar"}</button> {modoEdicion && <button className="btn btn-secondary" onClick={cancelarEdicion}>Cancelar</button>}
                            </form>

                    </div>
                </div>
            </div>
          {productos.length == 0 ?   <div className="container py-5">
                <div className="row">
                    <div className="col text-center">
                            <div className="alert alert-danger" role="alert">
                                <h3 classNema="fw-bold">No hay productos</h3>
                            </div>
                    </div>
                </div>
            </div> :    
          <div className="container-fluid bg-white">
                <div className="row">
                    <div className="">

                          <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" className="text-center"></th>
                                <th scope="col" className="text-center">Nombre</th>
                                <th scope="col" className="text-center">Precio U.</th>
                                <th scope="col" className="text-center">Stock</th>
                                <th scope="col" className="text-center">Marca</th>
                                <th scope="col" className="text-center">Categoria</th>
                                {/*<th scope="col" className="text-center">Detalles</th>*/}
                                <th scope="col" className="text-center">Envío Grátis</th>
                                <th scope="col" className="text-center"></th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                             productos.map(item => (
                                <tr key={item.id} className={`${item.id===IdEdicion ? "table-active" : ""}`}>
                                    <td className="align-middle"><img src={item.foto} alt={item.nombre} width={80} /></td>
                                    <td className="align-middle fw-light">{item.nombre}</td>
                                    <td className="align-middle text-center fw-light">${item.precio}</td>
                                    <td className="align-middle text-center fw-light">{item.stock}</td>
                                    <td className="align-middle text-center fw-light">{item.marca}</td>
                                    <td className="align-middle text-center fw-light">{item.categoria}</td>
                                    {/*<td className="align-middle text-center fw-light">{item.detalles}</td>*/}
                                    <td className="align-middle text-center fw-light">{item.envio ? <b>Sí</b> : <span>No</span>}</td>
                                    <td className="align-middle text-center fw-light"><button className="btn btn-warning btn-sm me-1" onClick={()=>{editarProducto(item.id)}}>Editar</button>
                                    <button className="btn btn-danger btn-sm" disabled={modoEdicion ? true : false} onClick={()=>{eliminarProducto(item.id)}}>Eliminar</button></td>
                                   
                                </tr>
                             ))
                           }
                        </tbody>
                    </table>

                    </div>
                </div>
            </div> }

        </>

    )
}

export default Alta