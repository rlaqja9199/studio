import React, { useEffect, useState } from 'react'
import './Main.css'
import MainSlide from './MainSlide'


const Main = () => {
  const [wheelLocation, setWheelLocation] = useState(0);
  const [slideFontSize, setSlideFontSize] = useState(100);
  const [mainLocation, setMainLocation] = useState(0);

  //캔버스


  // const pixelRatio = window.devicePixelRatio > 1 ? 2 : 1 ;
  // const [stageWidth, setStageWidth] = useState(document.body.clientWidth);
  // const [stageHeight, setStageHeight] = useState(document.body.clientHeight);
  // const [canvasWidth, setCanvasWidth] = useState();
  // const [canvasheight, setCanvasHeight] = useState();
  // const [ctxScale, setCtxScale] = useState();


  useEffect(()=>{
    window.addEventListener('resize',(e)=>{
      const innerWidth = e.target.innerWidth;
      console.log(innerWidth)
      if(innerWidth<550){
        setSlideFontSize(36);
      }else if(innerWidth<1220){
        setSlideFontSize(70);
      }else{
        setSlideFontSize(100);
      }
    })
    window.addEventListener('wheel',(e)=>{
      if(e.deltaY > 0){
        setWheelLocation(wheelLocation+1);
        console.log(wheelLocation);
      }else{
        setWheelLocation(wheelLocation-1);
        console.log(wheelLocation);
      }
    })
  },[wheelLocation,slideFontSize,mainLocation])

  return (
    <div id='mainPage'>
      <div id='topImg'>
        <MainSlide />
        <p id='slideText' style={{fontSize: `${slideFontSize}px`}}>Own your color</p>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Main