import React, { useState } from 'react';
import { ProductsData } from '../Data/Data'; // Ensure the file and variable name match
import { useCart } from '../context';
import Header from '../Header/Heade';

const Products = () => {
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState('');

  // Filter products based on search query
  const filteredProducts = ProductsData.filter((product) =>
    (product.name ).toLowerCase().includes((searchQuery).toLowerCase())
  );
  
  const ArrayProducts = filteredProducts.length
  const LimitProducts = filteredProducts.slice(0,4); 
  const FinalProducts = LimitProducts.slice(1,ArrayProducts)
  const Reverseproduct = LimitProducts.reverse()


   // Shuffle the array using map and sort
   const shuffledProducts = filteredProducts
     .map(product => ({ product, sort: Math.random() }))  // Add a random "sort" value to each element
     .sort((a, b) => a.sort - b.sort)  // Sort the array based on the random "sort" values
     .map(({ product }) => product);  // Remove the "sort" value and return the shuffled array
     const shuffledProductss = shuffledProducts.slice(0, 4);
   console.log(shuffledProductss);  // Shuffled array of products
   

  return (
    <div>
      <Header onSearch={(query) => setSearchQuery(query)} /> {/* Pass search query to Products */}
      <div className="products-container">
        {filteredProducts.length === 0 ? (
          <p>No products found</p>
        ) : (
          Reverseproduct.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <p className="product-description">{product.description}</p>
              <button className="add-to-cart" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>
      <h2>ReletedProudcts</h2>
      <div className="products-container">
     
        {shuffledProductss.length === 0 ? (
          <p>No products found</p>
        ) : (
          shuffledProductss.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <p className="product-description">{product.description}</p>
              <button className="add-to-cart" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
