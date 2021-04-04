import React from 'react'
import Header from '../component/header/Header'
import Details from '../component/details/Details'

import img1 from '../assets/content/design/4.jpg'
import img2 from '../assets/content/design/1.jpg'
import img3 from '../assets/content/design/2.jpg'
import img4 from '../assets/content/design/3.jpg'

function Design(props) {
  return (
    <section className="serviceDetail">
      <Header />
      <Details 
        title="Дизайн и полиграфия"
        desc={
        <>
        <h4>Дизайн баннеров<br/>Дизайн визиток и флаеров<br/>Логотип и фирменный стиль</h4>
        <p>Индивидуальный дизайн<br/>Уникальные анимации<br/>3D презентация продукта</p>
        </>
        }
        imgTitle={img1}
        AltTitle="I am Studio"
        imgRight1={img2}
        altRight1="excel"
        imgRight2={img3}
        altRight2="print"
        imgRight3={img4}
        altRight3="beer base"
      />
    </section>
  )
}

export default Design
