
const NavBar = ()=>{
    return (
          <div className="container">
            <div className="row">
                <div className="col">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link text-black fw-bold" href="#">TV</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black fw-bold" href="#">Electrodomesticos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black fw-bold" href="#">Deportes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black fw-bold" href="#">Herramientas</a>
                        </li>
                    </ul>
                </div>
            </div>
          </div>

    )
}

export default NavBar