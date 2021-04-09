import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../component/header/Header'
import Details from '../component/details/Details'

import img1 from '../assets/content/interior/1.jpg'
import img2 from '../assets/content/interior/3.jpg'
import img3 from '../assets/content/interior/4.jpg'
import img4 from '../assets/content/interior/2.jpg'

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
        img1={img1}
        altImg1="Стул на чпу"
        img2={img2}
        altImg2="Иньерьер"
        img3={img3}
        altImg3="Светильник на чпу"
        img4={img4}
        altImg4="Интерьер на чпу"
      />
    </div>
  )
}

export default Interior
