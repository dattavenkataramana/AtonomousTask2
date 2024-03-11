
import React from 'react';
import './index.css'
const ProductDetails = ({ product }) => {
  return (
    <div className="product-details">
      <h1>{product.title}</h1>
      <img style={{height:"200px",widows:""}} src={product.image} alt={product.title} />
      <p style={{color:"red"}}>{product.description}</p>
      <p style={{color:"navy"}}>${product.price}</p>
    </div>
  );
};

export default ProductDetails;
