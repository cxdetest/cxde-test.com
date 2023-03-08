import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import './Links.scss';

const Links = () => {
  return (
    <span className='links'>
      <a href='https://github.com/cxdetest' target='_blank' rel='noreferrer '>
        <BsGithub />
      </a>
      <a
        href='https://www.linkedin.com/in/cxdetest/'
        target='_blank'
        rel='noreferrer '
      >
        <BsLinkedin />
      </a>
    </span>
  );
};

export default Links;
