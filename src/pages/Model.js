import React from 'react'
import Header from '../component/header/Header'
import Details from '../component/details/Details'

import img1 from '../assets/content/model/1.jpg'
import img2 from '../assets/content/model/3.jpg'
import img3 from '../assets/content/model/4.jpg'
import img4 from '../assets/content/model/2.jpg'

function Model() {
  return (
    <div className="serviceDetail">
      <Header />
      <Details 
        title="Макеты и муляжи"
        desc={
        <>
        <h4>Архитектурные макеты, муляжи<br/>Сувенирная продукция</h4>
        <p>Изготовление любой сложности архитектурных, рельефных макетов<br/>Оцифровка объектов культурных наследий в 3D</p>
        </>
        }
        imgTitle={img1}
        AltTitle="Макет полезных ископаемых красноярского края"
        imgRight1={img2}
        altRight1="Макет жилого комплекса"
        imgRight2={img3}
        altRight2="Макет авто-центра"
        imgRight3={img4}
        altRight3="Макет завода"
      />
    </div>
  )
}

export default Model
