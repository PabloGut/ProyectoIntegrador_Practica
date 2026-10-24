import { Link } from "react-router-dom"


const CarritoVacio = ()=>{
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

export default CarritoVacio