import React from 'react'
import './Details.scss'

function Details(props) {
  return (
    <div className="detailContainer">
        <div className="title">
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
  )
}

export default Details
