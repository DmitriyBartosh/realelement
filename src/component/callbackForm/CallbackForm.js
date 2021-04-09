import React, {useState} from 'react'
import axios from 'axios'
import './CallbackForm.scss'

import arrow from '../../assets/icon/rightBlue.svg'

function CallbackForm(props) {
  const url = '/api/telegram.php'
  const [data, setData] = useState({
    name: "",
    phone: "",
    message: ""
  })

  function submit(e){
    e.preventDefault();
    axios.post(url, {
      'user_name': data.name,
      'user_phone': data.phone,
      'user_message': data.message
    })
    .then(function () {
      setData({
        name: "",
        phone: "",
        message: ""
     })
      alert('Спасибо за заявку! Мы скоро с Вами свяжемся.')
    });
  }

  function handle(e){
    const newData = {...data}
    newData[e.target.id] = e.target.value
    setData(newData)
  }

  return (
    <div className="callbackForm">
      <form onSubmit={(e)=>submit(e)}>
        <div className="formInput">
          <div className="formGroup">
            <label htmlFor="name"></label>
            <input onChange={(e)=>handle(e)} value={data.name} id="name" type="text" placeholder="Имя" name="name" required></input>
          </div>
          <div className="formGroup">
            <label htmlFor="phone"></label>
            <input onChange={(e)=>handle(e)} value={data.phone} id="phone" type="tel" placeholder="Телефон" name="phone" required></input>
          </div>
          <div className="formGroup">
            <label htmlFor="message"></label>
            <textarea onChange={(e)=>handle(e)} value={data.message} id="message" placeholder={props.message} name="message" maxLength="200" rows="1" wrap="off"></textarea>
          </div>
        </div>

        <button type="submit" className="submitButton">Отправить<img src={arrow} alt="right arrow"/></button>
      </form>
    </div>
  )
}

export default CallbackForm
