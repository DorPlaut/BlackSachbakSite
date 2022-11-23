import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function Product({
  title,
  desc,
  price,
  images,
  handleClickOnProduct,
  isLoading,
}) {
  const defaultImages = images.filter((i) => {
    return i.isDefault;
  });
  // Handle Hover
  const [shouldCount, setShouldCount] = useState(false);
  const [picNum, setPicNum] = useState(0);
  useEffect(() => {
    if (shouldCount) {
      const interval = setInterval(() => {
        if (picNum == defaultImages.length - 1) {
          setPicNum(0);
        } else {
          setPicNum(picNum + 1);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [shouldCount, picNum]);

  return (
    <div className="product article">
      <img
        src={defaultImages[picNum].img}
        onMouseEnter={() => {
          setShouldCount(true);
        }}
        onMouseLeave={() => {
          setShouldCount(false);
        }}
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
