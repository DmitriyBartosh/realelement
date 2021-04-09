import React, { useState } from 'react'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import Media from 'react-media';
import ModalForm from '../modalForm/ModalForm'
import './Details.scss'
import { buttonDetail, photoDetail, item, photoTitle, photoOne, photoTwo, photoThree, Header, Description } from './animation'

import arrow from '../../assets/icon/arrow.svg'

function Details(props) {
  const [showModal, setShowModal] = useState(false);
  const [Id, setId] = useState(null);

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
              src={props.img1} 
              alt={props.altImg1}/>
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
              src={props.img2} 
              alt={props.altImg2}
              />
            </div>
            <div className="detailImage3">
              <motion.img 
              variants={photoTwo}
              animate="in"
              initial="out"
              transition={photoTwo.transition}
              src={props.img3} 
              alt={props.altImg3}
              />
            </div>
            <div className="detailImage4">
              <motion.img 
              variants={photoThree}
              animate="in"
              initial="out"
              transition={photoThree.transition}
              src={props.img4} 
              alt={props.altImg4}
              />
            </div>
          </div>
        </div>
        :
        <AnimateSharedLayout type="crossfade">
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

            <motion.div
              variants={item}
              transition={item.transition} 
              className="detailImage"
              layoutId={1}
              onClick={() => setId(1)}
            >
              <motion.img src={props.img1} alt={props.altImg1}/>
            </motion.div>

            <motion.div 
              variants={item} 
              transition={item.transition} 
              className="detailImage"
              layoutId={2}
              onClick={() => setId(2)}
              >
              <img src={props.img2} alt={props.altImg2}/>
            </motion.div>

            <motion.div 
              variants={item} 
              transition={item.transition} 
              className="detailImage"
              layoutId={3}
              onClick={() => setId(3)}
            >
              <img src={props.img3} alt={props.altImg3}/>
            </motion.div>

            <motion.div 
              variants={item} 
              transition={item.transition} 
              className="detailImage"
              layoutId={4}
              onClick={() => setId(4)}
            >
              <img src={props.img4} alt={props.altImg4}/>
            </motion.div>

          </motion.div>


          <AnimatePresence>
          {Id === 1 && (
              <motion.div 
                variants={item} 
                transition={item.transition} 
                onClick={() => setId(null)} 
                layoutId={Id} 
                className="photoContainer">
                <motion.img 
                  src={props.img1} 
                  alt={props.altImg1}
                />
                </motion.div>
          )}
          </AnimatePresence>

          <AnimatePresence>
          {Id === 2 && (
              <motion.div 
                variants={item} 
                transition={item.transition} 
                onClick={() => setId(null)} 
                layoutId={Id} 
                className="photoContainer">
                <motion.img 
                  src={props.img2} 
                  alt={props.altImg2}
                />
                </motion.div>
          )}
          </AnimatePresence>

          <AnimatePresence>
          {Id === 3 && (
              <motion.div 
                variants={item} 
                transition={item.transition} 
                onClick={() => setId(null)} 
                layoutId={Id} 
                className="photoContainer">
                <motion.img 
                  src={props.img3} 
                  alt={props.altImg3}
                />
                </motion.div>
          )}
          </AnimatePresence>

          <AnimatePresence>
          {Id === 4 && (
              <motion.div 
                variants={item} 
                transition={item.transition} 
                onClick={() => setId(null)} 
                layoutId={Id} 
                className="photoContainer">
                <motion.img 
                  src={props.img4} 
                  alt={props.altImg4}
                />
                </motion.div>
          )}
          </AnimatePresence>
      
        </div>
        </AnimateSharedLayout>
      }}
    </Media>
    </>
  )
}

export default Details
