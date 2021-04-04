import React from 'react'
import Header from '../component/header/Header'
import Details from '../component/details/Details'

import img1 from '../assets/content/interior/1.jpg'
import img2 from '../assets/content/interior/3.jpg'
import img3 from '../assets/content/interior/4.jpg'
import img4 from '../assets/content/interior/2.jpg'

function Interior() {
  return (
    <div className="serviceDetail">
      <Header />
      <Details 
        title="Мебель и декор для интерьера"
        desc={
        <p>Параметрика<br/>Лофт<br/>Проектирование и реализация интерьеров музеев, выставок</p>
        }
        imgTitle={img1}
        AltTitle="Стул на чпу"
        imgRight1={img2}
        altRight1="Иньерьер"
        imgRight2={img3}
        altRight2="Светильник на чпу"
        imgRight3={img4}
        altRight3="Интерьер на чпу"
      />
    </div>
  )
}

export default Interior
