import React from 'react';

// ICON
import { IoStarSharp, IoStarHalfSharp } from "react-icons/io5";

import './reviewer-card.style.scss';

export default function ReviewerCard({image, name, comment}) {
  return (
    <div className="reviewer">
        <div className="img-container">
            <img src={image} alt="image" />
        </div>
        <span className="reviewer__name">{name}</span>
        <p className='reviewer__comment'>{comment}</p>
        <div className="reviewer__rating-star">
            <IoStarSharp/>
            <IoStarSharp/>
            <IoStarSharp/>
            <IoStarSharp/>
            <IoStarSharp/>
        </div>
    </div>
  )
}
