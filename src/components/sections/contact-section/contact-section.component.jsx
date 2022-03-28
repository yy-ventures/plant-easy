import React, {useRef} from 'react'
import { useAlert } from 'react-alert'
import emailjs from '@emailjs/browser';

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
        <h2 className='contact-section--heading'>Follow Plant Easy on <span className='social'>Facebook</span>, <span className='social'>Instagram</span>, <span className='social'>Tiktok</span> and <span className='social'>Youtube</span></h2>            
        <form ref={form} onSubmit={sendEmail} className='contact-section--form'>
            <input type="text" name="user_name" placeholder="Full Name" className='input' required />
            <input type="text" name="contact_number" placeholder='Phone Number' className='input' required />
            <input type="email" name="user_email" placeholder="E-mail Address" className='input' required />
            <textarea name="message" placeholder='Your Message' className='input' rows='4' required />
            <input type="submit" value="Send" className='btn btn-primary' />
        </form>
        
        <h4 className='contact-heading'>Contact</h4>
        <p className='contact-info'>info@planteasy.com | Phone: +880-XXX-XXXXX</p>
    </div>
  )
}
