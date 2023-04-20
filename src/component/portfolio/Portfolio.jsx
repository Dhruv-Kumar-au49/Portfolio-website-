import React from 'react';
import './portfolio.css';
import img1 from '../../assets/dhruvBlog.png';
import img2 from '../../assets/portfolio.png';
import img3 from '../../assets/BOOK.png';
import img4 from '../../assets/superfan.png';


let data = [
  {
    id: 1,
    image:img1,
    title: 'DhruvBlog - blogging platform on the MERN stack!',
    github:'https://github.com/Dhruv-Kumar-au49',
    demo:'https://dhruvblogs.netlify.app/'
  },
  {
    id: 2,
    image:img2,
    title: 'Personal Portfolio website on Reactjs',
    github:'https://github.com/Dhruv-Kumar-au49',
    demo:''
  },
  {
    id: 3,
    image:img3,
    title: 'Book Library website on HTML, CSS, JAVASCRIPT',
    github:'https://github.com/Dhruv-Kumar-au49/book',
    demo:'https://book-haven.onrender.com/'
  },
  {
    id: 4,
    image:img4,
    title: 'SuperFan Fortnite on MERN Stack',
    github:'https://github.com/Dhruv-Kumar-au49/',
    demo:'https://superfanfe.netlify.app/'
  }
]


function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        
      {
  data.map(({id,image, title, github,demo})=>{
    return(
      <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className='portfolio__item-cta'>
            <a href={github} className='btn' target='_blank'>
              Github
            </a> 
            <a href={demo} className='btn btn-primary' target='_blank'>
              Live Demo
            </a>
          </div>
        </article>
    )
  })
}
      </div>
    </section>
  );
}

export default Portfolio;
