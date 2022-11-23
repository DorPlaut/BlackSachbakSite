import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Gallery() {
  const images = [
    'https://drive.google.com/uc?export=view&id=1WBiusJWsl5mmCQGQaKRQB82Ug0zkjPp4',
    'https://drive.google.com/uc?export=view&id=1YpfHMlA38DRIZAOOYBEYNIkz_d_YnoR1',
    'https://drive.google.com/uc?export=view&id=1pec8378w6v6sy0pGZeE5m8Erd6pOkVZJ',
    'https://drive.google.com/uc?export=view&id=1hKm543KLO4jaWe5LnTJFWXDVb7255Qms',
    'https://drive.google.com/uc?export=view&id=11rA-1SnSt0U_scbozOdoAWcOdvfsWp6X',
    'https://drive.google.com/uc?export=view&id=1vMOX4_uLff07YyEkdgKY2Ciq42NF9n8z',
    'https://drive.google.com/uc?export=view&id=1eAkzHjWd_c7qEt3dzBdMMsCcs4BYiSqb',
    'https://drive.google.com/uc?export=view&id=1HyYme2dBqag3vDROs5W7aW-Ia3t5e_Xm',
    'https://drive.google.com/uc?export=view&id=1-D27vbDJu57X5CEcC1yUamvCDkfbMCyO',
    'https://drive.google.com/uc?export=view&id=1TPQj4vFstUuGt2A2_fLuYwckgBrO1Ue1',
    'https://drive.google.com/uc?export=view&id=1FiHnkB75sAV-GEikr1sasbX63PGz6zJM',
    'https://drive.google.com/uc?export=view&id=1dLQTuj8714bYVWJmxVSKNVKJeuqboS_g',
    // 'https://drive.google.com/uc?export=view&id=',
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
        className="carusel"
        responsive={responsive}
        id="gallery"
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        centerMode={true}
        focusOnSelect={true}
      >
        {images.map((index) => {
          return (
            <div key={index}>
              <img
                src={index}
                alt="photo"
                className="image"
                referrerPolicy="no-referrer"
              />
            </div>
          );
        })}
      </Carousel>
    </>
  );
}

export default Gallery;
