import React from 'react';
import './Interior.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import cn from 'classnames'

import img from './../img/interior/IMG_1175.jpg';
import img1 from './../img/interior/IMG_1176.jpg';
import img2 from './../img/interior/IMG_1193.jpg';
import img3 from './../img/interior/IMG_1195.jpg';
import img4 from './../img/interior/IMG_1214.jpg';
import img5 from './../img/interior/IMG_1215.jpg';
import img6 from './../img/interior/IMG_1221.jpg';
import img7 from './../img/interior/IMG_1224.jpg';
import img8 from './../img/interior/IMG_1225.jpg';
import img9 from './../img/interior/IMG_1230.jpg';
import img10 from './../img/interior/IMG_1245.jpg';
import img11 from './../img/interior/IMG_1246.jpg';
import img12 from './../img/interior/IMG_1260.jpg';

const arr =  [  img, img1, img2, img3, img4, img5, img6, img7,img8, img9,
  img10, img11, img12]
var i = -1;
var items = arr.map(()=> {
    i+=1;
    return (
        <div className="pad">
            <img src={arr[i]} alt="Фотография интерьреа"/>
        </div>
    )
  });
  var w = 33.4;
  if (window.innerWidth > 500){
    w=33.4;
  }
  else{
    w=90;
  }
function Interior(props) {
  return (
    <section className={cn('Interior',{active: props.interior})} id="Interior">
        <div className="logo">
            <h1>ИНТЕРЬЕР</h1>
        </div>
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
            stopOnHover={false}
            transitionTime={500}
            swipeable={true}

        >
            {items}
        </Carousel>
        </div>
    </section>
  );
}

export default Interior;
