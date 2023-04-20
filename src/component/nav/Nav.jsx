import React, { useState } from 'react';
import './nav.css';
import { AiFillHome, AiFillBook, AiFillPhone } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { GiTechnoHeart } from 'react-icons/gi';

function Nav() {
  const [activeNav, setActiveNav] = useState('#');

  const handleClick = (e) => {
    setActiveNav(e.target.hash);
  };

  return (
    <nav className='nav'>
      <a href='#' className={activeNav === '#' ? 'active' : ''} onClick={handleClick}><AiFillHome /></a>
      <a href='#about' className={activeNav === '#about' ? 'active' : ''} onClick={handleClick}><FaUserAlt /></a>
      <a href='#experience' className={activeNav === '#experience' ? 'active' : ''} onClick={handleClick}><AiFillBook /></a>
      <a href='#portfolio' className={activeNav === '#portfolio' ? 'active' : ''} onClick={handleClick}><GiTechnoHeart /></a>
      <a href='#contact' className={activeNav === '#contact' ? 'active' : ''} onClick={handleClick}><AiFillPhone /></a>
    </nav>
  );
}

export default Nav;
