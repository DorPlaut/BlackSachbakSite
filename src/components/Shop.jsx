import React from 'react';
import Products from './Shop/Products';
import { Parallax } from 'react-scroll-parallax';

function Shop({ setIsCartUpdated, isCartUpdated }) {
  return (
    <>
      <Parallax speed={-20} className="paralex-position">
        <section className="page shop-page" id="shop-page">
          <Parallax speed={20} className="paralex-position">
            <div className="shop-heding">
              <div className="scroll-anchor" id="shop"></div>
              <h3 className="section-heading">Shop</h3>
              <div className="underline"></div>
            </div>
            <Products
              setIsCartUpdated={setIsCartUpdated}
              isCartUpdated={isCartUpdated}
            />
          </Parallax>
        </section>
      </Parallax>
    </>
  );
}

export default Shop;
