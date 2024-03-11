 
import React from 'react';
import './index.css'

const ProductGrid = ({ products, viewProductDetails }) => {
  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-card" onClick={() => viewProductDetails(product.id)}>
          <img  style={{height:"100px",width:"100px"}}  src={product.image} alt={product.title} />
          <h3 style={{color:"red"}}>{product.title}</h3>
          <p style={{color:"blue"}}>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
