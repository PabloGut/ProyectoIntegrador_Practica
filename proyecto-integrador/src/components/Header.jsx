
import Logo from "./Logo"
import NavBar from "./NavBar"

const Header = () => {
    return(

        <div className="container-fluid bg-white pb-5">
            <div className="row">
                <div className="col">
                    <Logo/>
                    <NavBar/>
                </div>
            </div>
        </div>

    )
}
export default Header