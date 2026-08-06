import productos from "../assets/productos.json"



const Alta = () => {
   // let productos =[]
    return (
        <>
          <div className="container  my-5">
                <div className="row">
                    <div className="col-md-4 offset-md-4 bg-white p-3">
                       <h2 className="fw-bold">Alta de Productos</h2>   

                        <form>
                            <div className="mb-3">
                                <label  className="form-label">Nombre</label>
                                <input type="text" className="form-control"/>
                            </div>
                             <div className="mb-3">
                                <label  className="form-label">Precio</label>
                                <input type="number" className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label  className="form-label">Stock</label>
                                <input type="number" className="form-control"/>
                            </div>
                             <div className="mb-3">
                                <label  className="form-label">Marca</label>
                                <input type="text" className="form-control"/>
                            </div>
                             <div className="mb-3">
                                <label  className="form-label">Categoria</label>
                                <select className="form-select">
                                    <option value="TV">TV</option>
                                    <option value="Electrodomésticos">Electrodomésticos</option>
                                    <option value="Deportes">Deportes</option>
                                    <option value="Herramientas">Herramientas</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label  className="form-label">Detalle</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label  className="form-label">Foto</label>
                                <input type="text" className="form-control"/>
                            </div>
                             <div className="mb-3">
                                <label  className="form-label">Envio</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Guardar</button>
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
                <div className="row"col>
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
                                <th scope="col" className="text-center">Envío</th>
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