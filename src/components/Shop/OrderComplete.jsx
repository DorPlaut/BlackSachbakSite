import React from 'react';
import NavLinks from '../NavLinks';

function OrderComplete({ orderNumber }) {
  return (
    <div className="selected-product cheackout-on">
      <h1>Thank you for purchesing from our store!</h1>
      <br />
      <h3>youre order number is: {orderNumber} </h3>
      <p>
        we will send you an email with traking information as soon as possible.
      </p>
      <p>
        if you need any kind of help regurding your order contact us at
        BlackSachbak@gmail.com
      </p>
      <p>Go back to: </p>
      <div className="chackout-nav">
        <NavLinks />
      </div>
    </div>
  );
}

export default OrderComplete;
