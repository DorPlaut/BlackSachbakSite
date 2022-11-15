import React from 'react';
import Carousel from 'react-multi-carousel';

function ProductGallery({ images }) {
  // carusel responsivnes
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      centerMode={true}
    >
      {images.map((index) => {
        return (
          <div key={index}>
            <img src={index.img} alt="photo" className="selected-product-img" />
          </div>
        );
      })}
    </Carousel>
  );
}

export default ProductGallery;
