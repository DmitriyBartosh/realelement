import React, { useState } from 'react'
import {motion} from 'framer-motion'
import ModalForm from '../modalForm/ModalForm'
import './Title.scss'


function Title() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <ModalForm 
    messageForm="Опишите заказ" 
    headerForm="Оставьте заявку"
    showModal={showModal}
    setShowModal={setShowModal}
    />
    <div className="title">
      <h1 className="titleBorder">Наружная реклама</h1>
      <h1 className="titleBlue">Интерьер</h1>
      <h1>Архитектурные макеты</h1>
      <div className="titleFooter">
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setShowModal(true)} className="titleFooter__callback">Заказать</motion.button>
        <h1 className="titleBlue ">ЧПУ станок, дизайн</h1>
      </div>
    </div>
    </>
  )
}

export default Title