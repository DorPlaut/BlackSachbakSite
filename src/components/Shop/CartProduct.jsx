import React from 'react';
import { useState } from 'react';
import { BsPlusLg, BsDashLg, BsFillTrashFill } from 'react-icons/bs';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';

function CartProduct({ item, isCartUpdated, setIsCartUpdated }) {
  const url = import.meta.env.VITE_SERVER_URL;
  const [quantity, setQuantity] = useState(item.quantity);
  const { user, getAccessTokenSilently } = useAuth0();
  let price = item.price.toString().split('');
  price.splice(-2, 0, '.').toString();
  // delete Product
  const deleteProduct = async () => {
    try {
      const token = await getAccessTokenSilently();
      await axios.put(
        `${url}/api/v1/cart/delete?id=${user.sub}`,
        { sku: item.sku },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  // edit quantity
  const editQuantity = async (value) => {
    try {
      const token = await getAccessTokenSilently();
      await axios.put(
        `${url}/api/v1/cart/update?id=${user.sub}`,
        { sku: item.sku, quantity: value },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="cart-product">
      <div className="delete-product-container">
        <button
          className="btn delete-product-btn"
          onClick={() => {
            deleteProduct();
            setIsCartUpdated(!isCartUpdated);
          }}
        >
          <BsFillTrashFill />
        </button>
      </div>
      <div className="cart-product-inner-container">
        <img src={item.image} alt="cart product" className="cart-product-img" />
        <div className="cart-product-details">
          <h1>{item.title}</h1>
          <p>{item.colorAndSize}</p>
          <p>{price}$</p>
        </div>
      </div>
      <div className="cart-product-quantity">
        <button
          className="btn btn-cart"
          onClick={() => {
            setQuantity(quantity + 1);
            let newValue = quantity + 1;
            editQuantity(newValue);
            setIsCartUpdated(!isCartUpdated);
          }}
        >
          <BsPlusLg />
        </button>
        <p>{quantity}</p>
        <button
          className="btn btn-cart"
          onClick={() => {
            if (quantity > 1) {
              setQuantity(quantity - 1);
              let newValue = quantity - 1;
              editQuantity(newValue);
              setIsCartUpdated(!isCartUpdated);
            }
          }}
        >
          <BsDashLg />
        </button>
      </div>
    </div>
  );
}

export default CartProduct;
