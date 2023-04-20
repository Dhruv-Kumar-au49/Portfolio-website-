import React from 'react';
import './about.css';
import { FaAward } from 'react-icons/fa';
import {AiOutlineAppstore} from 'react-icons/ai'
import ME from '../../assets/aboutpic.jpg';

function About() {
  return (
    <section id='about'>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='about'/>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1 Year of Working Experience</small>
            </article>

            <article className='about__card'>
              <div className='about__icon' ><AiOutlineAppstore/></div>
              
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>
<p>
Let me just say that I'm a MERN Stack Developer with a killer sense of humor (or so my mom tells me).
</p>

<a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;
