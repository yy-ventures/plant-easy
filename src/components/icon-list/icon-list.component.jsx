import React from 'react'

import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

import './icon-list.style.scss';

export default function IconList({withBackground}) {
  return (
    <div className="icon-container">
        <a className={withBackground ? 'circle-icon' : 'link'} target="_blank" href="https://www.facebook.com/planteasybangladesh"><FaFacebookF/></a>
        <a className={withBackground ? 'circle-icon' : 'link'} target="_blank" href="https://www.instagram.com/plant.easy.bd/"><FaInstagram/></a>
        <a className={withBackground ? 'circle-icon' : 'link'} target="_blank" href="https://www.youtube.com/channel/UC_2u8fhhtXMDsla2-S-kp2A"><FaYoutube/></a>
        <a className={withBackground ? 'circle-icon' : 'link'} target="_blank" href="https://www.tiktok.com/@planteasy"><FaTiktok/></a>
    </div>
  )
}
