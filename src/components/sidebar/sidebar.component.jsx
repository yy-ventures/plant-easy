import React from 'react'

// COMPONENT
import IconList from '../icon-list/icon-list.component'

// IMAGE
import sidebarImage from '../../assets/images/image-13.png';
import closeMenu from '../../assets/icon/clode-menu-icon.png';

import './sidebar.style.scss'

export default function Sidebar({sidebar, showSidebar}) {
  return (
    <div className="sidebar" style={{right: `${sidebar ? '0' : '100%'}`}}>
        <div className="sidebar__heading-container">
            <div className="img-container">
                <img className='img' src={sidebarImage} alt="image" />            
            </div>
            <h1 className='heading'>Plant Easy</h1>
        </div>
        <div className="sidebar__navigation">
            <ul className="list">
            <li className="list__item">
                <a className='list__item--link' href="#">Home</a>
            </li>
            <li className="list__item">
                <a className='list__item--link' href="#">Shop</a>
            </li>
            <li className="list__item">
                <IconList withBackground/>
            </li>
            <li className="list__item">
                <a className='list__item--link' href="#">Terms & Conditions</a>
            </li>
            <li className="list__item">
                <a className='list__item--link' href="#">Shipping & Returns</a>
            </li>
            <li className="list__item">
                <a className='list__item--link' href="#">FAQs</a>
            </li>
            </ul>
        </div>
        <button onClick={showSidebar} className="sidebar__btn-close">
            <img src={closeMenu} alt="close menu icon" />
        </button>
    </div>
  )
}
