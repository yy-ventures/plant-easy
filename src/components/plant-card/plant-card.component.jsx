import React from 'react'

import './plant-card.style.scss'

export default function PlantCard({image, text}) {
  return (
    <div className='card'>
        <div className="card__img-container" style={{ backgroundImage: `url(${image})` }}>
        </div>
        <p className='card__text'>{text}</p>
    </div>
  )
}
