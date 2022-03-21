import React from 'react'

// COMPONENT
import Button from '../button/button.component'

import './blog-card.style.scss'

export default function BlogCard({image, text}) {
  return (
    <div className='blog'>
        <div className="blog__img-container">
            <img src={image} alt="image" />
        </div>
        <p className="blog__text">{text}</p>
        <Button text='Read More'/>
    </div>
  )
}
