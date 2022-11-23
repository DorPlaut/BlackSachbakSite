import React, { useState, useEffect } from 'react';
import Product from './Product';
import SelectedProduct from './SelectedProduct';
import axios from 'axios';
import { GridLoader } from 'react-spinners';
import TagsFilter from './TagsFilter';

function Products({ setIsCartUpdated, isCartUpdated }) {
  const url = import.meta.env.VITE_SERVER_URL;

  const [isLoading, setIsLoading] = useState(true);
  const [fullProductsList, setFullProductsList] = useState('');
  const [products, setProducts] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(
    'VS The Future T-shirt FULL PRINT'
  );
  const [isSelected, setIsSelected] = useState(false);
  // GET PRODUCTS
  const baseURL = `${url}/api/v1/products`;
  const fetchProductsData = async () => {
    try {
      await axios.get(baseURL).then((response) => {
        setFullProductsList(response.data);
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

  return (
    <>
      {isLoading ? (
        <div className="loading-container">
          <GridLoader size={80} />
        </div>
      ) : (
        <div>
          <TagsFilter
            fullProductsList={fullProductsList}
            setProducts={setProducts}
          />
          <div className="notes-container">
            <span>*Hover over a product picture to see more color options</span>
          </div>
          <div className="products-container">
            {products.map((product) => {
              let price = product.variants[0].price.toString().split('');
              price.splice(-2, 0, '.').toString();
              return (
                <Product
                  isLoading={isLoading}
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
        </div>
      )}
    </>
  );
}

export default Products;
