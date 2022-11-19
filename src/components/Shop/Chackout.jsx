import React, { useState, useEffect } from 'react';
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from 'react-country-region-selector';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import Cart from './Cart';
import { Await } from 'react-router-dom';
import OrderComplete from './OrderComplete';

function Chackout({ setIsCartUpdated, isCartUpdated }) {
  const url = import.meta.env.VITE_SERVER_URL;

  const [firstName, setFirstName] = useState('First name');
  const [lastName, setLastName] = useState('Last name');
  const [email, setEmail] = useState('Email');
  const [phone, setPhone] = useState('Phone');
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const [address1, setAddress1] = useState('Address1');
  const [address2, setAddress2] = useState('Address2');
  const [city, setCity] = useState('City');
  const [zip, setZip] = useState('zip code');
  const [shippingCost, setShippingCosts] = useState('');
  const [totalCost, setTotalCosts] = useState('');
  const [ispaying, setIsPaying] = useState(false);
  const [orderNumber, setOrderNumber] = useState('3453');

  let isCheckingOut = true;
  // User info
  const { user, getAccessTokenSilently, isAuthenticated, isLoading } =
    useAuth0();
  // get the cart
  const [userCart, setUserCart] = useState('');
  const [cartProducts, setCartProducts] = useState('');
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
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getCart();
    }, 100);
    setIsPaying(false);
  }, [isCartUpdated, country]);
  useEffect(() => {
    setIsCartUpdated(!isCartUpdated);
  }, []);

  // SERVER FUNCTIONS
  // Submit Order and calculate shipping
  const calculateShipping = async () => {
    if (country == 'Country') {
    }
    try {
      const token = await getAccessTokenSilently();
      await axios
        .post(
          `${url}/api/v1/orders/shipping`,
          {
            userId: user.sub,
            address_to: {
              first_name: firstName,
              last_name: lastName,
              email: email,
              phone: phone,
              country: country,
              region: region,
              address1: address1,
              address2: address2,
              city: city,
              zip: zip,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          setShippingCosts(response.data.standard);
          setTotalCosts(response.data.total);
        });
    } catch (err) {
      console.log(err);
    }
  };
  const handlePayment = async () => {
    try {
      await axios.put;
      const token = await getAccessTokenSilently();
      await axios
        .put(
          `${url}/api/v1/orders/shipping`,
          {
            userId: user.sub,
            paid: true,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          setOrderNumber(response.data.orderNumber);
          setShippingCosts('');
          setIsCartUpdated(!isCartUpdated);
        });
    } catch (err) {
      console.log(err);
    }
  };

  // END OF SERVER FUNCTIONS
  const [action, setAction] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (action == 'calc') {
      calculateShipping();
    }
    if (action == 'order') {
      await calculateShipping();
      setIsPaying(true);
    }
  };

  return (
    <section className="page" id="checkout-page">
      <div className="article checkout-page">
        <h3 className="article-heading">Checkout</h3>
        <div className="underline"></div>
        <h3>Your cart:</h3>
        <div className="cart-checkout">
          {isLoading ? (
            <p>loading..</p>
          ) : (
            <Cart
              setIsCartUpdated={setIsCartUpdated}
              isCartUpdated={isCartUpdated}
              isCheckingOut={isCheckingOut}
            />
          )}
        </div>
        <br />
        <h3 className="article-heading">Shipping</h3>
        <div className="underline"></div>
        <div className="form-container">
          <h3>Shipping address</h3>
          <form
            onSubmit={handleSubmit}
            className="checkout-form"
            action=""
            method="post"
          >
            <div className="single-input-checkout">
              <label>First name: </label>
              <input
                type="text"
                name="first_name"
                // value={firstName}
                placeholder={firstName}
                onChange={(event) => {
                  setFirstName(event.target.value);
                }}
                required
              />
            </div>
            <div className="single-input-checkout">
              <label>Last name: </label>
              <input
                type="text"
                name="last_name"
                placeholder={lastName}
                onChange={(event) => {
                  setLastName(event.target.value);
                }}
                required
              />
            </div>
            <div className="single-input-checkout">
              <label>Email: </label>
              <input
                type="email"
                name="email"
                placeholder={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                required
              />
            </div>
            <div className="single-input-checkout">
              <label>Phone number: </label>
              <input
                type="tel"
                name="phone"
                placeholder={phone}
                onChange={(event) => {
                  setPhone(event.target.value);
                }}
                required
              />
            </div>
            <div className="single-input-checkout">
              <label>Country: </label>
              <CountryDropdown
                classes="input"
                name="country"
                valueType="short"
                value={country}
                onChange={(event) => {
                  setCountry(event);
                }}
                required
              />
            </div>
            <div className="single-input-checkout">
              <label>Region: </label>
              <RegionDropdown
                classes="input"
                name="region"
                countryValueType="short"
                country={country}
                value={region}
                onChange={(event) => {
                  setRegion(event);
                }}
              />
            </div>
            <div className="single-input-checkout">
              <label>Address: </label>
              <input
                type="text"
                name="address1"
                placeholder={address1}
                onChange={(event) => {
                  setAddress1(event.target.value);
                }}
                required
              />
            </div>
            <div className="single-input-checkout">
              <label>Secondery address {'(optional)'}: </label>
              <input
                type="text"
                name="address2"
                placeholder={address2}
                onChange={(event) => {
                  setAddress2(event.target.value);
                }}
              />
            </div>
            <div className="single-input-checkout">
              <label>City : </label>
              <input
                type="text"
                name="city"
                placeholder={city}
                onChange={(event) => {
                  setCity(event.target.value);
                }}
                required
              />
            </div>
            <div className="single-input-checkout">
              <label>Zip code : </label>
              <input
                type="text"
                name="zip"
                placeholder={zip}
                onChange={(event) => {
                  setZip(event.target.value);
                }}
                required
              />
            </div>

            <div className="checkout-btn-container">
              <button
                className="btn"
                onClick={() => {
                  setAction('calc');
                }}
              >
                {shippingCost ? 'Update order' : 'Calculate shipping'}
              </button>
            </div>
            <div className="checkout-btn-container">
              <button
                type="submit"
                className="btn"
                onClick={() => {
                  setAction('order');
                }}
              >
                Continue to payment
              </button>
            </div>
          </form>
        </div>
        {shippingCost ? (
          <div>
            <p>standart shipping is : {shippingCost}$</p>
            <div className="payment-container">
              <br />
              {ispaying ? (
                <>
                  <h3 className="article-heading">Payment</h3>
                  <div className="underline"></div>
                  <h4>Total include shipping : {totalCost}$</h4>

                  <div>
                    <PayPalScriptProvider
                      options={{
                        'client-id': import.meta.env.VITE_PAYPAL_CLIENT_ID,
                      }}
                    >
                      <PayPalButtons
                        className="paypal"
                        style={{
                          color: 'black',
                          label: 'checkout',
                        }}
                        createOrder={(data, actions) => {
                          return actions.order.create({
                            purchase_units: [
                              {
                                amount: {
                                  value: totalCost.join(''),
                                },
                              },
                            ],
                            application_context: {
                              shipping_preference: 'NO_SHIPPING',
                            },
                          });
                        }}
                        onApprove={(data, actions) => {
                          return actions.order
                            .capture()
                            .then(async (details) => {
                              await handlePayment();
                            });
                        }}
                      />
                    </PayPalScriptProvider>
                  </div>
                </>
              ) : (
                ''
              )}
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
      {orderNumber ? (
        <div className="selected-product-container">
          <OrderComplete orderNumber={orderNumber} />
        </div>
      ) : (
        ''
      )}
    </section>
  );
}

export default Chackout;
