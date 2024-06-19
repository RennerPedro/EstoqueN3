import React, { useState } from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Estoque from "./components/estoque";
import CadastroCliente from "./components/cadastroCliente";
import CadastroProduto from "./components/cadastroProduto";
import Pedidos from "./components/pedidos";
import logo from "./assets/imagens/logo512.png";

const App = () => {
  const [selectBtn, setSelectBtn] = useState("");

  const handleClickTabs = (tab) => {
    setSelectBtn(tab);
  };

  return (
    <div className="App">
      <div className="App2">
        <div className="logo">
          <img className="imageLogo" src={logo} alt="logo" />
          <p className="title">Estoque</p>
        </div>

        <Router>
          <div className="header">
            <Link to="/estoque">
              <button
                onClick={() => handleClickTabs("fotos1")}
                className={`btn ${selectBtn === "fotos1" ? "btnSelected" : ""}`}
              >
                Estoque
              </button>
            </Link>
            <Link to="/cadastro-cliente">
              <button
                onClick={() => handleClickTabs("fotos2")}
                className={`btn ${selectBtn === "fotos2" ? "btnSelected" : ""}`}
              >
                Cadastro cliente
              </button>
            </Link>
            <Link to="/cadastro-produto">
              <button
                onClick={() => handleClickTabs("fotos3")}
                className={`btn ${selectBtn === "fotos3" ? "btnSelected" : ""}`}
              >
                Cadastro produto
              </button>
            </Link>
            <Link to="/pedidos">
              <button
                onClick={() => handleClickTabs("fotos4")}
                className={`btn ${selectBtn === "fotos4" ? "btnSelected" : ""}`}
              >
                Pedidos
              </button>
            </Link>
          </div>
          <div className="table-container">
            <Routes>
              <Route path="/estoque" element={<Estoque />} />
              <Route path="/cadastro-cliente" element={<CadastroCliente />} />
              <Route path="/cadastro-produto" element={<CadastroProduto />} />
              <Route path="/pedidos" element={<Pedidos />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
};

export default App;
