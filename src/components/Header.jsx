import Logo from "./Logo";

import HomePage from "../pages/HomePage";
import NavBar from "./NavBar";

const Hearder = () => {
    return ( 
        <div>
            <div className="logo">
                <Logo/>
            </div>
            <header>
                <NavBar/>
                <HomePage/>
            </header>
            
        </div>

     );
}
export default Hearder;