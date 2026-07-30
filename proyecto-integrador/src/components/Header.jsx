
import Logo from "./Logo"
import NavBar from "./NavBar"

const Header = () => {
    return(

        <div className="container">
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