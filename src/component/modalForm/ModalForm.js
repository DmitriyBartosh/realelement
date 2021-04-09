import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './ModalForm.scss'
import {modalContainer, modalButton, modalHeader, modalForm} from './animation'
import Form from '../callbackForm/CallbackForm'

import close from '../../assets/icon/close.svg'

function ModalForm({ messageForm, headerForm, showModal, setShowModal} ) {
  return (
  <AnimatePresence exitBeforeEnter>
    { showModal && (
      <motion.div 
      className="modalContainer"
      variants={modalContainer}
      initial="out"
      animate="in"
      exit="out"
      transition={modalContainer.transition}
      >
        <motion.button 
          className="closeForm" 
          variants={modalButton}
          initial="out"
          animate="in"
          transition={modalButton.transition}
          onClick={() => setShowModal(false)}
        >
          <img src={close} alt="close"/>
        </motion.button>
        <motion.h2 
          className="formHeader"
          variants={modalHeader}
          initial="out"
          animate="in"
          transition={modalHeader.transition}
        >
          {headerForm}
        </motion.h2>

      <motion.div
        variants={modalForm}
        initial="out"
        animate="in"
        transition={modalForm.transition}
      >
        <Form message={messageForm}/>
      </motion.div>
    </motion.div>
    )}
  </AnimatePresence>
  )
}

export default ModalForm
