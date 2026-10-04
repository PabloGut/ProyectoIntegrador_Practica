import { NavLink } from "react-router-dom"

const NavBar = ()=>{
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
                            <NavLink to="/carrito" className="nav-link text-black">Carrito</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
          </div>

    )
}

export default NavBar