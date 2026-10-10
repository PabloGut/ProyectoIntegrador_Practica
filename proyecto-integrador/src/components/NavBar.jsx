import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { CartContext } from "./Context/CartContext"

const NavBar = ()=>{
    const {totalProductosCarrito} = useContext(CartContext)
    return (
          <div className="container">
            <div className="row">
                <div className="col">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <NavLink to="/productos/tv" className="nav-link text-black">TV</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/productos/electrodomesticos" className="nav-link text-black">Electrodomesticos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/productos/deportes" className="nav-link text-black">Deportes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/productos/herramientas" className="nav-link text-black">Herramientas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/alta" className="nav-link text-black">Alta</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/carrito" className="nav-link text-black position-relative">
                            <i className="bi bi-cart"></i>{totalProductosCarrito() > 0 ? 
                            <span className="position-absolute top-0 start-100 translate-middle badge 
                            rounded-pill bg-danger"> {totalProductosCarrito()}</span> : ""}
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
          </div>

    )
}

export default NavBar