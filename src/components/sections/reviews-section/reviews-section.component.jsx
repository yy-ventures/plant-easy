import React, { Component } from 'react'
import Slider from "react-slick";

// COMPONENT
import ReviewerCard from '../../reviewer-card/reviewer-card.component';

// IMAGE
import clientSumaiya from '../../../assets/images/client-img/sumaiya-alam.jpg';
import clientTashfia from '../../../assets/images/client-img/tashfia-zakir.jpg';

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
                        image={clientSumaiya}
                        name='Sumaiya Alam'
                        comment="They not only answered all my questions with patience prior to ordering but also delivered all the plants on time on a one-day notice. The packaging were secure, and the quality of the plants, as you can see, were great. They were also kind enough to offer a brief instruction explaining how to offer specific light requirements, even explaining how to water the plant correctly. Thank youuu, Plant Easy! 💛"
                    />
                </div>
                <div className='card'>
                    <ReviewerCard 
                        image={clientTashfia}
                        name='Tashfia Zakir'
                        comment="This is my second purchase from Plant Easy and all I can say is that I keep coming back to them because of their service. I loveeee plants but am very bad at taking care of them. But they have always been supportive with every query I have had."
                    />
                </div>                
            </Slider>
        </div>
    )
  }
}
