import React, { useState } from 'react';
import "./cadastroCliente.css";


const CadastroCliente = () => {
  const [cliente, setCliente] = useState({
    nome: '',
    email: '',
    telefone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente({ ...cliente, [name]: value });
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
        body: JSON.stringify(cliente)
      });

      if (response.ok) {
        // Limpar o formulário após o envio bem-sucedido
        setCliente({ nome: '', email: '', telefone: '' });
        alert('Cliente cadastrado com sucesso!');
      } else {
        alert('Erro ao cadastrar o cliente.');
      }
    } catch (error) {
      console.error('Erro ao cadastrar o cliente:', error);
      alert('Erro ao cadastrar o cliente.');
    }
  };

  return (
    <div>
      <form className="cadastroCliente" onSubmit={handleSubmit}>
        <h1>Cadastro de Cliente</h1>
        <div className= 'legenda'>
          <label htmlFor="nome">Nome:</label>
          <input
            className='input'
            type="text"
            id="nome"
            name="nome"
            value={cliente.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div className= 'legenda'>
          <label htmlFor="email">Email:</label>
          <input
            className='input'
            type="email"
            id="email"
            name="email"
            value={cliente.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className= 'legenda'>
          <label htmlFor="telefone">Telefone:</label>
          <input
            className='input'
            type="tel"
            id="telefone"
            name="telefone"
            value={cliente.telefone}
            onChange={handleChange}
            required
          />
        </div>
        <button className='btn' type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroCliente;
