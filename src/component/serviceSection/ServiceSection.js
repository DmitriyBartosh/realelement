import React from 'react'
import { Link } from 'react-router-dom'
import './ServiceSection.scss'

import arrow from '../../assets/icon/arrow.svg'
import arrowBlue from '../../assets/icon/rightBlue.svg'
import logo from '../../assets/logo/white.svg'
import cinnabon from '../../assets/content/promotion/1.jpg'
import model from '../../assets/content/model/4.jpg'

function ServiceSection() {
  return (
    <section className="service">

      <div className="serviceBlock mainBack">
        <img src={logo} alt="Логотип RealElement" className="logo"/>
        <h2>О нас</h2>
        <p>
        Более 20 лет стажа<br/>
        Высокие технологичные<br/>
        Современное оборудование
        </p>
      </div>

      <div className="serviceBlock imgBack">
        <img src={cinnabon} alt="Вывеска синнабон" className="cinnabon"/>
      </div>

      <Link to="/promotion" className="serviceBlock blackBack">
        <h2>Наружная реклама</h2>
        <p>
          Информационные стенды<br/>
          Вывески<br/>
          Световые короба
        </p>
        <p className="detail">Подробнее<img src={arrow} alt="arrow"/></p>
      </Link>

      <Link to="/model" className="serviceBlock whiteBack">
        <h2>Макет и муляжи</h2>
        <p>
          Архитектурные макеты, муляжи<br/>
          Сувенирная продукция
        </p>
        <p className="detail blue">Подробнее<img src={arrowBlue} alt="arrow blue"/></p>
      </Link>

      <Link to="/machine" className="serviceBlock blackBack">
        <h2>ЧПУ станок</h2>
        <p>
          3D и 2D обработка<br/>
          (вырезка любых узоров)<br/>
          Раскрой листовых материалов<br/>
          и любых пород дерева
        </p>
        <p className="detail">Подробнее<img src={arrow} alt="arrow"/></p>
      </Link>

      <Link to="/design" className="serviceBlock whiteBack">
        <h2>Дизайн и полиграфия</h2>
        <p>
          Дизайн баннеров<br/>
          Дизайн визиток и флаеров<br/>
          Логотип и фирменный стиль
        </p>
        <p className="detail blue">Подробнее<img src={arrowBlue} alt="arrow blue"/></p>
      </Link>

      <Link to="/interior" className="serviceBlock blackBack">
        <h2>Мебель и декор для интерьера</h2>
        <p>
          Параметрика<br/>
          Лофт<br/>
          Интерьеры, музеи, выставки, презентации
        </p>
        <p className="detail">Подробнее<img src={arrow} alt="arrow"/></p>
      </Link>

      <div className="serviceBlock imgBack">
        <img src={model} alt="Вывеска синнабон" className="model"/>
      </div>

    </section>
  )
}

export default ServiceSection
