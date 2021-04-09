import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import logo from '../../assets/logo/blue.svg'

import whatsapp from '../../assets/social/whatsapp.svg'
import telegram from '../../assets/social/telegram.svg'
import instagram from '../../assets/social/instagram.svg'

function Header() {
  return (
    <div className="header">
      <div className="headerTop">
        <Link to="/" className="logo">
          <img src={logo} alt="логотип RealElement"/>
        </Link>
        <a href="tel:+79504184299" className="phone">+7 (950) 418 42-99</a>
      </div>

      <div className="headerBottom">
        <a href="https://www.instagram.com/realelement24/" target="_blank" rel="noreferrer">
          <img src={instagram} alt="Логотип инстаграм"/>
        </a>
        <a href="https://tlgg.ru/9504184299" target="_blank" rel="noreferrer">
          <img src={telegram} alt="Логотип телеграм"/>
        </a>
        <a href="https://wa.me/+79504184299" target="_blank" rel="noreferrer">
          <img src={whatsapp} alt="Логотип ватсап"/>
        </a>
      </div>
    </div>
  )
}

export default Header
