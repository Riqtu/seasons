import React, {useState} from 'react';
import './Delivery.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import cn from 'classnames'

// import map from './../img/map.png';

import m4 from './../img/mainmenu/4.jpg';
import m5 from './../img/mainmenu/5.jpg';
import m6 from './../img/mainmenu/6.jpg';

import mm7 from './../img/mainmenu/m7.jpg';
import mm8 from './../img/mainmenu/m8.jpg';
import mm9 from './../img/mainmenu/m9.jpg';
import mm10 from './../img/mainmenu/m10.jpg';
import mm11 from './../img/mainmenu/m11.jpg';

let arr = [m4, m5, m6]
var i = -1;

  var w = 70;
  if (window.innerWidth > 500){
    w=70;
    arr = [m4, m5, m6]
  }
  else{
    w=100;
    arr = [mm7, mm8, mm9, mm10, mm11]
  }

  var items = arr.map(()=> {
    i+=1;
    return (
        <div className="pad">
            <img src={arr[i]} alt=""/>
        </div>
    )
  });
function Delivery(props) {
  // const [mapContainer, setMapContainer] = useState(false);
  const [callContainer, setCallContainer] = useState(false);

  return (
    <section className={cn('Delivery',{active: props.Delivery})} id="Delivery">
        <div className="logo">
            <h1>Доставка</h1>
        </div>
        <div className="gallery" onClick={()=> setCallContainer(false)}>
        <Carousel 
            width={'100%'} 
            centerSlidePercentage={w} 
            centerMode={true} 
            infiniteLoop={true}
            autoPlay={false}
            showArrows={false}
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
        
        <button className="callButton" onClick={()=> setCallContainer(!callContainer)}>Заказать</button>

        <section className={cn("callContainer",{'callContainer-active':callContainer})} onClick={()=> setCallContainer(!callContainer)}>
          <div className="linksContainer">
            <ul>
              <a href="https://eda.yandex/restaurant/Sezoni"><li className='links-Ya' aria-label="Яндекс Еда"></li></a>
              <a href="https://beta.delivery-club.ru/srv/Sezony_rnd"><li className='links-Delivery' aria-label="Delivery Club"></li></a>
              <a href="tel:207-17-70">
                <li className='links-Seasons' aria-label="Позвонить и заказать самому">
                  <div className="Seasons-sale">+10% скидка на вынос</div>
                </li>
              </a>
            </ul>
          </div>
        </section>


        {/* <button className="mapButton" onClick={()=>{setMapContainer(!mapContainer)}}>
          <img src={map} alt='Карта доставки'></img><br/>
          <label>Карта доставки</label>
        </button> */}

        {/* <section className={cn("mapContainer",{'mapContainer-active':mapContainer})}>
          <div className="mapContainer__back" onClick={()=>{setMapContainer(!mapContainer)}}></div>
          <iframe src="https://yandex.ru/map-widget/v1/-/CCcMVOJx"  frameborder="1" allowfullscreen="true" title="frame"></iframe>
          <h3 onClick={()=>{setMapContainer(!mapContainer)}}>          
            В пределах красной зоны - 200р. <br/>
            В пределах зеленой зоны - 300р. 
          </h3>
        </section> */}
    </section>
  );
}

export default Delivery;
