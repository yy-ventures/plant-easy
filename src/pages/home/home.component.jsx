<<<<<<< HEAD
import React, {useState, useRef} from 'react';
=======
import React, {useState , useRef} from 'react';
>>>>>>> 048f76500f07ff83f6a8cdd05094d8f10a2d93f4

// IMAGE
import heroImage from '../../assets/images/image-1.png';
import heroImage2 from '../../assets/images/image-2.png';
import plantImage from '../../assets/images/image-3.png';
import plantCard1 from '../../assets/images/plant-card-1.png';
import plantCard2 from '../../assets/images/plant-card-2.png';
import plantCard3 from '../../assets/images/plant-card-3.png';

// ANIMATION REACT REVEAL
import { Fade, Zoom, Bounce } from 'react-reveal';

// COMPONENT
import IconList from '../../components/icon-list/icon-list.component';
import Button from '../../components/button/button.component';
import PlantCard from '../../components/plant-card/plant-card.component';
import Input from '../../components/input/input.component';

import ReviewsSection from '../../components/sections/reviews-section/reviews-section.component';
import BlogsSection from '../../components/sections/blogs-section/blogs-section.component';
import emailjs from '@emailjs/browser';

import './home.style.scss';
import '../../sass/typography.scss';

export default function Home() {
  const form = useRef();
<<<<<<< HEAD

=======
  
// console.log(form);
>>>>>>> 048f76500f07ff83f6a8cdd05094d8f10a2d93f4
  const sendEmail = (e) => {
    console.log(e)
    e.preventDefault();
<<<<<<< HEAD

=======
// console.log(form);
>>>>>>> 048f76500f07ff83f6a8cdd05094d8f10a2d93f4
    emailjs.sendForm('service_reo4yle', 'template_u7h8lve', form.current, 'user_o5Q1fksLSPlNeoTHcjWJA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='home'>
        <div className="home__hero">
          <Zoom>
            <div className="small-img">
              <img src={heroImage2} alt="image" />
            </div>
          </Zoom>
          <Fade left>
            <div className="home__hero--content-container">
              <h1>Let Plants Make You Happy</h1>
              <span className="hashtag">#BecomePlanParent with us.</span>
              <IconList/>
            </div>
          </Fade>
          <Fade right>
            <div className="home__hero--image-contianer">
              <div className="img-box">
                <img className='img' src={heroImage} alt="hero section image" />
              </div>
            </div>
          </Fade>
        </div>
        <div className="home__collection">
          <Fade left>
            <div className="home__collection--heading-container">
              <h2>Collection</h2>
            </div>
          </Fade>
          <Fade right>
            <div className="home__collection--description-container">
              <p>Have a look at our latest collection of our favorite plants. Choose your one and get them within a very short delivery time.</p>
            </div>
          </Fade>
        </div>
        <div className="home__our-plants">
          <div className="home__our-plants--col-left">
            <Bounce bottom>
              <div className="img-container">
                <img src={plantImage} alt="plant image" />
              </div>
            </Bounce>
            <Fade left>
              <h2>Our Plants</h2>
              <p className='mb-5'>Have a look at our latest collection of our favorite plants. Choose your one and get them within a very short delivery time.</p>
              <Button primary text='Buy Now'/>
            </Fade>
            <div className="card-container-left">
              <Fade left>
                <PlantCard image={plantCard2} text="Dragon's Tongue"/>
              </Fade>
            </div>
          </div>
          <div className="home__our-plants--col-right">
            <div className="shop-now-container">
              <h4 className='mb-2'>Shop Now</h4>
              <IconList withBackground/>            
            </div>
            <div className="card-container-right">
              <Fade right>
                <PlantCard image={plantCard1} text='Garden Croton'/>
                <PlantCard image={plantCard3} text='Snake Plant'/>
              </Fade>
            </div>
          </div>
        </div>
        <div className="home__reviews">
          <Fade bottom>
            <ReviewsSection/>
          </Fade>
        </div>
        <div className="home__blogs">
          <Fade bottom>
            <BlogsSection/>
          </Fade>
        </div>
        <div className="home__contact">
          {/* <Fade bottom>
            <h2 className='home__contact--heading'>Follow Plant Easy on <span className='social'>Facebook</span>, <span className='social'>Instagram</span>, <span className='social'>Tiktok</span> and <span className='social'>Youtube</span></h2>
            <form className='home__contact--form' action="">
              <Input type='text' placeholder='Email' />
              <Button primary text='Submit'/>
            </form>
            <h4 className='contact-heading'>Contact</h4>
            <p className='contact-info'>info@planteasy.com | Phone: +880-XXX-XXXXX</p>
          </Fade> */}
          <div>
            <h2 className='home__contact--heading'>Follow Plant Easy on <span className='social'>Facebook</span>, <span className='social'>Instagram</span>, <span className='social'>Tiktok</span> and <span className='social'>Youtube</span></h2>
            <form ref={form} onSubmit={sendEmail}>
              <label>Email</label>
              <input type="email" name="user_email" />
              <input type="submit" value="Send" />
            </form>
            <h4 className='contact-heading'>Contact</h4>
            <p className='contact-info'>info@planteasy.com | Phone: +880-XXX-XXXXX</p>
          </div>
        </div>
    </div>
  )
}
