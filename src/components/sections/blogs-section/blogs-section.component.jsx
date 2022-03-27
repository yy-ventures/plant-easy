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
                    <BlogCard image={blogImage1} text="​I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."/>
                </div>
                <div className='card'>
                    <BlogCard image={blogImage2} text="​I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."/>
                </div>
                <div className='card'>
                    <BlogCard image={blogImage3} text="​I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."/>
                </div>
                <div className='card'>
                    <BlogCard image={blogImage1} text="​I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."/>
                </div>
                <div className='card'>
                    <BlogCard image={blogImage2} text="​I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."/>
                </div>
            </Slider>
        </div>
    )
  }
}
