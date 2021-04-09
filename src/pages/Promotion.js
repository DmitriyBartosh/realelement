import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../component/header/Header'
import Details from '../component/details/Details'

import img1 from '../assets/content/promotion/1.jpg'
import img2 from '../assets/content/promotion/3.jpg'
import img3 from '../assets/content/promotion/4.jpg'
import img4 from '../assets/content/promotion/2.jpg'

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
        <p>Вывеска по вашему бюджету<br/>От искизов проекта до монтажа<br/>Бесплатный выезд специалиста по Красноярску</p>
        </>
        }
        img1={img1}
        altImg1="Вывеска синабон"
        img2={img2}
        altImg2="Вывеска Кроха плюс"
        img3={img3}
        altImg3="Вывеска AYTACH"
        img4={img4}
        altImg4="Вывеска Evolvers"
      />
    </div>
  )
}

export default Promotion
