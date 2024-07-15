import styled from "styled-components";
import minicart from "../assets/mini-cart.svg"
import { Link } from "react-router-dom";
import Logo from "./Logo";


const HearderContainer = styled.nav`
    display:flex;
    justify-content: space-between;
    & input {
        width: 559px;
        height: 60px;
        top: 34px;
        left: 348px;
        opacity: 4%;
        border-radius: 8px;
        color: #474747;
    }
    & nav ul{
        display: flex;
        gap: 36px;
        list-style: none;

        & li a{
            text-decoration: none;
            font-size: 18px;
        }
    .logo{
        padding: 0;
        margin: 0;
    }
    }
`

const NavBar = () => {
    return ( 
        <HearderContainer>
            <nav>
                <div>
                    <ul>
                        <li><Link to={Logo}></Link></li>
                        <li>
                            <Link to={"/pesquisar"}><input type="text" placeholder="Pesquise um produto..."/></Link>
                        </li>
                        <li><Link to={"/cadastro"}>Cadastre-se</Link></li>
                        <li><Link to={"/entrar"}><button>Entrar</button></Link></li>
                        <li><Link to={"/carrinho"}><img src={minicart}></img></Link></li>

                    </ul>
                </div>
            </nav>
        </HearderContainer>
     );
}
 
export default NavBar;