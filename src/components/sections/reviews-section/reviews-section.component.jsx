import React, { Component } from 'react'
import Slider from "react-slick";

// COMPONENT
import ReviewerCard from '../../reviewer-card/reviewer-card.component';

// IMAGE
import reviewImage from '../../../assets/images/review-image.png';

import './reviews-section.style.scss';
import '../../../sass/typography.scss';

// slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class ReviewsSection extends Component {
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
        <div className='reviews-section'>
            <h2 className='pb-6'>Customer Reviews</h2>
            <Slider {...settings}>
                <div className='card'>
                    <ReviewerCard 
                        image={reviewImage}
                        name='Inshirah Ali'
                        comment="​I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
                    />
                </div>
                <div className='card'>
                    <ReviewerCard 
                        image={reviewImage}
                        name='Inshirah Ali'
                        comment="​I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
                    />
                </div>
                <div className='card'>
                    <ReviewerCard 
                        image={reviewImage}
                        name='Inshirah Ali'
                        comment="​I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
                    />
                </div>
                <div className='card'>
                    <ReviewerCard 
                        image={reviewImage}
                        name='Inshirah Ali'
                        comment="​I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
                    />
                </div>
                <div className='card'>
                    <ReviewerCard 
                        image={reviewImage}
                        name='Inshirah Ali'
                        comment="​I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
                    />
                </div>
            </Slider>
        </div>
    )
  }
}
