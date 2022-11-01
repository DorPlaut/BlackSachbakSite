import React, { useEffect, useState } from 'react';
import { BsFillXCircleFill } from 'react-icons/bs';
import Carousel from 'react-multi-carousel';

// carusel responsivnes
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

function SelectedProduct({
  products,
  selectedProduct,
  isSelected,
  setIsSelected,
}) {
  let filterdProduct = products.filter((i) => {
    return selectedProduct.indexOf(i.title) > -1;
  });
  let productDetails = filterdProduct[0];
  let price = productDetails.variants[0].price.toString().split('');
  price.splice(-2, 0, '.').toString();
  const imgAerry = productDetails.images;
  const options = productDetails.options;
  const variants = productDetails.variants;
  const isThereColors = options.indexOf('color') > -1;
  const isThereSize = options.indexOf('size') > -1;
  const fullOptions = productDetails.fullOptions;
  let colorArr = fullOptions[0].values;
  let sizeArr = [];
  if (isThereSize && isThereColors) {
    colorArr = fullOptions[0].values;
    sizeArr = fullOptions[1].values;
  }
  if (isThereSize && !isThereColors) {
    colorArr = [];
    sizeArr = fullOptions[0].values;
  }
  const getSKU = (product, size, color) => {
    variants;
  };

  return (
    <div>
      {isSelected ? (
        <div className="selected-product">
          <div className="return-to-shop-btn-container">
            <button
              className="product-xbtn"
              onClick={() => setIsSelected(false)}
            >
              <BsFillXCircleFill />
            </button>
          </div>
          <h2>{productDetails.title}</h2>
          <div className="product-carusel-container">
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={5000}
              centerMode={true}
            >
              {imgAerry.map((index) => {
                return (
                  <div key={index}>
                    <img
                      src={index}
                      alt="photo"
                      className="selected-product-img"
                    />
                  </div>
                );
              })}
            </Carousel>
          </div>
          <p dangerouslySetInnerHTML={{ __html: productDetails.desc }}></p>
          <h3>{price}$</h3>
          <div className="chose-specific">
            <form action="" className="product-form">
              <div className="options">
                {isThereColors ? (
                  <div className="select-color option">
                    <h4>Select a color</h4>
                    <select name="color" id="">
                      <optgroup label="Color">
                        {colorArr.map((i) => {
                          return <option key={i.id}>{i.title}</option>;
                        })}
                      </optgroup>
                    </select>
                  </div>
                ) : (
                  ''
                )}
                {isThereSize ? (
                  <div className="select-size option">
                    <h4>Select size</h4>
                    <select name="size" id="">
                      <optgroup label="Size">
                        {sizeArr.map((i) => {
                          return <option key={i.id}>{i.title}</option>;
                        })}
                      </optgroup>
                    </select>
                  </div>
                ) : (
                  ''
                )}
                <div className="quantity option">
                  <h4>quantity</h4>

                  <input type="number" defaultValue={1} />
                </div>
              </div>
              <button className="btn">Add to cart</button>
            </form>
          </div>
          <br />
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default SelectedProduct;
