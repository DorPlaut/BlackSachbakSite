import React from 'react';
import Products from './Shop/Products';

function Shop({ setIsCartUpdated, isCartUpdated }) {
  return (
    <>
      <section className="page shop-page" id="shop-page">
        <div>
          <div className="scroll-anchor" id="shop"></div>
          <h3 className="section-heading">Shop</h3>
        </div>
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
