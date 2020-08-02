import React from 'react';
import './Contacts.scss';

import cn from 'classnames'

import inst from './../img/instagram.png'
import fb from './../img/facebook-logo.png'
import email from './../img/close-envelope.png'

function Contacts(props) {
  return (
    <section className={cn('Contacts',{active: props.Contacts})} id="Contacts">
        <div className="logo">
            <h1>Контакты</h1>
        </div>
        <div className="Contacts__positions">
          <a href='https://facebook.com/seasonspizzarostov'>
            <img src={fb} alt=""/><br/>
            <label>@seasonspizzarostov</label>
          </a>
          <a href='https://www.instagram.com/seasonspizzarostov/'>
            <img src={inst} alt=""/><br/>
            <label>@seasonspizzarostov</label>
          </a>
          <a href='mailto:seasonspizza@mail.ru'>
            <img src={email} alt=""/><br/>
            <label>seasonspizza@mail.ru</label>
          </a>
        </div>
    </section>
  );
}

export default Contacts;
