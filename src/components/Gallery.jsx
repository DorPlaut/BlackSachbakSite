import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Gallery() {
  const images = [
    'https://scontent.fsdv1-2.fna.fbcdn.net/v/t39.30808-6/299798944_457375519733761_815928325762960498_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=-mtcZM4bt4EAX8OS3ig&_nc_oc=AQm3QswjjLfqqFlebgG33NaUZzS3UvizmU-MWc-y0x03qNHiQsCTtavkB7_lE2p7SA0&_nc_ht=scontent.fsdv1-2.fna&oh=00_AT9YN4UOqpHZ49EyDVIxqCp5b7qRrvct0_8FCG6846f9iw&oe=6345657D',
    'https://scontent.fsdv1-2.fna.fbcdn.net/v/t39.30808-6/246919636_260363186101663_1850354332696656179_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=p5p15dso5RAAX9TP6CQ&tn=iTO9AVJQLHhXHTGk&_nc_ht=scontent.fsdv1-2.fna&oh=00_AT_4f21KmbjsPlD_veR4U1ddG3nFbl3QwwtVGRdglih_KQ&oe=63462347',
    'https://scontent.fsdv1-2.fna.fbcdn.net/v/t39.30808-6/243566552_245561124248536_2625684309586134289_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=w0EHsOy-qpAAX8Sn7dh&_nc_ht=scontent.fsdv1-2.fna&oh=00_AT9lVgdnT0iA6emz3dDXM2ZFCWsF4TbPIBY3hYNRvoceYg&oe=6345C67D',
    'https://scontent.fsdv1-2.fna.fbcdn.net/v/t39.30808-6/241074852_224392546365394_8226114128045815514_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=Fn-ApEHhBYwAX_ordMv&_nc_ht=scontent.fsdv1-2.fna&oh=00_AT82VLLiD2jZxdgpc7rNvPxuuNKxcemLTDTcSJCF8ouhog&oe=6345C4F5',
    'https://scontent.fsdv1-2.fna.fbcdn.net/v/t39.30808-6/299798944_457375519733761_815928325762960498_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=-mtcZM4bt4EAX8OS3ig&_nc_oc=AQm3QswjjLfqqFlebgG33NaUZzS3UvizmU-MWc-y0x03qNHiQsCTtavkB7_lE2p7SA0&_nc_ht=scontent.fsdv1-2.fna&oh=00_AT9YN4UOqpHZ49EyDVIxqCp5b7qRrvct0_8FCG6846f9iw&oe=6345657D',
    'https://scontent.fsdv1-2.fna.fbcdn.net/v/t39.30808-6/246919636_260363186101663_1850354332696656179_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=p5p15dso5RAAX9TP6CQ&tn=iTO9AVJQLHhXHTGk&_nc_ht=scontent.fsdv1-2.fna&oh=00_AT_4f21KmbjsPlD_veR4U1ddG3nFbl3QwwtVGRdglih_KQ&oe=63462347',
    'https://scontent.fsdv1-2.fna.fbcdn.net/v/t39.30808-6/243566552_245561124248536_2625684309586134289_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=w0EHsOy-qpAAX8Sn7dh&_nc_ht=scontent.fsdv1-2.fna&oh=00_AT9lVgdnT0iA6emz3dDXM2ZFCWsF4TbPIBY3hYNRvoceYg&oe=6345C67D',
    'https://scontent.fsdv1-2.fna.fbcdn.net/v/t39.30808-6/241074852_224392546365394_8226114128045815514_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=Fn-ApEHhBYwAX_ordMv&_nc_ht=scontent.fsdv1-2.fna&oh=00_AT82VLLiD2jZxdgpc7rNvPxuuNKxcemLTDTcSJCF8ouhog&oe=6345C4F5',
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
        // autoPlay={true}
        autoPlaySpeed={1000}
        centerMode={true}
      >
        {images.map((index) => {
          console.log(index);
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
