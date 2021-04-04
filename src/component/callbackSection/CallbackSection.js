import React from 'react'
import './CallbackSection.scss'

import CallbackForm from '../callbackForm/CallbackForm'
import Contact from '../contact/Contact'

function CallbackSection() {
  return (
    <section className="footer">
      <div className="footerTitle">
        <h2>
        <span className="borderText">Если у вас</span><span className="black">Остались</span><span className="blue"> вопросы? Задай</span><span className="borderText"> их здесь</span>
        </h2>
        <h2>
        <span className="blue">Если у вас</span><span className="borderText">Остались </span><span className="blue">вопросы? </span><span className="black">Задай их</span><span className="borderText"> здесь</span>
        </h2>
      </div>
      <CallbackForm />
      <Contact />
    </section>
  )
}

export default CallbackSection
