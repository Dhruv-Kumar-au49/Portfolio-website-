import React from 'react';
import './experience.css';
import { VscVerifiedFilled } from 'react-icons/vsc';

function Experience() {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <VscVerifiedFilled className='experience__details-icon'/>
              <div className='experience__details-text'>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <VscVerifiedFilled className='experience__details-icon'/>
              <div className='experience__details-text'>
                <h4>HTML5</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <VscVerifiedFilled className='experience__details-icon'/>
              <div className='experience__details-text'>
                <h4>ReactJS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <VscVerifiedFilled className='experience__details-icon'/>
              <div className='experience__details-text'>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <VscVerifiedFilled className='experience__details-icon'/>
              <div className='experience__details-text'>
                <h4>JSON</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <VscVerifiedFilled className='experience__details-icon'/>
              <div className='experience__details-text'>
                <h4>XML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <VscVerifiedFilled className='experience__details-icon'/>
              <div className='experience__details-text'>
                <h4>JSX</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <VscVerifiedFilled className='experience__details-icon'/>
              <div className='experience__details-text'>
                <h4>JWT</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <VscVerifiedFilled className='experience__details-icon'/>
              <div className='experience__details-text'>
                <h4>NodeJS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <VscVerifiedFilled className='experience__details-icon'/>
              <div className='experience__details-text'>
                <h4>ExpressJS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <VscVerifiedFilled className='experience__details-icon'/>
              <div className='experience__details-text'>
                <h4>MySQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <VscVerifiedFilled className='experience__details-icon'/>
              <div className='experience__details-text'>
                <h4>MongoDB</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <VscVerifiedFilled className='experience__details-icon'/>
              <div className='experience__details-text'>
                <h4>Github</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <VscVerifiedFilled className='experience__details-icon'/>
              <div className='experience__details-text'>
                <h4>VScode</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <VscVerifiedFilled className='experience__details-icon'/>
              <div className='experience__details-text'>
                <h4>Heroku</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <VscVerifiedFilled className='experience__details-icon'/>
              <div className='experience__details-text'>
                <h4>Netlify</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
