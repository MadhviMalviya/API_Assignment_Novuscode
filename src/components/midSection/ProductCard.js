
import React from 'react';
import style from './Mid.module.css';

function ProductCard({ product }) {
  return (
    <div className={style.card}>
      <img src={product.thumbnail} alt='img' />
      <h4>{product.title}</h4>
      <p>{product.description}</p>
      <h5>Category: {product.category}</h5>
      <h5>Price: {product.price}Rs</h5>
    </div>
  );
}

export default ProductCard;
