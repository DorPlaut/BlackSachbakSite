import React, { useState, useEffect } from 'react';
import Product from './Product';
import SelectedProduct from './SelectedProduct';
import axios from 'axios';

function ShopPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(
    'VS The Future T-shirt FULL PRINT'
  );
  const [isSelected, setIsSelected] = useState(false);
  // GET PRODUCTS
  const baseURL = 'http://localhost:3000/shop';
  const fetchProductsData = async () => {
    try {
      axios.get(baseURL).then((response) => {
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
    <section className="shop-page" id="shopPage">
      {isLoading ? (
        <div className="loading-container">
          <h1>loading!</h1>
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
          <SelectedProduct
            products={products}
            selectedProduct={selectedProduct}
            isSelected={isSelected}
            setIsSelected={setIsSelected}
          />
        </div>
      )}
    </section>
  );
}

export default ShopPage;
