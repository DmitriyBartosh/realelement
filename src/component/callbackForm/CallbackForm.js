import React from 'react'
import './CallbackForm.scss'

import arrow from '../../assets/icon/rightBlue.svg'

function CallbackForm() {
  return (
    <div className="callbackForm">
      <form method="POST">
        <div className="formInput">
          <div className="formGroup">
            <label htmlFor="name"></label>
            <input type="text" placeholder="Введите имя" name="name" required></input>
          </div>
          <div className="formGroup">
            <label htmlFor="phone"></label>
            <input type="text" placeholder="Введите телефон" name="phone" required></input>
          </div>
          <div className="formGroup">
            <label htmlFor="message"></label>
            <textarea placeholder="Ваш вопрос" name="message" maxLength="200" rows="1" wrap="off"></textarea>
          </div>
        </div>

        <button type="submit" className="submitButton">Отправить<img src={arrow} alt="right arrow"/></button>
      </form>
    </div>
  )
}

export default CallbackForm
