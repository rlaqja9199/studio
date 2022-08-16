import React, { useEffect, useState } from 'react'
import './Aside.css';

const Aside = () => {
    const [scrollWineHeight, setScrollWineHeight] = useState(0);
    const [wheelLocation, setWheelLocation] = useState(0);
    useEffect(()=>{
        window.addEventListener('wheel',(e)=>{
            if(e.deltaY > 0){
              setWheelLocation(wheelLocation+1);
              console.log(wheelLocation);
            }else{
              if(wheelLocation>0){
                setWheelLocation(wheelLocation-1);
                console.log(wheelLocation);
              }
            }
            if(wheelLocation>30){
              setScrollWineHeight(20);
            }else if(wheelLocation>20){
                setScrollWineHeight(10);
            }else if(wheelLocation<=20){
                setScrollWineHeight(0);
              }
          })
    },[wheelLocation, scrollWineHeight])
  return (
    <div id='sideScroll'>
        <div id='scrollWhite'></div>
        <div id='scrollWine' style={{height:`${scrollWineHeight}px`}}></div>
    </div>
  )
}

export default Aside