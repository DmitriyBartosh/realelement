import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../component/header/Header'
import Details from '../component/details/Details'

import img1 from '../assets/content/interior/1.jpg'
import img2 from '../assets/content/interior/3.jpg'
import img3 from '../assets/content/interior/4.jpg'
import img4 from '../assets/content/interior/2.jpg'

const images = [
  {
    url: img1,
    alt: 'Стул на чпу'
  },
  {
    url: img2,
    alt: 'Иньерьер'
  },
  {
    url: img3,
    alt: 'Светильник на чпу'
  },
  {
    url: img4,
    alt: 'Интерьер на чпу'
  },
]

function Interior() {
  const { pathhame } = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  }, [pathhame])

  return (
    <div className="serviceDetail">
      <Header />
      <Details 
        title="Мебель и декор для интерьера"
        callbackHeader="Заказать декор для интерьера"
        desc={
        <p>Параметрика<br/>Лофт<br/>Проектирование и реализация интерьеров музеев, выставок</p>
        }
        images={images}
      />
    </div>
  )
}

export default Interior
