import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../component/header/Header'
import Details from '../component/details/Details'

import img1 from '../assets/content/promotion/1.jpg'
import img2 from '../assets/content/promotion/3.jpg'
import img3 from '../assets/content/promotion/4.jpg'
import img4 from '../assets/content/promotion/2.jpg'
import img5 from '../assets/content/promotion/5.JPG'
import img6 from '../assets/content/promotion/6.JPG'
import img7 from '../assets/content/promotion/7.JPG'
import img8 from '../assets/content/promotion/8.JPG'
import img9 from '../assets/content/promotion/9.JPG'
import img10 from '../assets/content/promotion/10.JPG'

const images = [
  {
    url: img1,
    alt: 'Вывеска синабон'
  },
  {
    url: img2,
    alt: 'Вывеска Кроха плюс'
  },
  {
    url: img3,
    alt: 'Вывеска AYTACH'
  },
  {
    url: img4,
    alt: 'Вывеска Evolvers'
  },
  {
    url: img5,
    alt: 'Авто рум'
  },
  {
    url: img6,
    alt: 'Форсаж'
  },
  {
    url: img7,
    alt: 'Coffee in'
  },
  {
    url: img8,
    alt: 'Горная Саланга'
  },
  {
    url: img9,
    alt: 'Суши Wok'
  },
  {
    url: img10,
    alt: 'Eterium'
  },
]

function Promotion() {
  const { pathhame } = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  }, [pathhame])

  return (
    <div className="serviceDetail">
      <Header />
      <Details 
        title="Наружная реклама"
        callbackHeader="Заказать наружную рекламу"
        desc={
        <>
        <h4>Информационные стенды<br/>Вывески<br/>Световые короба</h4>
        <p>Вывеска по вашему бюджету<br/>От эскизов проекта до монтажа<br/>Бесплатный выезд специалиста по Красноярску</p>
        </>
        }
        images={images}
      />
    </div>
  )
}

export default Promotion
