// src/components/UncontrolledExample.jsx
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Spinner from "./Spinner";

const ImagesCarousel = ({ images }) => {
  if (!images || images.length === 0) return <Spinner />;

  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            src={image}
            alt={`Fade ${index + 1}`}
            style={{ height: "100px", width: "100px", objectFit: "cover" }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImagesCarousel;
