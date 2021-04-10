import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../component/header/Header'
import Details from '../component/details/Details'

import img1 from '../assets/content/machine/1.jpg'
import img2 from '../assets/content/machine/3.jpg'
import img3 from '../assets/content/machine/2.jpg'
import img4 from '../assets/content/machine/4.jpg'

const images = [
  {
    url: img1,
    alt: 'Вывеска Love'
  },
  {
    url: img2,
    alt: 'Раскрой листовых материалов'
  },
  {
    url: img3,
    alt: 'Вырезка на дереве'
  },
  {
    url: img4,
    alt: 'Узор на чпу станке'
  },
]

function Machine() {
  const { pathhame } = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  }, [pathhame])

  return (
    <div className="serviceDetail">
      <Header />
      <Details 
        title="ЧПУ станок"
        callbackHeader="Заказать 3D обработку"
        desc={
        <p>3D и 2D обработка (вырезка любых узоров)<br/>Раскрой листовых материалов и любых пород дерева</p>
        }
        images={images}
      />
    </div>
  )
}

export default Machine
