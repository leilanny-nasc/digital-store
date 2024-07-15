import Footer from "../components/Footer";
import Hearder from "../components/Header";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
    return ( 
        <div>
            <Hearder/>

            {children}

            <Footer/>
        </div>
     );
}
 
export default Layout;