import React from 'react';
import "../index.css";


const Pedidos = () => {
  return (
    <div className="table-container">
    <table className="data-table">
      <thead>
        <tr>
          <th>ID_Produto</th>
          <th>Nome_Cliente</th>
          <th>Nome_Produto</th>
          <th>Data_Compra</th>
        </tr>
      </thead>
      <tbody>
        {/* {data.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.nome}</td>
            <td>{item.categoria}</td>
            <td>{item.descricao}</td>
          </tr>
        ))} */}
      </tbody>
    </table>
  </div>
  );
};

export default Pedidos;