import React from 'react'

import './button.style.scss';

export default function Button({type, primary, text}) {
  return (
    <button type={type} className={primary ? 'btn btn-primary' : 'btn btn-secondary'}>{text}</button>
  )
}
