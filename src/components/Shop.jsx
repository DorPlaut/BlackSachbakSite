import React from 'react';
import Products from './Shop/Products';
import { Parallax } from 'react-scroll-parallax';

function Shop({ setIsCartUpdated, isCartUpdated }) {
  return (
    <>
      <section className="page shop-page" id="shop-page">
        <div className="shop-heding">
          <div className="scroll-anchor" id="shop"></div>
          <h3 className="section-heading">Merch Shop</h3>
          <div className="underline"></div>
        </div>
        <Products
          setIsCartUpdated={setIsCartUpdated}
          isCartUpdated={isCartUpdated}
        />
      </section>
    </>
  );
}

export default Shop;
