import React, { useState, useEffect } from "react";

const Carousel = ({ apiUrl, slideInterval }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  let timer;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();

    return () => {
      clearInterval(timer);
    };
  }, [apiUrl]);

  useEffect(() => {
    timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, slideInterval);

    return () => {
      clearInterval(timer);
    };
  }, [images, slideInterval]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const handleMouseEnter = () => {
    clearInterval(timer);
  };

  const handleMouseLeave = () => {
    timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, slideInterval);
  };

  return (
    <div
      className="carousel"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className="carousel-image"
        src={images[currentSlide]?.url}
        alt="Carousel Slide"
      />
      <div className="carousel-thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            className={`carousel-thumbnail ${
              index === currentSlide ? "active" : ""
            }`}
            src={image.thumbnailUrl}
            alt={`Thumbnail ${index}`}
            onClick={() => handleSlideChange(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
