import productos from '../assets/productos.json'


const CarritoDeCompras = () => {
    const carrito = [productos[0],productos[3]]
   // const carrito =[]

    if(carrito.length ==0){
        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col text-center">
                            <div class="alert alert-danger" role="alert">
                                <h3 classNema="fw-bold">Carrito Vacío</h3>
                            </div>
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
                                <th scope="col" className="text-center"></th>
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
                                    <td className="align-middle text-center">1</td>
                                    <td className="align-middle text-center">{item.precio}</td>
                                    <td className="align-middle text-end"><button className="btn bg-secondary-subtle colorVioleta btn-sm">Eliminar</button></td>
                                   
                                </tr>
                             ))
                           }
                        </tbody>
                    </table>

                </div>

            </div>
        </div>
    )
}

export default CarritoDeCompras