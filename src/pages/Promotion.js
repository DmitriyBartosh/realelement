import React from 'react'
import Header from '../component/header/Header'
import Details from '../component/details/Details'

import img1 from '../assets/content/promotion/1.jpg'
import img2 from '../assets/content/promotion/3.jpg'
import img3 from '../assets/content/promotion/4.jpg'
import img4 from '../assets/content/promotion/2.jpg'

function Promotion() {
  return (
    <div className="serviceDetail">
      <Header />
      <Details 
        title="Наружная реклама"
        desc={
        <>
        <h4>Информационные стенды<br/>Вывески<br/>Световые короба</h4>
        <p>Вывеска по вашему бюджету<br/>От искизов проекта до монтажа<br/>Бесплатный выезд специалиста по Красноярску</p>
        </>
        }
        imgTitle={img1}
        AltTitle="Вывеска синабон"
        imgRight1={img2}
        altRight1="Вывеска Кроха плюс"
        imgRight2={img3}
        altRight2="Вывеска AYTACH"
        imgRight3={img4}
        altRight3="Вывеска Evolvers"
      />
    </div>
  )
}

export default Promotion
