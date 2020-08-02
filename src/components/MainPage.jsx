import React, {useState} from 'react';
import './MainPage.scss';
import Main from './Main.jsx'
import About from './About'
import Guests from './Guests'
import Interior from './Interior'
import Geo from './Geo'

function MainPage() {
  const [about, setAbout] = useState(false);
  const [guests, setGuests] = useState(false);
  const [interior, setInterior] = useState(false);
window.onscroll = () => {
  const visible = (tag) => {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(document.getElementById(tag) && (window.innerWidth >= 500)){
        var toElement = document.getElementById(tag).getBoundingClientRect().top + document.getElementById(tag).offsetTop;
        if (scrolled >= toElement/1.6){
            switch(tag) {
              case 'about':
                setAbout(true);
                break;
              case 'Guests':
                setGuests(true);
                break;
              case 'Interior':
                setInterior(true);
                break;
              // case 'contact':
              //   setContact(true);
              //   break;
              default:
                // alert( 'Я таких значений не знаю' );
            }
        }
    }
  }
  // visible('contact');
  // visible('where');
  visible('Interior');
  visible('Guests');
  visible('about');
}
  return (
    <div className="MainPage">
      <Main/>
      <About about={about} class={'About-comp'}/>
      <Guests guests={guests}/>
      <Interior interior={interior} />
      <Geo/>
    </div>
  );
}

export default MainPage;
