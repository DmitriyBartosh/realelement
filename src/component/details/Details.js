import React from 'react'
import Media from 'react-media';
import './Details.scss'

import arrow from '../../assets/icon/arrow.svg'

function Details(props) {
  return (
    <Media query="(min-width: 600px)">
      {matches => {
        return matches ? 
        <div className="detailContainer">
          <div className="detailTitle">
            <h2>{props.title}</h2>
            <div className="detailImage1">
              <img src={props.imgTitle} alt={props.AltTitle}/>
            </div>
          </div>
          <div className="description">
            {props.desc}
            <p className="callbackButton">Заказать</p>
          </div>
          <div className="rightImage">
            <div className="detailImage2">
              <img src={props.imgRight1} alt={props.altRight1}/>
            </div>
            <div className="detailImage3">
              <img src={props.imgRight2} alt={props.altRight2}/>
            </div>
            <div className="detailImage4">
              <img src={props.imgRight3} alt={props.altRight3}/>
            </div>
          </div>
        </div>
        :
        <div className="detailMobContainer">
          <div className="detailTitle">
            <h2>{props.title}</h2>
            {props.desc}
            <p className="callbackButton">Заказать<img src={arrow} alt="arrow"/></p>
          </div>
          <div className="rightImage">
            <div className="detailImage">
              <img src={props.imgTitle} alt={props.AltTitle}/>
            </div>
            <div className="detailImage">
              <img src={props.imgRight1} alt={props.altRight1}/>
            </div>
            <div className="detailImage">
              <img src={props.imgRight2} alt={props.altRight2}/>
            </div>
            <div className="detailImage">
              <img src={props.imgRight3} alt={props.altRight3}/>
            </div>
          </div>
        </div>
      }}
    </Media>


  )
}

export default Details
