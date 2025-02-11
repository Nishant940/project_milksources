import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
  return (
    <Carousel data-bs-theme="dark" id="home">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/image/01_MILK SOURCES.png`}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/image/02_Banner.png`}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/image/03_Banner.png`}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;