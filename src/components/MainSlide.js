import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./MainSlide.css"
import DotWave from '../dotwave/DotWave';

const MainSlide = () => {
  const [slideSize, setSlideSize] = useState(1);
  const [wheelLocation, setWheelLocation] = useState(0);
  const [slideOut, setSlideOut] = useState(false);
  const [slideCursor, setslideCursor] = useState('')

  useEffect(()=>{
    window.addEventListener('wheel',(e)=>{
      if(wheelLocation>16){

      }
      if(e.deltaY>0){
        if(slideSize>=1.2){
          setslideCursor('pointer');
        }else if(slideSize<=1.2){
          setWheelLocation(wheelLocation+1);
          console.log(wheelLocation)
          setSlideSize(1+(wheelLocation*0.025));
          setslideCursor('');
        }
      }else{
        if(slideSize>=1){
          if(wheelLocation>0){
            setWheelLocation(wheelLocation-1);
          }
          console.log(wheelLocation);
          setSlideSize(1+(wheelLocation*0.025));
          setslideCursor('');
        }
      }
    })
  },[slideSize, wheelLocation])
  const settings = {
    fade: true,
    infinite: true,
    speed: 0,
    autoplay: true,
    slidesToShow: 1,  
    slidesToScroll: 1,
    autoplaySpeed: 500,
    pauseOnHover: slideOut
  };
  return (
    <div id='mainSlide' style={{transform: `translate(-50%,-50%) scale(${slideSize})`, cursor: slideCursor}}>
        <Slider {...settings}>
        <div className='slide'>
          <img src='/images/14.jpg' alt='' />
        </div>
        <div className='slide'>
          <img src='/images/4.jpg' alt='' />
        </div>
        <div className='slide'>
          <img src='/images/12.jpg' alt='' />
        </div>
        <div className='slide'>
          <img src='/images/1.jpg' alt='' />
        </div>
        <div className='slide'>
          <img src='/images/11.jpg' alt='' />
        </div>
        <div className='slide'>
          <img src='/images/15.jpg' alt='' />
        </div>
        <div className='slide'>
          <img src='/images/18.jpg' alt='' />
        </div>
        <div className='slide'>
          <img src='/images/17.jpg' alt='' />
        </div>
        <div className='slide'>
          <img src='/images/20.jpg' alt='' />
        </div>
        <div className='slide'>
          <img src='/images/19.jpg' alt='' />
        </div>
        <div className='slide'>
          <img src='/images/16.jpg' alt='' />
        </div>
        <div className='slide'>
          <img src='/images/21.jpg' alt='' />
        </div>
    </Slider>
      </div>
  )
}

export default MainSlide