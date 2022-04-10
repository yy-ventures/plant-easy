import React, { Component } from 'react'
import Slider from "react-slick";

import logo1 from '../../assets/logo/New_Age_Logo.png'
import logoDailystar from '../../assets/images/featured-in-logo/daily-star.png'
import logoJamuna from '../../assets/images/featured-in-logo/jamuna.jpg'
import logoYsse from '../../assets/images/featured-in-logo/ysse.png'

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
        slidesToShow: 3,
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
                    <a target='_blank' href="https://www.thedailystar.net/star-youth/news/planting-the-seeds-thought-1980121">
                        <div className="img-container">
                            <img src={logoDailystar} alt="logo" />
                        </div>
                    </a>
                </div>
                <div className='card'>
                    <a target='_blank' href="https://ysseglobal.org/blog/plant-easy-planting-the-seeds-of-thought/">
                        <div className="img-container">
                            <img src={logoYsse} alt="logo" />                            
                        </div>
                    </a>
                </div>
                <div className='card'>
                    <a target='_blank' href="https://youtu.be/Z4gHgc05clg">
                        <div className="img-container">
                            <img src={logoJamuna} alt="logo" />
                        </div>
                    </a>
                </div>
            </Slider>
        </div>
    )
  }
}
