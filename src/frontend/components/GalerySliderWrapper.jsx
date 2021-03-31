import React from 'react';

import { Carousel } from 'react-bootstrap';
import sliderImg1 from '../../assets/image/top-slider-image1.jpg';
import sliderImg2 from '../../assets/image/top-slider-image2.jpg';
import sliderImg3 from '../../assets/image/top-slider-image3.jpg';
import sliderImg4 from '../../assets/image/top-slider-image4.jpg';
import sliderImg5 from '../../assets/image/top-slider-image5.jpg';
import sliderImg6 from '../../assets/image/top-slider-image6.jpg';
import sliderImg7 from '../../assets/image/top-slider-image7.jpg';
import '../css/GalerySliderWrapper.css';
function GalerySliderWrapper() {
  return (
    <div className="topSlider-wrapper  ">
      <div className="">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100 " src={sliderImg1} alt="" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={sliderImg2} alt="" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={sliderImg3} alt="" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={sliderImg4} alt="" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={sliderImg5} alt="" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={sliderImg6} alt="" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={sliderImg7} alt="" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default GalerySliderWrapper;
