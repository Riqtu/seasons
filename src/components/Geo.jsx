import React from 'react';
import './Geo.scss';

import cn from 'classnames'

import img from './../img/placeholder.png'

function Geo(props) {
  return (
    <section className={cn('Geo',{active: props.Geo})} id="Geo">
        <div className="Geo__logo">
            <h1>
                НАЙДИ НАС
            </h1>
        </div>
        <div className="Geo__map">
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aed7b1cb8daf1c5918885d6709f6306686d70e503c25b5e316e5896fd38337721&amp;source=constructor" width="100%" height="400" frameborder="0" title="yaMap"></iframe>
        </div>
        <div className="Geo__contact">
            <h3>                   
                Г. Ростов-на-Дону <br/>
                Ул. Пушкинская д. 108 <br/>
                Телефон 8 (863) 207-17-70
            </h3>
        </div>
        <div className="Geo__img">
            <img src={img} alt=""/>
        </div>
        <div className='zStudio'>Created by <a href="https://xzetx.ru">Z-Studio</a></div>
    </section>
  );
}

export default Geo;
