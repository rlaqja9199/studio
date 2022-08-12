import React, { useState } from 'react'
import './Header.css';

const Header = () => {
    const [hMList, setHMList] = useState('-100%');
    const [menuOpa, setMenuOpa] = useState('0');
    function clickBTab(){
        hMList === '-100%'? setHMList('0') : setHMList('-100%');
        menuOpa === '0'?
        setTimeout(() => {
            setMenuOpa('1');
        }, 800) : 
        setTimeout(()=>{setMenuOpa('0')},800);

    };
  return (
    <header>
        <h1 id='hLogo'><a href="/">Own_studiO</a></h1>
        <div id='hMenu'>
            <div id='hProfile'>     
                <img src='./images/unknown-icon.jpg' alt='' />
            </div>
            <div id='hBurgerTab' onClick={clickBTab}>
                <div></div>
                <div></div>
                <div></div>
                <ul id='hMenuList' style={{top: hMList}}>
                    <li style={{opacity: menuOpa}}><img src="./images/s1.jpg" alt=''></img></li>
                    <li style={{opacity: menuOpa}}>
                        <span id="menuX"></span>
                        <ul id='listTab'>
                            <li>
                                <p>Story</p>
                                <span>온 스튜디오 이야기</span>
                            </li>
                            <li>
                                <p>Guide</p>
                                <span>온 스튜디오 가이드</span>
                            </li>
                            <li>
                                <p>Reservation</p>
                                <span>예약하기</span>
                            </li>
                            <li>
                                <h1 id='hLogo'><a href="/">Own_studiO</a></h1>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Header