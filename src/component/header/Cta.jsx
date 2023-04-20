import React from 'react'
import CV from '../../assets/simply CV 4 project.pdf'
function Cta() {
  return (
<div className='cta'>
    <a href={CV} download className='btn'>Download CV</a>
    <a href='#contact' className='btn btn-primary'> Let's Talk</a>
</div>
  )
}

export default Cta