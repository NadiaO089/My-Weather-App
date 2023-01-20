import React from 'react';
import s from './card.module.css';

export default function Card(props) {
  // acá va tu código
  return (
  <div className={s.container}>

    <div className={s.contenedor}><button className={s.button} onClick={props.onClose}>x</button></div>
    <h2 className={s.text}>{props.name}</h2>
    <div className={s.contenedor1}>
      <div>
    <h4>Mín</h4>
    <h6>{props.min}</h6>
      </div>
      <div>
    <h4>Máx</h4>
    <h6>{props.max}</h6>
    </div>
    <div>
    <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt='Weather Icon'/>
    </div>
    </div>
  </div>
)};