 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductGrid from './components/Todo';
import ProductDetails from './components/Product';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const viewProductDetails = (productId) => {
    const product = products.find(p => p.id === productId);
    setSelectedProduct(product);
  };

  return (
    <div className="App">
      <h1 className='heading'>Fake Store Products</h1>
      {!selectedProduct ? (
        <ProductGrid products={products} viewProductDetails={viewProductDetails} />
      ) : (
        <ProductDetails product={selectedProduct} />
      )}
    </div>
  );
}

export default App;
