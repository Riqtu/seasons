import React, {useState, useEffect} from 'react';
import './MenuPage.scss';

import cn from 'classnames'

import { Carousel } from 'react-responsive-carousel';

import b1 from './../img/breakfast/1.jpg';
import b2 from './../img/breakfast/2.jpg';
import b3 from './../img/breakfast/3.jpg';

import mb1 from './../img/breakfast/m1.jpg';
import mb2 from './../img/breakfast/m2.jpg';
import mb3 from './../img/breakfast/m3.jpg';
import mb4 from './../img/breakfast/m4.jpg';
import mb5 from './../img/breakfast/m5.jpg';
import mb6 from './../img/breakfast/m6.jpg';

import mm1 from './../img/mainmenu/m1.jpg';
import mm2 from './../img/mainmenu/m2.jpg';
import mm3 from './../img/mainmenu/m3.jpg';
import mm4 from './../img/mainmenu/m4.jpg';
import mm5 from './../img/mainmenu/m5.jpg';
import mm6 from './../img/mainmenu/m6.jpg';
import mm7 from './../img/mainmenu/m7.jpg';
import mm8 from './../img/mainmenu/m8.jpg';
import mm9 from './../img/mainmenu/m9.jpg';
import mm10 from './../img/mainmenu/m10.jpg';
import mm11 from './../img/mainmenu/m11.jpg';
import mm12 from './../img/mainmenu/m12.jpg';
import mm13 from './../img/mainmenu/m13.jpg';

import m1 from './../img/mainmenu/1.jpg';
import m2 from './../img/mainmenu/2.jpg';
import m3 from './../img/mainmenu/3.jpg';
import m4 from './../img/mainmenu/4.jpg';
import m5 from './../img/mainmenu/5.jpg';
import m6 from './../img/mainmenu/6.jpg';
import m7 from './../img/mainmenu/7.jpg';

import w1 from './../img/wine/1pc.jpg';
import w2 from './../img/wine/2pc.jpg';
import w3 from './../img/wine/3pc.jpg';

import wm1 from './../img/wine/wm1.jpg';
import wm2 from './../img/wine/wm2.jpg';
import wm3 from './../img/wine/wm3.jpg';
import wm4 from './../img/wine/wm4.jpg';
import wm5 from './../img/wine/wm5.jpg';

// import wm from './../img/mainmenu/wm.jpg';
// import wine from './../img/mainmenu/w.jpg';

import breakfast from './../img/breakfast.png'
import mainmenu from './../img/mainmenu.png'
import wineMenu from './../img/wine-menu.png'

let arrBreackfest = [b1, b2, b3]
let arrMainmenu = [m1, m2, m3]
let arrWineMenu = [w1,w2,w3]
  let w = 90;
function MenuPage(props) {
  useEffect(() => {
    if (window.innerWidth > 500){
      w=90;
      arrBreackfest = [b1, b2, b3]
      arrMainmenu = [m1, m2, m3, m4, m5, m6, m7]
      arrWineMenu = [w1,w2,w3]
    }
    else{
      w=100;
      arrBreackfest = [mb1, mb2, mb3, mb4, mb5, mb6]
      arrMainmenu = [mm1, mm2, mm3, mm4, mm5, mm6,mm7, mm8, mm9, mm10, mm11, mm12, mm13]
      arrWineMenu = [wm1,wm2,wm3,wm4,wm5]
    }
  },);


  const [k, sk] = useState(1);
  var i = -1;
var items = [m1, m2, m3, m4, m5, m6, m7, b1, b2, b3];

if ( k === 0){
  if (window.innerWidth > 500){
    w=90;
    arrBreackfest = [b1, b2, b3]
  }
  else{
    w=100;
    arrBreackfest = [mb1, mb2, mb3, mb4, mb5, mb6]
  }
  items = arrBreackfest.map(()=> {
    i+=1;
    return (
        <div className="pad">
            <img src={arrBreackfest[i]} alt="Завтраки"/>
        </div>
    )
  });
}
if ( k === 1){
  if (window.innerWidth > 500){
    w=90;
    arrMainmenu = [m1, m2, m3, m4, m5, m6, m7]
  }
  else{
    w=100;
    arrMainmenu = [mm1, mm2, mm3, mm4, mm5, mm6,mm7, mm8, mm9, mm10, mm11, mm12, mm13]
  }
  items = arrMainmenu.map(()=> {
    i+=1;
    return (
        <div className="pad">
            <img src={arrMainmenu[i]} alt="Основное меню"/>
        </div>
    )
  });
}

if ( k === 2){
  if (window.innerWidth > 500){
    w=90;
    arrWineMenu = [w1,w2,w3]
  }
  else{
    w=100;
    arrWineMenu = [wm1,wm2,wm3,wm4,wm5]
  }
  items = arrWineMenu.map(()=> {
    i+=1;
    return (
        <div className="pad">
            <img src={arrWineMenu[i]} alt="Винная карта"/>
        </div>
    )
  });
}

  const [menuContainer, setMenuContainer] = useState(false);

  return (
    <section className={cn('MenuPage',{active: props.MenuPage})} id="MenuPage">
        <div className="logo">
            <h1>Меню</h1>
        </div>
        <div className="MenuPage__positions">
          <button onClick={()=>{setMenuContainer(!menuContainer); sk(0)}}>
            <img src={breakfast} alt=""/><br/>
            <label>Завтраки</label>
          </button>
          <button onClick={()=>{setMenuContainer(!menuContainer); sk(1)}}>
            <img src={mainmenu} alt=""/><br/>
            <label>Основное меню</label>
          </button>
          <button onClick={()=>{setMenuContainer(!menuContainer); sk(2)}}>
            <img src={wineMenu} alt=""/><br/>
            <label>Винная карта</label>
          </button>
        </div>

        <section className={cn("MenuContainer",{'MenuContainer-active':menuContainer})}>
          <div className="test"></div>
          <div className="gallery">
          <Carousel 
              width={'100%'} 
              centerSlidePercentage={w} 
              centerMode={true} 
              infiniteLoop={true}
              autoPlay={true}
              showArrows={true}
              showStatus={false}
              showIndicators={false}
              showThumbs={false}
              stopOnHover={true}
              transitionTime={500}
              swipeable={true}
          >
              {items}
          </Carousel>
          </div>
          <div className="MenuContainer__back" onClick={()=>{setMenuContainer(!menuContainer)}}></div>
          <button className="closeButton" onClick={()=>{setMenuContainer(!menuContainer)}}>Закрыть</button>
        </section>
    </section>
  );
}

export default MenuPage;
