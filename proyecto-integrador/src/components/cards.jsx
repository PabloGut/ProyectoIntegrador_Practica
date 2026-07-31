

const Cards = ({item})=>{
    return (
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <img src={item.foto} className="card-img-top" alt={item.nombre}/>
                        <div className="card-body">
                            <p className="card-title">{item.nombre}</p>
                            <h5><b>${item.precio}</b></h5>
                            <a href="#" className="btn btn-primary">Comprar</a>
                        </div>
                    </div>
                </div>

    )
}

export default Cards