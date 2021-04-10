import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../component/header/Header'
import Details from '../component/details/Details'

import img1 from '../assets/content/model/1.jpg'
import img2 from '../assets/content/model/3.jpg'
import img3 from '../assets/content/model/4.jpg'
import img4 from '../assets/content/model/2.jpg'

const images = [
  {
    url: img1,
    alt: 'Макет полезных ископаемых красноярского края'
  },
  {
    url: img2,
    alt: 'Макет жилого комплекса'
  },
  {
    url: img3,
    alt: 'Макет авто-центра'
  },
  {
    url: img4,
    alt: 'Макет завода'
  },
]

function Model() {
  const { pathhame } = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  }, [pathhame])

  return (
    <div className="serviceDetail">
      <Header />
      <Details 
        title="Макеты и муляжи"
        callbackHeader="Заказать макет и сувенирную продукцию"
        desc={
        <>
        <h4>Архитектурные макеты, муляжи<br/>Сувенирная продукция</h4>
        <p>Изготовление любой сложности архитектурных, рельефных макетов<br/>Оцифровка объектов культурных наследий в 3D</p>
        </>
        }
        images={images}
      />
    </div>
  )
}

export default Model
