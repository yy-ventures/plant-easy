import React from 'react'

import './footer.style.scss';

export default function Footer() {
  return (
    <div className='footer'>
      <p className='footer__owner'>©2022 by Plant Easy</p>
      <ul className='footer__list'>
        <li className='footer__list--item'>
          <a className='footer__list--link' href="#">Terms & Conditions</a>
        </li>
        <li className='footer__list--item'>
          <a className='footer__list--link' href="#">Shipping & Returns</a>
        </li>
        <li className='footer__list--item'>
          <a className='footer__list--link' href="#">FAQs</a>
        </li>
      </ul>
    </div>
  )
}
