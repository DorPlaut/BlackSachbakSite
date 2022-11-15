import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import CartProduct from './CartProduct';
import { GridLoader } from 'react-spinners';
import { HashLink } from 'react-router-hash-link';

function Cart({ setIsCartUpdated, isCartUpdated, isCheckingOut }) {
  const url = import.meta.env.VITE_SERVER_URL;

  const { user, getAccessTokenSilently } = useAuth0();
  const [isLoading, setIsLoading] = useState(true);
  const [userCart, setUserCart] = useState('');
  const [cartProducts, setCartProducts] = useState('');

  // get the cart
  const getCart = async () => {
    try {
      const token = await getAccessTokenSilently();
      await axios
        .get(`${url}/api/v1/cart?id=${user.sub}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setUserCart(response.data);
          setCartProducts(response.data.products);
          setIsLoading(false);
        });
    } catch (err) {
      console.log(err);
    }
  };
  // get the cart total
  let total = userCart.total;

  useEffect(() => {
    getCart();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      getCart();
    }, 200);
  }, [isCartUpdated]);

  return (
    <>
      {isLoading ? (
        <div className="loading-cart">
          <GridLoader size={40} color="white" />
        </div>
      ) : (
        <>
          {cartProducts.length > 0 ? (
            <div className="cart">
              {cartProducts.map((item, index) => {
                return (
                  <CartProduct
                    key={index}
                    item={item}
                    setIsCartUpdated={setIsCartUpdated}
                    isCartUpdated={isCartUpdated}
                  />
                );
              })}
              <div className="cart-product">
                <div>
                  <h4>Total :{total}$</h4>
                  <dt>before shipping</dt>
                </div>
                {isCheckingOut ? (
                  ''
                ) : (
                  <div>
                    <HashLink to="/chackout#checkout-page" className="btn">
                      Chackout
                    </HashLink>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="epmty-cart">
              <h1>cart is empty</h1>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default Cart;
