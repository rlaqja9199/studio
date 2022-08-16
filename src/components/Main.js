import React, { useEffect, useState } from 'react'
import Aside from '../include/Aside';
import './Main.css'
import MainSlide from './MainSlide'


const Main = () => {
  const [wheelLocation, setWheelLocation] = useState(0);
  const [slideFontSize, setSlideFontSize] = useState(100);
  const [mainLocation, setMainLocation] = useState(0);
  const [imgLocation, setImgLocation] = useState(0);
  const [page2ImgOpacity, setPage2ImgOpacity] = useState(0);
  const [page3ImgOpacity, setPage3ImgOpacity] = useState(0);
  document.body.style.overflow = "hidden";

  //페이지2


  useEffect(()=>{
    window.addEventListener('resize',(e)=>{
      const innerWidth = e.target.innerWidth;
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
        if(wheelLocation>0){
          setWheelLocation(wheelLocation-1);
          console.log(wheelLocation);
        }
      }
      if(wheelLocation>20){
        setImgLocation(-100);
        setTimeout(() => {
          setPage2ImgOpacity(1);
        }, 300);
      }else if(wheelLocation<=20){
        setImgLocation(0);
        setTimeout(() => {
          setPage2ImgOpacity(0);
        }, 300);
      }
      if(wheelLocation>30){
        setImgLocation(-200);
        setTimeout(() => {
          setPage3ImgOpacity(1);
        }, 400);
      }else if(wheelLocation<=20){
        setImgLocation(0);
        setTimeout(() => {
          setPage3ImgOpacity(0);
        }, 400);
      }
    })
  },[wheelLocation,slideFontSize,mainLocation])

  return (
    <div id='mainPage'>
      <Aside />
      <div id='topImg' style={{top:`${imgLocation}%`}}>
        <MainSlide />
        <p id='slideText' style={{fontSize: `${slideFontSize}px`}}>Own your color</p>
      </div>
      <div id='page2' style={{top:`${(imgLocation+100)}%`, opacity: page2ImgOpacity}}>
        <div id='profileImg'>
          <img src='/images/profile.jfif' alt='' style={{opacity: page2ImgOpacity}}/>
        </div>
        <div id='profileBg'>
          <p>
            안녕하세요 저는 사진작가 땡땡땡입니다.<br/>
            저를 찾아주셔서 감사합니다
          </p>
        </div>
      </div>
      <div id='page3' style={{top:`${(imgLocation+200)}%`, opacity:page3ImgOpacity}}>
        <div id='personalProfile'>
          <img src='/images/pProfile.jfif' alt='' />
        </div>
        <div id='pProfileBg'>
          <p>
            Own your Color <br/>
            당신의 컬러를 찾으세요
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main