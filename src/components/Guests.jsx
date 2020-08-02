import React from 'react';
import './Guests.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import cn from 'classnames'

import img from './../img/guests/IMG_0009.jpg';
import img1 from './../img/guests/IMG_0011.jpg';
import img2 from './../img/guests/IMG_0018.jpg';
import img3 from './../img/guests/IMG_0020.jpg';
import img4 from './../img/guests/IMG_0022.jpg';
import img5 from './../img/guests/IMG_0024.jpg';
import img6 from './../img/guests/IMG_0026.jpg';
import img7 from './../img/guests/IMG_0027.jpg';
// import img8 from './../img/guests/IMG_0029.jpg';
import img9 from './../img/guests/IMG_0032.jpg';
import img10 from './../img/guests/IMG_0034.jpg';
import img11 from './../img/guests/IMG_0037.jpg';
import img12 from './../img/guests/IMG_0039.jpg';
import img13 from './../img/guests/IMG_0044.jpg';
import img14 from './../img/guests/IMG_0050.jpg';
import img15 from './../img/guests/IMG_0055.jpg';
import img16 from './../img/guests/IMG_0061.jpg';
import img17 from './../img/guests/IMG_0064.jpg';
import img18 from './../img/guests/IMG_0068.jpg';
import img19 from './../img/guests/IMG_0069.jpg';
import img20 from './../img/guests/IMG_0071.jpg';
import img21 from './../img/guests/IMG_0073.jpg';
import img22 from './../img/guests/IMG_0074.jpg';
import img23 from './../img/guests/IMG_0079.jpg';
import img24 from './../img/guests/IMG_0097.jpg';

const arr =  [  img, img1, img2, img3, img4, img5, img6, img7, img9,
                img10, img11, img12, img13, img14, img15, img16, img17, img18,
                img19, img20, img21, img22, img23, img24  ]
var i = -1;
var items = arr.map(()=> {
    i+=1;
    return (
        <div className="pad">
            <img src={arr[i]} alt="Фотография гостей"/>
        </div>
    )
  });

  var w = 60;
  if (window.innerWidth > 500){
    w=60;
  }
  else{
    w=100;
  }
function Guests(props) {
  return (
    <section className={cn('Guests',{active: props.guests})} id="Guests">
        <div className="logo">
            <h1>НАШИ ГОСТИ</h1>
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

export default Guests;
