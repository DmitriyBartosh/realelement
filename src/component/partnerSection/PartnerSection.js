import React from 'react'
import './PartnerSection.scss'

import partner1 from '../../assets/partners/Sbarri.png'
import partner2 from '../../assets/partners/southcoast.png'
import partner3 from '../../assets/partners/airport.png'
import partner4 from '../../assets/partners/cinnabon.png'
import partner5 from '../../assets/partners/SFU.svg'
import partner6 from '../../assets/partners/dorc.png'
import partner7 from '../../assets/partners/sushiwok.png'
import partner8 from '../../assets/partners/partner-sibcem.png'
import partner9 from '../../assets/partners/toyota.png'

function PartnerSection() {
  return (
    <section className="partners">
      <h2 className="partnersTitle">Наши клиенты</h2>
      <div className="container blockPartners">
        <img src={partner1} alt="Логотип sbarro"/>
        <img src={partner2} alt="Логотип Южный берег"/>
        <img src={partner3} alt="Логотип Аэропорт Красноярск"/>
        <img src={partner4} alt="Логотип Синнабон"/>
        <img src={partner5} alt="Логотип СФУ"/>
        <img src={partner6} alt="Логотип Дорц"/>
        <img src={partner7} alt="Логотип СушиWok"/>
        <img src={partner8} alt="Логотип Сибирский цемент"/>
        <img src={partner9} alt="Логотип Toyota"/>
      </div>
    </section>
  )
}

export default PartnerSection
