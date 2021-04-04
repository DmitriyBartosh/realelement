import React from 'react'
import './Contact.scss'

import whatsapp from '../../assets/social/whatsapp.svg'
import telegram from '../../assets/social/telegram.svg'
import instagram from '../../assets/social/instagram.svg'

function Contact() {
  return (
    <div className="links">
      <div className="contact">
        <h3>Наши контакты:</h3>
        <a href="tel:+79538533877" className="phone">+7 (953) 853 38-77</a>
        <a href="mailto:realpeople24@yandex.ru" className="mail">realpeople24@yandex.ru</a>
      </div>
      <div className="social">
        <a href="https://www.instagram.com/realelement24/" target="_blank" rel="noreferrer">
          <img src={instagram} alt="Логотип инстаграм"/>
        </a>
        <a href="https://tlgg.ru/9538533877" target="_blank" rel="noreferrer">
          <img src={telegram} alt="Логотип телеграм"/>
        </a>
        <a href="https://wa.me/+79538533877" target="_blank" rel="noreferrer">
          <img src={whatsapp} alt="Логотип ватсап"/>
        </a>
      </div>
    </div>
  )
}

export default Contact
