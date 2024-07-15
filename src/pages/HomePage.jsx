import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";


const HomeContainer = styled.nav`
     & nav ul{
        display: flex;
        gap: 36px;
        list-style: none;

        & li a{
            text-decoration: none;
            font-size: 18px;
        }
    }
`


const HomePage = () => {
    return (
        <HomeContainer>
            <nav>
                <NavLink>
                    <li><Link to={"/"}>Home</Link></li>
                    <li>
                        <Link to={"/produtos"}></Link>
                    </li>
                    <li><Link to={"/categoria"}>Categoria</Link></li>
                    <li><Link to={"/pedidos"}>Meus Pedidos</Link></li>
                </NavLink>
            </nav>
        </HomeContainer>
      );
}
 
export default HomePage;