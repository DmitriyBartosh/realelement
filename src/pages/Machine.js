import React from 'react'
import Header from '../component/header/Header'
import Details from '../component/details/Details'

import img1 from '../assets/content/machine/1.jpg'
import img2 from '../assets/content/machine/3.jpg'
import img3 from '../assets/content/machine/2.jpg'
import img4 from '../assets/content/machine/4.jpg'

function Machine() {
  return (
    <div className="serviceDetail">
      <Header />
      <Details 
        title="ЧПУ станок"
        desc={
        <p>3D и 2D обработка (вырезка любых узоров)<br/>Раскрой листовых материалов и любых пород дерева</p>
        }
        imgTitle={img1}
        AltTitle="Вывеска Love"
        imgRight1={img2}
        altRight1="Раскрой листовых материалов"
        imgRight2={img3}
        altRight2="Вырезка на дереве"
        imgRight3={img4}
        altRight3="Узор на чпу станке"
      />
    </div>
  )
}

export default Machine
