import React from 'react';
import './contact.css';
import { GrMail } from 'react-icons/gr';
import { FaTwitterSquare } from 'react-icons/fa'; 
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com'


function Contact() {
  let form = useRef();
  let sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_36x3sgl', 'template_532sx1r', form.current, '9_goZLdQ5w-BFBEgR')
    e.target.reset()
  };
  
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <GrMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>Dhruvc888@gmail.com</h5>
      <a href='mailto:dhruvc888@gmail.com' target='_blank' rel='noopener noreferrer'>Send a message</a>

          </article> 
          <article className='contact__option'>
            <FaTwitterSquare className='contact__option-icon'/>
            <h4>Twitter</h4>
            <h5>Dhruvc888</h5>
            <a href='https://twitter.com/dhruvc888' target='_blank' rel='noopener noreferrer'>Send a message</a>
          </article>
          <div>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+81-718-329-72</h5>
            <a href='https://api.whatsapp.com/send?phone=8171832972' target='_blank' rel='noopener noreferrer'>Send a message</a>
          </article>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail }>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    </section>
  );
}

export default Contact;
