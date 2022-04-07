import React from 'react'

import './blog-card.style.scss'

export default function BlogCard({image, text, href}) {
  return (
    <div className='blog'>
        <div className="blog__img-container">
            <img src={image} alt="image" />
        </div>
        <p className="blog__text">{text}</p>
        {/* <Button text='Read More'/> */}
        <a target="_blank" href={href}>Read More</a>
    </div>
  )
}
