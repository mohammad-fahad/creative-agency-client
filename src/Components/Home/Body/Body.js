import React from 'react';
import 'swiper/swiper.scss';
import { Carousel } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png';
import carousel4 from '../../../images/carousel-4.png';
import carousel5 from '../../../images/carousel-5.png';
import './Body.css';

const Body = () => {
    return (
        <div className="carousel"> 
           <div className="text-center container container-fluid mt-5 p-5">
           <h2 className="mb-5 text-white">Here are some of <span className="text-success"> our works</span> </h2>    
    <Swiper
      
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img className="img-fluid" src={carousel1} style={{width:'20vw', height:'25vh'}} alt=""/></SwiperSlide> 
      <SwiperSlide><img className="img-fluid" src={carousel2} style={{width:'20vw', height:'25vh'}} alt=""/></SwiperSlide>
      <SwiperSlide><img className="img-fluid" src={carousel3} style={{width:'20vw', height:'25vh'}} alt=""/></SwiperSlide>
      <SwiperSlide><img className="img-fluid" src={carousel4} style={{width:'20vw', height:'25vh'}} alt=""/></SwiperSlide>
      <SwiperSlide><img className="img-fluid" src={carousel5} style={{width:'20vw', height:'25vh'}} alt=""/></SwiperSlide>
      ...
    </Swiper>

          </div>
        </div>
    );
};

export default Body;