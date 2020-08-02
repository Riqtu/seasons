import React from 'react';
import './Main.scss';

import logo from './../img/pizzbar.png';
function Main() {
  return (
    <div className="Main">
        <div className="Main__img"></div>
        <div className="Main__logo">
            <img src={logo} alt="Pizza & Bar"/>
        </div>
    </div>
  );
}

export default Main;
