import React from 'react'
import './MainSection.scss'

import Header from '../header/Header'
import Title from '../title/Title'

function MainSection() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  
  return (
    <section className="mainSection">
      <Header />
      <Title />
    </section>
  )
}

export default MainSection
