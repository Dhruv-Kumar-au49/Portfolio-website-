import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';
import 'react-icons/ai';

function HeaderSocial() {
  return (
    <div className="header__social">
      <a href="https://www.linkedin.com/in/dhruv-kumar-mern/" target="_blank" rel="noopener noreferrer">
        <AiFillLinkedin />
      </a>
      <a href="https://github.com/Dhruv-Kumar-au49" target="_blank" rel="noopener noreferrer">
        <AiFillGithub />
      </a>
      <a href="https://twitter.com/dhruvc888" target="_blank" rel="noopener noreferrer">
        <AiFillTwitterCircle />
      </a>
    </div>
    
  );
}

export default HeaderSocial;
