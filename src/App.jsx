import { Route, Router, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ProdutcCard from "./components/ProductCard";
import Pedidos from "./pages/Pedidos";
import Categoria from "./pages/Categoria";

const App = () => {
  return ( 
    <Router>
      <Layout/>
      <NavBar />
      <Routes>
        <Route path="/" element={HomePage}/>
        <Route path="/produtos" element={ProdutcCard}/>
        <Route path="/pedidos" element={Pedidos}/>
        <Route path="/categoria" element={Categoria}/> 
      </Routes>
    </Router>
   
   );
}
 
export default App;