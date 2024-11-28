import React, { useEffect, useState } from "react";
import axios from "axios";
import CardProducts from "./ProductCards";
import Products from "./Products";

const ListaProdutos = () => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart, removeFromCart } = Products;

  useEffect(() => {
    axios
      .get("http://localhost:3000/produtos")
      .then((response) => {
        setProdutos(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao carregar produtos:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Carregando produtos...</p>;
  }

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <div className="produtos">
        {produtos.map((produto) => (
          <CardProducts
            key={produto.id}
            id={produto.id}
            nome={produto.nome}
            model={produto.model}
            image={produto.image}
            price={produto.price}
            new_price={produto.new_price}
            disccount={produto.discount}
            removeFromCart={removeFromCart}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ListaProdutos;
