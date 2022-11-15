import React, { useState, useEffect } from 'react';
import Product from './Product';
import SelectedProduct from './SelectedProduct';
import axios from 'axios';
import { GridLoader } from 'react-spinners';

function Products({ setIsCartUpdated, isCartUpdated }) {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(
    'VS The Future T-shirt FULL PRINT'
  );
  const [isSelected, setIsSelected] = useState(false);
  // GET PRODUCTS
  const baseURL = 'http://localhost:6060/api/v1/products';
  const fetchProductsData = async () => {
    try {
      await axios.get(baseURL).then((response) => {
        setProducts(response.data);
        setIsLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  };
  // HANDLE CLICKS
  const handleClickOnProduct = (title) => {
    setSelectedProduct(title);
    setIsSelected(true);
  };

  useEffect(() => {
    fetchProductsData();
  }, []);

  // GET SKU

  return (
    <>
      {isLoading ? (
        <div className="loading-container">
          <GridLoader size={80} />
        </div>
      ) : (
        <div className="products-container">
          {products.map((product) => {
            let price = product.variants[0].price.toString().split('');
            price.splice(-2, 0, '.').toString();
            return (
              <Product
                key={product.generalID}
                title={product.title}
                desc={product.desc}
                price={price}
                images={product.images}
                handleClickOnProduct={handleClickOnProduct}
              />
            );
          })}
          {isSelected ? (
            <div className="selected-product-container">
              <SelectedProduct
                products={products}
                selectedProduct={selectedProduct}
                setIsSelected={setIsSelected}
                setIsCartUpdated={setIsCartUpdated}
                isCartUpdated={isCartUpdated}
              />
            </div>
          ) : (
            ''
          )}
        </div>
      )}
    </>
  );
}

export default Products;
