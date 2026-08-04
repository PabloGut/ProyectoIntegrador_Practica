import productos from '../assets/productos.json'


const CarritoDeCompras = () => {
    const carrito = [productos[0],productos[3]]
    return (
           <div className="container">
            <div className="row">
                <div className="col">

                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Marca</th>
                                <th scope="col">Precio U.</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                             carrito.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.foto} alt={item.nombre} width={80} /></td>
                                    <td>{item.nombre}</td>
                                    <td>{item.marca}</td>
                                    <td>{item.precio}</td>
                                    <td>1</td>
                                    <td>{item.precio}</td>
                                   
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