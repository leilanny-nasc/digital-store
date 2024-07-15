import styled from "styled-components";
import logoFooter from "../assets/logo-footer.svg"

const FooterContainer = styled.div`
    background-color: #1F1F1F;
    color: #FFFFFF;
    & li a{
            text-decoration: none;
            font-size: 18px;
            gap: 5px;
    }
    .layout{
        
    }
    .info{
        text-align: center;
        width: 400px;
        size: 16px;
        line-height: 38px;
    }
`


const Footer = () => {
    return (  
        <FooterContainer>
        <div className="layout">
            <div className="logoP">
                <img src={logoFooter} />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere perspiciatis rerum, ipsa dolorem quidem sequi obcaecati eum nesciunt laborum saepe quia illo tenetur illum vero unde suscipit non dolores voluptates?</p>
            </div>  
            <div className="info">
                <ul>
                    <p>Informação</p>
                    <li>Sobre Drip Store</li>
                    <li>Segurança</li>
                    <li>Wishlist</li>
                    <li>Blog</li>
                    <li>Trabalhe conosco</li>
                    <li>Meus pedidos</li>
                </ul>
            </div>
            <div className="cate">
                <ul>
                    <p>Categorias</p>
                    <li>Camisetas</li>
                    <li>Calças</li>
                    <li>Bonés</li>
                    <li>Headphones</li>
                    <li>Tênis</li>
                </ul>

            </div>
            <div className="contato">
                <ul>
                    <p>Contato</p>
                    <p>Av. Santos Dumont, 1510-1 anda- Aldeota, Fortaleza - CE, 60150-161</p>
                    <p>(85) 3051-3411 </p>
                </ul>
            </div>

            <footer>
                    &Copy;2022 Digital College
            </footer>
        </div>


        </FooterContainer>
    );
}
 
export default Footer;