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
  const [page2TextOpacity, setPage2TextOpacity] = useState(0);
  const [page2TextLocation, setPage2TextLocation] = useState(30);
  const [page3ImgOpacity, setPage3ImgOpacity] = useState(0);
  const [page3TextOpacity, setPage3TextOpacity] = useState(0);
  const [page3TextLocation, setPage3TextLocation] = useState(30);
  const [page4ImgOpacity, setPage4ImgOpacity] = useState(0);
  const [page4TextOpacity, setPage4TextOpacity] = useState(0);
  const [page4TextLocation, setPage4TextLocation] = useState(30);
  const [page5ImgOpacity, setPage5ImgOpacity] = useState(0);
  const [page5TextOpacity, setPage5TextOpacity] = useState(0);
  const [page5TextLocation, setPage5TextLocation] = useState(30);
  const [page6ImgOpacity, setPage6ImgOpacity] = useState(0);
  const [page6TextOpacity, setPage6TextOpacity] = useState(0);
  const [page6LogoOpacity, setPage6LogoOpacity] = useState(0);
  const [page6TextLocation, setPage6TextLocation] = useState(30);
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
        if(wheelLocation<53){
          setWheelLocation(wheelLocation+1);
          console.log(wheelLocation);
        }
      }else{
        if(wheelLocation>0){
          setWheelLocation(wheelLocation-1);
          console.log(wheelLocation);
        }
      }
      if(wheelLocation>46){
        setImgLocation(-500);
        setTimeout(() => {
          setPage6LogoOpacity(1);
        }, 800);
        setTimeout(() => {
          setPage6ImgOpacity(1);
          setPage6TextOpacity(1);
          setPage6TextLocation(25);
          setPage5ImgOpacity(0);
          setPage5TextOpacity(0);
          setPage5TextLocation(30);
          setPage4ImgOpacity(0);
          setPage4TextOpacity(0);
          setPage4TextLocation(30);
        }, 400);
      }else if(wheelLocation>39){
        setImgLocation(-400);
        setPage6LogoOpacity(0);
        setTimeout(() => {
          setPage6ImgOpacity(0);
          setPage6TextOpacity(0);
          setPage6TextLocation(30);
          setPage5ImgOpacity(1);
          setPage5TextOpacity(1);
          setPage5TextLocation(25);
          setPage4ImgOpacity(0);
          setPage4TextOpacity(0);
          setPage4TextLocation(30);
        }, 400);
      }else if(wheelLocation>32){
        setImgLocation(-300);
        setTimeout(() => {
          setPage5ImgOpacity(0);
          setPage5TextOpacity(0);
          setPage5TextLocation(30);
          setPage4ImgOpacity(1);
          setPage4TextOpacity(1);
          setPage4TextLocation(25);
          setPage3ImgOpacity(0);
          setPage3TextOpacity(0);
          setPage3TextLocation(30);
        }, 400);
      }else if(wheelLocation>25){
        setImgLocation(-200);
        setTimeout(() => {
          setPage5ImgOpacity(0);
          setPage5TextOpacity(0);
          setPage5TextLocation(30);
          setPage4ImgOpacity(0);
          setPage4TextOpacity(0);
          setPage4TextLocation(30);
          setPage3ImgOpacity(1);
          setPage3TextOpacity(1);
          setPage3TextLocation(25);
          setPage2ImgOpacity(0);
          setPage2TextOpacity(0);
          setPage2TextLocation(30);
        }, 400);
      }else if(wheelLocation>18){
        setImgLocation(-100);
        setTimeout(() => {
          setPage5ImgOpacity(0);
          setPage5TextOpacity(0);
          setPage5TextLocation(30);
          setPage4ImgOpacity(0);
          setPage4TextOpacity(0);
          setPage4TextLocation(30);
          setPage3ImgOpacity(0);
          setPage3TextOpacity(0);
          setPage3TextLocation(30);
          setPage2ImgOpacity(1);
          setPage2TextOpacity(1);
          setPage2TextLocation(25);
        }, 400);
      }else if(wheelLocation<=18){
        setImgLocation(0);
        setTimeout(() => {
          setPage2ImgOpacity(0);
          setPage2TextOpacity(0);
          setPage2TextLocation(30);
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
      <div id='page2' style={{top:`${(imgLocation+100)}%`}}>
        <div id='profileImg'>
          <img src='/images/profile.jfif' alt='' style={{opacity: page2ImgOpacity}}/>
        </div>
        <div id='profileBg'>
          <p style={{opacity:page2TextOpacity , top: `${page2TextLocation}%`}}>
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
          <p style={{opacity: page3TextOpacity , top: `${page3TextLocation}%`}}>
            Own your Color <br/>
            당신의 컬러를 담아드립니다.
          </p>
        </div>
      </div>
      <div id='page4' style={{top: `${imgLocation+300}%`, opacity: page4ImgOpacity}}>
        <div id='familyPhoto'>
          <img src='/images/family4.jpg' alt='' />
        </div>
        <div id='fPhotoBg'>
          <p style={{opacity: page4TextOpacity, top: `${page4TextLocation}%`}}>
            Own your Color <br/>
            당신의 컬러를 찾으세요
          </p>
        </div>
      </div>
      <div id='page5' style={{top: `${imgLocation+400}%`, opacity: page5ImgOpacity}}>
        <div id='babyPhoto'>
          <img src='/images/baby1.jpg' alt='' />
        </div>
        <div id='bPhotoBg'>
          <p style={{opacity: page5TextOpacity, top: `${page5TextLocation}%`}}>
            Own your Color <br/>
            당신의 컬러를 찾으세요
          </p>
        </div>
      </div>
      <div id='page6' style={{top: `${imgLocation+500}%`, opacity: page6ImgOpacity}}>
        <div id='friendPhoto'>
          <img src='/images/pProfile.jfif' alt='' />
        </div>
        <div id='frPhotoBg'>
          <p style={{opacity: page6TextOpacity, top: `${page6TextLocation}%`}}>
            Own your Color <br/>
            당신의 컬러를 담아드립니다
          </p>
          <span id='pageLogo' style={{opacity: page6LogoOpacity}}>Own_studiO</span>
        </div>
      </div>
    </div>
  )
}

export default Main