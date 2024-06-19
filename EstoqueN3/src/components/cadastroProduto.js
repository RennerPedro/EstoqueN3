import React, { useState } from 'react';
import "./cadastroProduto.css";


const CadastroProduto = () => {
  const [produto, setProduto] = useState({
    nome: '',
    preco: '',
    categoria: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Aqui você faria a requisição POST para a API
      const response = await fetch('URL_DA_SUA_API', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(produto)
      });

      if (response.ok) {
        // Limpar o formulário após o envio bem-sucedido
        setProduto({ nome: '', preco: '', categoria: '' });
        alert('Produto cadastrado com sucesso!');
      } else {
        alert('Erro ao cadastrar o produto.');
      }
    } catch (error) {
      console.error('Erro ao cadastrar o produto:', error);
      alert('Erro ao cadastrar o produto.');
    }
  };

  return (
    <div>
      <form className='cadastroProduto' onSubmit={handleSubmit}>
        <h1>Cadastro de Produto</h1>
        <div className= 'legenda'>
          <label htmlFor="nome">Nome:</label>
          <input
            className='input'
            type="text"
            id="nome"
            name="nome"
            value={produto.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div className= 'legenda'>
          <label htmlFor="preco">Preço:</label>
          <input
            className='input'
            type="number"
            id="preco"
            name="preco"
            value={produto.preco}
            onChange={handleChange}
            required
          />
        </div>
        <div className= 'legenda'>
          <label htmlFor="categoria">Categoria:</label>
          <input
            className='input'
            type="text"
            id="categoria"
            name="categoria"
            value={produto.categoria}
            onChange={handleChange}
            required
          />
        </div>
        <button className='btn' type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroProduto;
