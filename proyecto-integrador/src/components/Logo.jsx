import { Link } from "react-router-dom"

const Logo = ()=>{
    return (
           <div className="container-fluid">
                <div className="row">
                    <div className="col text-center">
                        <Link to="/">
                        <img src="/images/logo-fravega-2.png" alt="Frávega"/>
                        </Link>
                    </div>
                </div>
            </div>
    )
}


export default Logo