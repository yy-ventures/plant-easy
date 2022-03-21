import React, {useState} from 'react'

import logo from '../../assets/logo/logo.png';
import menuIcon from '../../assets/icon/menu-icon.jpg';

import './header.style.scss';

export default function Header({showSidebar}) {

  console.log(showSidebar)

  return (
    <div className='header'>
        <div className="header__logo-container">
            <img src={logo} alt="plant easy logo" className="header__logo-container--logo" />
        </div>
        <button onClick={showSidebar} className='header__menu-btn'>
          <img className='header__menu-btn--icon' src={menuIcon} alt="menu icon" />
        </button>
    </div>
  )
}
