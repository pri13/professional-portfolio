import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const images = [
  {
    label: 'Up Close and Personal',
    imgPath: '/myImages/PIC_001.JPEG',
  },
  {
    label: 'Love to climb a good rock',
    imgPath: '/myImages/PIC_002.JPEG',
  },
  {
    label: 'Comparing myself with the size of the boat',
    imgPath: '/myImages/PIC_003.JPEG',
  },
  {
    label: 'Walking through a good trail is what i live for',
    imgPath: '/myImages/PIC_004.JPEG',
  },
  {
    label: 'Cruising through Ocean..',
    imgPath: '/myImages/PIC_005.JPEG',
  },
  {
    label: 'Representing my culture..',
    imgPath: '/myImages/PIC_006.JPEG',
  },
  {
    label: 'Can you tell I\'m tired from all the walking..',
    imgPath: '/myImages/PIC_007.JPEG',
  },
  {
    label: 'In my element..',
    imgPath: '/myImages/PIC_008.JPEG',
  },
  {
    label: 'Love drinking the daily Joe',
    imgPath: '/myImages/PIC_009.JPEG',
  },
];

function SwipeableTextMobileStepper() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div style={{ maxWidth: 500, margin: '0 auto' }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.imgPath} alt={image.label} style={{ width: '100%', height: 'auto' }} />
            <h3>{image.label}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SwipeableTextMobileStepper;
