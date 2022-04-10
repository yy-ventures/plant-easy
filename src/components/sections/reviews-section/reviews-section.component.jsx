import React, { Component } from 'react'
import Slider from "react-slick";

// COMPONENT
import ReviewerCard from '../../reviewer-card/reviewer-card.component';

// IMAGE
import clientSumaiya from '../../../assets/images/client-img/sumaiya-alam.jpg';
import clientTashfia from '../../../assets/images/client-img/tashfia-zakir.jpg';
import clientDighi from '../../../assets/images/client-img/dighi-tabassum.jpg';
import clientMunzereen from '../../../assets/images/client-img/munzereen-shahid.jpg';
import clientSadafuzzamani from '../../../assets/images/client-img/sadafuzzamani.jpg';

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
                        comment="They not only answered all my questions with patience prior to ordering but also delivered all the plants on time on a one-day notice. The packaging were secure, and the quality of the plants, as you can see, were great. They were also kind enough to offer a brief instruction explaining how to offer specific light requirements, even explaining how to water the plant correctly. Thank youuu, Plant Easy!"
                    />
                </div>
                <div className='card'>
                    <ReviewerCard 
                        image={clientTashfia}
                        name='Tashfia Zakir'
                        comment="This is my second purchase from Plant Easy and all I can say is that I keep coming back to them because of their service. I loveeee plants but am very bad at taking care of them. But they have always been supportive with every query I have had."
                    />
                </div>                
                <div className='card'>
                    <ReviewerCard 
                        image={clientDighi}
                        name='Dighi Tabassum'
                        comment="Amazing service and beautiful plants. The plant was clean and healthy and the terracotta pot was so pretty! Really loved the service, cooperative and patient, delivered on the day I asked. They also added wrapping and gift note free of charge for Valentines day, how sweet is that!"
                    />
                </div>                
                <div className='card'>
                    <ReviewerCard 
                        image={clientMunzereen}
                        name='Munzereen Shahid'
                        comment="I recently ordered a Portulaca and a Juniper. My Portulaca has bloomed and given very beautiful yellow flowers too ❤ Thank you for being amazing, Plant Easy ❤ Looking forward to ordering more beauties in the future!"
                    />
                </div>                
                <div className='card'>
                    <ReviewerCard 
                        image={clientSadafuzzamani}
                        name='Sadafuzzamani'
                        comment="Absolutely loved the plants I received from Plant Easy. They’re extremely organized (you’ll be surprised, they made a PPT presentation showcasing all the plants)! From customer management to product delivery, I was awe struck by their solemnity.
                        Can’t wait to make a tiny forest in my balcony!"
                    />
                </div>              
            </Slider>
        </div>
    )
  }
}
