import React, { Component } from 'react'
import Slider from "react-slick";

// COMPONENT
import BlogCard from '../../blog-card/blog-card.component';

// IMAGE
import blogImage1 from '../../../assets/images/blog-1.png'
import blogImage2 from '../../../assets/images/blog-2.png'
import blogImage3 from '../../../assets/images/blog-3.png'

import './blogs-section.style.scss';
import '../../../sass/typography.scss';

// slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class BlogsSection extends Component {
  render() {

    var settings = {
      dots: false,
      arrows:true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
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
        <div className='blogs-section'>
            <h2 className='pb-6'>Blogs</h2>
            <Slider {...settings}>
                <div className='card'>
                    <BlogCard image={blogImage1} text="​We started planting 25 years ago without all these resources on the internet. 40% of what we did was intuition, 30% was luck, and ..." href="https://plant-easy-bd.blogspot.com/2022/04/why-planting-workshops.html"/>
                </div>
                <div className='card'>
                    <BlogCard image={blogImage2} text="Planting can be scary, there’s no lying there. However, given how Dhaka air is increasingly becoming unbreathable, we  have to take ..." href="https://plant-easy-bd.blogspot.com/2022/04/plants-for-beginners.html"/>
                </div>
                <div className='card'>
                    <BlogCard image={blogImage3} text="​Watering plants can be tricky. Too much or too little can be harmful for the  plant. However, we never exactly know how much is best ..." href="https://plant-easy-bd.blogspot.com/2022/04/how-to-water-plants.html"/>
                </div>
                {/* <div className='card'>
                    <BlogCard image={blogImage1} text="​I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."/>
                </div>
                <div className='card'>
                    <BlogCard image={blogImage2} text="​I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."/>
                </div> */}
            </Slider>
        </div>
    )
  }
}
