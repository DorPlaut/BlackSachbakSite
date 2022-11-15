import React from 'react';
import Products from './Shop/Products';

function Shop({ setIsCartUpdated, isCartUpdated }) {
  return (
    <>
      <section className="shop-page" id="shopPage">
        <Products
          setIsCartUpdated={setIsCartUpdated}
          isCartUpdated={isCartUpdated}
        />
      </section>
    </>
  );
}

export default Shop;
