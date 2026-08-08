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
   const[categoria,setCategora]  = useState("TV")
   const[detalle,setDetalle]  = useState("Smart TV Samsung 55")
   const[foto,setFoto]  = useState("https://images.fravega.com/f500/7f5361a66917eb266870f62a3c414a6a.jpg")
   const[envio,setEnvio]  = useState(false)
   

   const generarId = () => {
    return (productos.length +1)
   }

   const guardarItem = (e) => {
    console.log("Guardar!!!")
    const id = generarId()
    const producto = {id, nombre, precio, stock, marca, categoria, detalle, foto, envio:(envio==="true" ? true : false)}
    setProductos([...productos, producto])
    console.log(productos)
   }


   //value={nombre} onInput={(e)=>{setNombre(e.target.value)}
   // value significa que el valor del input es igual al estado nombre, y onInput significa que cuando el usuario escriba en el input, se ejecutará la función setNombre, que actualizará el estado nombre con el valor del input.
    //la diferencia con onChange es que onInput se ejecuta cada vez que el usuario escribe en el input, mientras que onChange se ejecuta cuando el usuario termina de escribir y sale del input.

    return (
        <>
          <div className="container  my-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 bg-white p-3">
                       <h2 className="fw-bold">Alta de Productos</h2>   

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
                                    <option value="TV">TV</option>
                                    <option value="Electrodomésticos">Electrodomésticos</option>
                                    <option value="Deportes">Deportes</option>
                                    <option value="Herramientas">Herramientas</option>
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
                            <button type="button" className="btn btn-primary" onClick={guardarItem}>Guardar</button>
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
                                <th scope="col" className="text-center">Detalles</th>
                                <th scope="col" className="text-center">Envío Grátis</th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                             productos.map(item => (
                                <tr key={item.id}>
                                    <td className="align-middle"><img src={item.foto} alt={item.nombre} width={80} /></td>
                                    <td className="align-middle fw-light">{item.nombre}</td>
                                    <td className="align-middle text-center fw-light">{item.precio}</td>
                                    <td className="align-middle text-center fw-light">{item.stock}</td>
                                    <td className="align-middle text-center fw-light">{item.marca}</td>
                                    <td className="align-middle text-center fw-light">{item.categoria}</td>
                                    <td className="align-middle text-center fw-light">{item.detalles}</td>
                                    <td className="align-middle text-center fw-light">{item.envio ? <b>Sí</b> : <span>No</span>}</td>
                                   
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