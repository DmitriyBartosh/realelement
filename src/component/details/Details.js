import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Media from 'react-media';
import ModalForm from '../modalForm/ModalForm'
import './Details.scss'
import { buttonDetail, photoDetail, item, photoTitle, photoOne, photoTwo, photoThree, Header, Description } from './animation'

import arrow from '../../assets/icon/arrow.svg'

function Details(props) {
  const [showModal, setShowModal] = useState(false);

  const images = props.images;
  const listPhoto = images.map((image) =>
    <motion.div 
      variants={item} 
      transition={item.transition} 
      className="detailImage"
    >
      <img src={image.url} alt={image.alt}/>
    </motion.div>
  );

  return (
    <>
    <ModalForm 
    messageForm="Опишите заказ" 
    headerForm={props.callbackHeader}
    showModal={showModal}
    setShowModal={setShowModal}
    />

    <Media query="(min-width: 600px)">
      {matches => {
        return matches ? 
        <div className="detailContainer">
          <div className="detailTitle">
            <motion.h2
              variants={Header}
              animate="in"
              initial="out"
              transition={Header.transition}
            >{props.title}</motion.h2>
            <div className="detailImage1">
              <motion.img 
              variants={photoTitle}
              animate="in"
              initial="out"
              transition={photoTitle.transition}
              src={images[0].url} 
              alt={images[0].alt}/>
            </div>
          </div>
          <motion.div 
            variants={Description}
            animate="in"
            initial="out"
            transition={Description.transition}
            className="description"
          >
            {props.desc}
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setShowModal(true)} className="callbackButton">Заказать</motion.button>
          </motion.div>
          <div className="rightImage">
            <div className="detailImage2">
              <motion.img 
              variants={photoOne}
              animate="in"
              initial="out"
              transition={photoOne.transition}
              src={images[1].url} 
              alt={images[1].alt}
              />
            </div>
            <div className="detailImage3">
              <motion.img 
              variants={photoTwo}
              animate="in"
              initial="out"
              transition={photoTwo.transition}
              src={images[2].url} 
              alt={images[2].alt}
              />
            </div>
            <div className="detailImage4">
              <motion.img 
              variants={photoThree}
              animate="in"
              initial="out"
              transition={photoThree.transition}
              src={images[3].url}
              alt={images[3].alt}
              />
            </div>
          </div>
        </div>
        :
        <div className="detailMobContainer">
          <motion.div 
            variants={buttonDetail}
            animate="in"
            initial="out"
            exit="out"
            transition={buttonDetail.transition}
            onClick={() => setShowModal(true)} 
            className="detailTitle">
            <h2>{props.title}</h2>
            {props.desc}
            <p className="callbackButton">Заказать<img src={arrow} alt="arrow"/></p>
          </motion.div>
          <motion.div 
            variants={photoDetail}
            animate="in"
            initial="out"
            exit="in"
            className="rightImage"
          >

          {listPhoto}

          </motion.div>
     
        </div>
      }}
    </Media>
    </>
  )
}

export default Details
