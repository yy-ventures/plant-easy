import React, { Component } from 'react'
import Slider from "react-slick";

import logo1 from '../../assets/logo/New_Age_Logo.png'

// slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './featured-in.style.scss'

export default class FeaturedIn extends Component {
  render() {

    var settings = {
        dots: false,
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
          {
            breakpoint: 641,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

    return (
        <div className="featured--list">
            <Slider {...settings}>
                <div className='card'>
                    <a href="#">
                        <div className="img-container">
                            <div className="mask"></div>
                            <img src={logo1} alt="logo" />
                        </div>
                    </a>
                </div>
                <div className='card'>
                    <a href="#">
                        <div className="img-container">
                            <div className="mask"></div>
                            <img src={logo1} alt="logo" />                            
                        </div>
                    </a>
                </div>
                <div className='card'>
                    <a href="#">
                        <div className="img-container">
                            <div className="mask"></div>
                            <img src={logo1} alt="logo" />                            
                        </div>
                    </a>
                </div>
                <div className='card'>
                    <a href="#">
                        <div className="img-container">
                            <div className="mask"></div>
                            <img src={logo1} alt="logo" />                            
                        </div>
                    </a>
                </div>
                <div className='card'>
                    <a href="#">
                        <div className="img-container">
                            <div className="mask"></div>
                            <img src={logo1} alt="logo" />                            
                        </div>
                    </a>
                </div>
            </Slider>
        </div>
    )
  }
}
