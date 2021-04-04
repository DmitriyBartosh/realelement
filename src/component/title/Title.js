import React from 'react'
import './Title.scss'

function Title() {
  return (
    <div className="title">
      <h1 className="titleBorder">Наружная реклама</h1>
      <h1 className="titleBlue">Интерьер,</h1>
      <h1>Архитектурные макеты</h1>
      <div className="titleFooter">
        <p className="titleFooter__callback">Заказать</p>
        <h1 className="titleBlue ">ЧПУ станок, дизайн</h1>
      </div>
    </div>
  )
}

export default Title
