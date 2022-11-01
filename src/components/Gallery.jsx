import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Gallery() {
  const images = [
    'https://lh4.googleusercontent.com/GckuwnK5H1mv-kS2VvtejKZBBCE2qxB4cpLB7_gdRJr_boLlXo93yCVInijbK88RgLQ=w2400',
    'https://lh5.googleusercontent.com/O4esSnGXv29ax_2xosHo7XXaV2JDmC7YyW4os_21RxEMWdzWWwvXMrrfxtUZhPa478M=w2400',
    'https://lh3.googleusercontent.com/UClXTMCyXQolR7Jd6Mi2hPNWh8RaKTIu2ULwgQh2UrG5QmWZxQX_ZAM7M2RPT9gfbbg=w2400',
    'https://lh5.googleusercontent.com/8rjqVYXDAR7hAr3BpwpeRzX2d66IyTZAxJHkDKRjTVae4V7dHSKJK9QagBfbua8kpCY=w2400',
    'https://lh5.googleusercontent.com/17p8ePNvnLcTCX2Kiq65rKPFWafI7fjij8e0Xmz8Ds3aPHPYZcalkpk1ZbW0bZHrAjs=w2400',
    'https://lh4.googleusercontent.com/pLr-pxF3WQ1Eizrx9waUfwn2EvEhMh109u2DS0pRiVCSU1oc6sCauh1qQYj4wAUCgwo=w2400',
    'https://lh6.googleusercontent.com/Iq0iSh2FvJjQJEw2FcSpRM83kxl24_aMtB3hdwoik0-XmF47CkNrx9z92Vp4TlnMibE=w2400',
    'https://lh5.googleusercontent.com/YNIEaLnkvSFVPIgc2JFljGf44Yx36dCLwqW6P6zWODPpYgaHEJmjV_1IQzIj_hyAMKo=w2400',
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Carousel
        responsive={responsive}
        id="gallery"
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        centerMode={true}
      >
        {images.map((index) => {
          return (
            <div key={index}>
              <img src={index} alt="photo" className="image" />
            </div>
          );
        })}
      </Carousel>
    </>
  );
}

export default Gallery;
