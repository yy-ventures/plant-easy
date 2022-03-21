import React from 'react'

import './button.style.scss';

export default function Button({primary, text}) {
  return (
    <button className={primary ? 'btn btn-primary' : 'btn btn-secondary'}>{text}</button>
  )
}
