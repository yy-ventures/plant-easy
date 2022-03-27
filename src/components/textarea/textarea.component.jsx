import React from 'react'

import './textarea.style.scss';

export default function Textarea({placeholder}) {
  return (
    <textarea className='textarea' rows='5' placeholder={placeholder}></textarea>
  )
}
