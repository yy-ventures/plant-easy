import React from 'react'
import {Link} from 'react-router-dom'

import './footer.style.scss';

export default function Footer() {
  return (
    <div className='footer'>
      <p className='footer__owner'>©2022 by Plant Easy</p>
      <ul className='footer__list'>
        <li className='footer__list--item'>
          <a className='footer__list--link' target='_blank' href="https://www.youtube.com/channel/UC_2u8fhhtXMDsla2-S-kp2A">Find us on YouTube</a>
        </li>
        <li className='footer__list--item'>
          <Link to='/faq' className='footer__list--link'>
            <span>FAQs</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}
