import React, { useEffect, useState, useRef } from 'react';
import { BsFileFontFill, BsFillXCircleFill } from 'react-icons/bs';
import axios from 'axios';
import ProductGallery from './ProductGallery';
import FormInput from './FormInput';
import { useAuth0 } from '@auth0/auth0-react';

function SelectedProduct({
  products,
  selectedProduct,
  setIsSelected,
  setIsCartUpdated,
  isCartUpdated,
}) {
  // User info
  const { user, getAccessTokenSilently, isAuthenticated } = useAuth0();

  // SELECTED PRODUCT data
  const filterdProduct = products.filter((i) => {
    return selectedProduct.indexOf(i.title) > -1;
  });
  const productDetails = filterdProduct[0];
  // specific values for displayd product
  const { images, options, variants, optionTypes, description } =
    productDetails;
  let price = productDetails.variants[0].price.toString().split('');
  price.splice(-2, 0, '.').toString();
  const [isAvilable, setIsAvilable] = useState(true);
  // set selected product ready for cart
  const [options1, setOptions1] = useState();
  const [options2, setOptions2] = useState();
  const [options3, setOptions3] = useState();
  let optionsArr;
  const getOptions = () => {
    let option1 = optionTypes[0];
    let option2 = optionTypes[1];
    let option3 = optionTypes[2];
    let option1Arr;
    let option2Arr;
    let option3Arr;
    if (option1 && !option2 && !option3) {
      option1Arr = options[0].values.map((i) => {
        return i.title;
      });
      optionsArr = [{ title: option1, options: option1Arr }];
    }
    if (option1 && option2 && !option3) {
      option1Arr = options[0].values.map((i) => {
        return i.title;
      });
      option2Arr = options[1].values.map((i) => {
        return i.title;
      });
      optionsArr = [
        { title: option1, options: option1Arr },
        { title: option2, options: option2Arr },
      ];
    }
    if (option1 && option2 && option3) {
      option1Arr = options[0].values.map((i) => {
        return i.title;
      });
      option2Arr = options[1].values.map((i) => {
        return i.title;
      });
      option3Arr = options[2].values.map((i) => {
        return i.title;
      });
      optionsArr = [
        { title: option1, options: option1Arr },
        { title: option2, options: option2Arr },
        { title: option3, options: option3Arr },
      ];
    }
  };
  getOptions();

  // get specific choosen product with sku
  const [quantity, setQuantity] = useState(1);
  let specificVariant;
  const updatedSelectedVariant = () => {
    specificVariant = [options1, options2, options3]
      .filter((i) => {
        return i != '';
      })
      .join(' / ');
  };
  let variant;
  let sku;
  const getSKU = () => {
    variant = variants.filter((i) => {
      return specificVariant.indexOf(i.title) > -1;
    });
    sku = variant[0].sku;
  };
  let updatedPrice;
  const getPrice = () => {
    variant = variants.filter((i) => {
      return specificVariant.indexOf(i.title) > -1;
    });
    updatedPrice = variant[0].price;
  };

  // Reset all parameters when selecting different product
  useEffect(() => {
    getOptions();
    setOptions1('');
    setOptions2('');
    setOptions3('');
    setQuantity(1);
    setIsCartUpdated(!isCartUpdated);
  }, [selectedProduct]);

  // Handle form submit - add product to cart
  const handleSubmit = (event) => {
    event.preventDefault();
    if (isAuthenticated) {
      updatedSelectedVariant();
      getSKU();
      getPrice();
      if (variant[0].is_available) {
        setOptions1('');
        setOptions2('');
        setOptions3('');
        setIsAvilable(true);
        postForm();
      } else if (!variant[0].is_available) {
        setIsAvilable(false);
      }
    }
    animate();
  };

  // send the cart to Data Base
  const postForm = async () => {
    try {
      const token = await getAccessTokenSilently();
      axios.post(
        'http://localhost:6060/api/v1/cart',
        {
          userId: user.sub,
          title: selectedProduct,
          colorAndSize: specificVariant,
          sku: sku,
          price: updatedPrice,
          image: images[0].img,
          quantity: quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  // Submit animation
  const [isAnimate, setIsAnimate] = useState(false);
  const animate = () => {
    setIsAnimate(true);
    setTimeout(() => {
      setIsAnimate(false);
      setIsCartUpdated(!isCartUpdated);
    }, 2000);
  };

  return (
    <div>
      <div className="selected-product">
        <div className="return-to-shop-btn-container">
          {/* exit button */}
          <button className="product-xbtn" onClick={() => setIsSelected(false)}>
            <BsFillXCircleFill />
          </button>
        </div>
        {/* title */}
        <h2>{productDetails.title}</h2>
        {/* images */}
        <div className="product-carusel-container">
          <ProductGallery images={images} />
        </div>
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
        <h3>{price}$</h3>
        <div className="chose-specific">
          {/* form */}
          <form
            action=""
            method="post"
            className={isAnimate ? 'product-form form-animate' : 'product-form'}
            onSubmit={handleSubmit}
          >
            <FormInput
              optionsArr={optionsArr}
              options={options1}
              setOptions={setOptions1}
              num={0}
            />
            {optionsArr.length >= 2 ? (
              <FormInput
                optionsArr={optionsArr}
                options={options2}
                setOptions={setOptions2}
                num={1}
              />
            ) : (
              ''
            )}
            {optionsArr.length >= 3 ? (
              <FormInput
                optionsArr={optionsArr}
                options={options3}
                setOptions={setOptions3}
                num={2}
              />
            ) : (
              ''
            )}

            {/* choose quantity */}
            <div className="quantity option">
              <h4>quantity</h4>

              <input
                type="number"
                name="quantity"
                onChange={(event) => setQuantity(event.target.value)}
                value={quantity}
                required
              />
            </div>

            <button type="submit" className="btn">
              Add to cart
            </button>
          </form>
        </div>
        <dt>
          The prices shown may differ from the final price on your cart
          depending on the size and variant
        </dt>
        {isAnimate && isAuthenticated && isAvilable ? (
          <p className="alert-success">Item added to cart successfully</p>
        ) : (
          ''
        )}
        {isAnimate && isAuthenticated && !isAvilable ? (
          <p className="alert-danger">
            Sorry, We're out of stock at the moment. please select different
            color/size
          </p>
        ) : (
          ''
        )}
        {isAnimate && !isAuthenticated ? (
          <p className="alert-danger">Please log in to use the shop</p>
        ) : (
          ''
        )}
        <br />
      </div>
    </div>
  );
}

export default SelectedProduct;
