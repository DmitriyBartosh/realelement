import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../component/header/Header'

import Details from '../component/details/Details'

import img1 from '../assets/content/design/4.jpg'
import img2 from '../assets/content/design/1.jpg'
import img3 from '../assets/content/design/2.jpg'
import img4 from '../assets/content/design/3.jpg'
import img5 from '../assets/content/design/5.jpg'
import img6 from '../assets/content/design/6.jpg'
import img7 from '../assets/content/design/7.jpg'
import img8 from '../assets/content/design/8.jpg'

const images = [
  {
    url: img1,
    alt: 'I am Studio'
  },
  {
    url: img2,
    alt: 'excel'
  },
  {
    url: img3,
    alt: 'print'
  },
  {
    url: img4,
    alt: 'beer base'
  },
  {
    url: img5,
    alt: 'Type me'
  },
  {
    url: img6,
    alt: 'Atlas'
  },
  {
    url: img7,
    alt: 'МузЭйшен'
  },
  {
    url: img8,
    alt: 'Меню'
  },
]

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
        images={images}
      />
    </section>
  )
}

export default Design
