import React from 'react'

import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

import './icon-list.style.scss';

export default function IconList({withBackground}) {
  return (
    <div className="icon-container">
        <a className={withBackground ? 'circle-icon' : 'link'} href="#"><FaFacebookF/></a>
        <a className={withBackground ? 'circle-icon' : 'link'} href="#"><FaInstagram/></a>
        <a className={withBackground ? 'circle-icon' : 'link'} href="#"><FaYoutube/></a>
        <a className={withBackground ? 'circle-icon' : 'link'} href="#"><FaTiktok/></a>
    </div>
  )
}
