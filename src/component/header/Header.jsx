import React from 'react'
import './header.css'
import Cta from './Cta'
import me from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'

function Header() {
  return (
  <header>
    <div className='container header__container'>
<h5>The full-stack developer</h5>
<h1>Dhruv Kumar</h1>
<h5 className='text-light'>whose coding speed is faster than Superman's flight and more precise than Batman's gadgets!</h5>
<Cta/>
<div className='me'>
  <img src={me} alt='me' />

</div>
<HeaderSocial/>
<a href='#contact' className='scroll__down'>Scroll Down</a>
    </div>
  </header>
  )
}

export default Header