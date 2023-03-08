import React from 'react';
import Links from './Links';
import './Hero.scss';

const Hero = () => {
  return (
    <div className='hero'>
      <section>
        <article className='screen'>
          <span className='bar'>
            <span className='search'>https://cxde-test.com/</span>
            <span className='btns'>- x</span>
          </span>
          <span className='glass'>&lt;Hello World /&gt;</span>
        </article>

        <span>
          <h1>Sairi Conejo Flores</h1>
          <p>Full Stack Developer</p>
          <Links />
        </span>
      </section>
    </div>
  );
};

export default Hero;
