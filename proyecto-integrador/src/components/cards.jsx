

const Cards = ({item})=>{
    return (
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <img src={item.foto} className="card-img-top" alt={item.nombre}/>
                        <div className="card-body">
                            <p className="card-title">{item.nombre}</p>
                            <h5><b>${item.precio}</b></h5>
                            {item.envio && <span className="badge text-bg-success mb-3">Envío <b>Grátis</b></span>}
                            <a href="#" className="btn bg-secondary-subtle colorVioleta btn-lg w-100">Agregar al Carrito</a>
                        </div>
                    </div>
                </div>

    )
}

export default Cards