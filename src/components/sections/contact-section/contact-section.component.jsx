import React, {useRef} from 'react'
import { useAlert } from 'react-alert'
import emailjs from '@emailjs/browser';

// COMPONENT
import Button from '../../button/button.component';

import './contact-section.style.scss'

export default function ContactSection() {

    const form = useRef();
  const alert = useAlert()
  
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_1yea738', 'template_u7h8lve', form.current, 'user_o5Q1fksLSPlNeoTHcjWJA')
    .then((result) => {
      alert.show("Thank you! we have received your query!")
      form.current.reset()
    }, (error) => {
        console.log(error.text);
    });
  };

  return (
    <div className='contact-section'>
        <h2 className='contact-section--heading'>Those Who Make Us Stronger!</h2>            
        <form ref={form} onSubmit={sendEmail} className='contact-section--form'>
            <input type="text" name="user_name" placeholder="Full Name" className='input' required />
            <input type="text" name="contact_number" placeholder='Phone Number' className='input' required />
            <input type="email" name="user_email" placeholder="E-mail Address" className='input' required />
            <textarea name="message" placeholder='Your Message' className='input' rows='4' required />
            <input type="submit" value="Send" className='btn btn-primary' />
        </form>
        <div className='btn-container'>
          <a href="https://www.facebook.com/groups/plant.easy.care.club/" target='_blank'>
            <Button text='Join Our Workshop'/>
          </a>
        </div>
        <h4 className='contact-heading'>Contact</h4>
        <p className='contact-info'>plant.easy.bd@gmail.com | Phone: +880-1309-008355</p>
    </div>
  )
}
