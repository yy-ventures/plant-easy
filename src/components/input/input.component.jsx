import React from 'react'

import './input.style.scss';

export default function Input({placeholder, type}) {
  return (
    <input className='input' type={type} placeholder={placeholder}/>
  )
}
