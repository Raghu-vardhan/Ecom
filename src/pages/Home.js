import React from 'react';
import Products from './Products';

const Home = () => {
  return (

    <div>

      <div className='banner-img'>
        <img src='https://www.holoman.in/cdn/shop/files/holoimg.webp?v=1737009880' alt=''/>
      </div>
      <Products/>
    </div>
  );
};

export default Home;
