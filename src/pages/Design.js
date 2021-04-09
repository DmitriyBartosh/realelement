import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../component/header/Header'

import Details from '../component/details/Details'

import img1 from '../assets/content/design/4.jpg'
import img2 from '../assets/content/design/1.jpg'
import img3 from '../assets/content/design/2.jpg'
import img4 from '../assets/content/design/3.jpg'

function Design() {
  const { pathhame } = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  }, [pathhame])

  return (
    <section className="serviceDetail">
      <Header />
      <Details 
        title="Дизайн и полиграфия"
        callbackHeader="Заказать дизайн и полиграфию"
        desc={
        <>
        <h4>Дизайн баннеров<br/>Дизайн визиток и флаеров<br/>Логотип и фирменный стиль</h4>
        <p>Индивидуальный дизайн<br/>Уникальные анимации<br/>3D презентация продукта</p>
        </>
        }
        img1={img1}
        altImg1="I am Studio"
        img2={img2}
        altImg2="excel"
        img3={img3}
        altImg3="print"
        img4={img4}
        altImg4="beer base"
      />
    </section>
  )
}

export default Design
