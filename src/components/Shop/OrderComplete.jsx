import React from 'react';
import NavLinks from '../NavLinks';

function OrderComplete({ orderNumber }) {
  return (
    <div className="selected-product">
      <h1>Thank you for purchesing from our store.</h1>
      <h3>youre order number is {orderNumber} </h3>
      <p>
        if you need any kind of help regurding your order contact us at
        BlackSachbak@gmail.com
      </p>
      <div className="chackout-nav">
        <NavLinks />
      </div>
    </div>
  );
}

export default OrderComplete;
