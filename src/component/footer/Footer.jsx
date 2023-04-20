import React from 'react'
import './footer.css'
import {AiFillInstagram,AiFillTwitterSquare,AiFillLinkedin} from 'react-icons/ai'
function Footer() {
  return (
    <footer>
      <a href='#' className='footer__logo'>Dhruv Code</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.instagram.com/dhruv_chaudhary_1998/' target='_blank'><AiFillInstagram/></a>
        <a href='https://twitter.com/dhruvc888'target='_blank'><AiFillTwitterSquare/></a>
        <a href='https://www.linkedin.com/in/dhruv-kumar-mern/'target='_blank'><AiFillLinkedin/></a>
      </div>

      <div className='footer__copyright'>
<small>&copy;Dhruv Code. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer