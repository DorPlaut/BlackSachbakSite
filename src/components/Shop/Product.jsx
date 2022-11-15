import React from 'react';

function Product({ title, desc, price, images, handleClickOnProduct }) {
  return (
    <div className="product article">
      <img
        src={images[0].img}
        alt="product"
        className="product-img"
        onClick={() => {
          handleClickOnProduct(title);
        }}
      />
      <h3>{title}</h3>
      <h4>{price}$</h4>
      <div className="products-btn-container">
        <button
          className="btn"
          onClick={() => {
            handleClickOnProduct(title);
          }}
        >
          Details
        </button>
        <button
          className="btn"
          onClick={() => {
            handleClickOnProduct(title);
          }}
        >
          Buy now
        </button>
      </div>
    </div>
  );
}

export default Product;
