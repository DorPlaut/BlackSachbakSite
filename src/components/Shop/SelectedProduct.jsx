import React, { useEffect, useState, useRef } from 'react';
import { BsFileFontFill, BsFillXCircleFill } from 'react-icons/bs';
import axios from 'axios';
import ProductGallery from './ProductGallery';
import FormInput from './FormInput';
import { useAuth0 } from '@auth0/auth0-react';

function SelectedProduct({ products, selectedProduct, setIsSelected }) {
  // User info
  const { user, getAccessTokenSilently } = useAuth0();

  // SELECTED PRODUCT data
  const filterdProduct = products.filter((i) => {
    return selectedProduct.indexOf(i.title) > -1;
  });
  const productDetails = filterdProduct[0];
  // specific values
  const { images, options, variants, fullOptions } = productDetails;
  let price = productDetails.variants[0].price.toString().split('');
  price.splice(-2, 0, '.').toString();
  // set seldeted product for cart
  const [options1, setOptions1] = useState();
  const [options2, setOptions2] = useState();
  const [options3, setOptions3] = useState();
  let optionsArr;
  const getOptions = () => {
    let option1 = options[0];
    let option2 = options[1];
    let option3 = options[2];
    let option1Arr;
    let option2Arr;
    let option3Arr;
    if (option1 && !option2 && !option3) {
      option1Arr = fullOptions[0].values.map((i) => {
        return i.title;
      });
      optionsArr = [{ title: option1, options: option1Arr }];
    }
    if (option1 && option2 && !option3) {
      option1Arr = fullOptions[0].values.map((i) => {
        return i.title;
      });
      option2Arr = fullOptions[1].values.map((i) => {
        return i.title;
      });
      optionsArr = [
        { title: option1, options: option1Arr },
        { title: option2, options: option2Arr },
      ];
    }
    if (option1 && option2 && option3) {
      option1Arr = fullOptions[0].values.map((i) => {
        return i.title;
      });
      option2Arr = fullOptions[1].values.map((i) => {
        return i.title;
      });
      option3Arr = fullOptions[2].values.map((i) => {
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
  const [UserID, setUserID] = useState('ID');
  const [product, setProduct] = useState('ID');
  const [quantity, setQuantity] = useState(1);
  // const [color, setColor] = useState('');
  // const [size, setSize] = useState('');

  let specificVariant;
  const updatedSelectedVariant = () => {
    specificVariant = [options1, options2, options3]
      .filter((i) => {
        return i != '';
      })
      .join(' / ');
  };

  let sku;
  const getSKU = () => {
    const variant = variants.filter((i) => {
      return specificVariant.indexOf(i.title) > -1;
    });
    sku = variant[0].sku;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updatedSelectedVariant();
    getSKU();

    setOptions1('');
    setOptions2('');
    setOptions3('');

    postForm();
  };

  // Reset all parameters when selecting different product
  useEffect(() => {
    getOptions();
    setQuantity(1);
  }, [selectedProduct]);

  // Add to cart

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
        <p dangerouslySetInnerHTML={{ __html: productDetails.desc }}></p>
        <h3>{price}$</h3>
        <div className="chose-specific">
          {/* form */}
          <form
            action=""
            method="post"
            className="product-form"
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
        <br />
      </div>
    </div>
  );
}

export default SelectedProduct;
