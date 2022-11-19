import React from 'react';
import Products from './Shop/Products';

function Shop({ setIsCartUpdated, isCartUpdated }) {
  return (
    <>
      <section className="page shop-page" id="shop-page">
        <h3 className="article-heading">Shop</h3>
        <div className="underline"></div>
        <Products
          setIsCartUpdated={setIsCartUpdated}
          isCartUpdated={isCartUpdated}
        />
      </section>
    </>
  );
}

export default Shop;
