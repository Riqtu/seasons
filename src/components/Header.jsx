import React from 'react'

import './Header.scss'
import { Link } from 'react-router-dom'

import Menu from './Menu'
import logo from './../img/logor.png'
import inst from './../img/instagram.png'
import phone from './../img/phone-call.png'

function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Логотип" />
        </Link>
      </div>
      <div className="links">
        <Link to="/about" className="li">
          О нас
        </Link>
        <Link to="/delivery" className="li">
          Доставка
        </Link>
        <Link to="/menu" className="li">
          Меню
        </Link>
        <Link to="/contacts" className="li">
          Контакты
        </Link>
      </div>
      <div className="contacts">
        <a href="tel:207-17-70">
          <img src={phone} alt="Звонок" />
        </a>
        <a href="https://www.instagram.com/seasonspizzarostov/">
          <img src={inst} alt="Инстаграм" />
        </a>
      </div>
      <Menu />
    </header>
  )
}

export default Header
