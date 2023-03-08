import React from 'react';
import works from '../db.json';
import './Works.scss';

const Works = () => {
  return (
    <ul className='works'>
      <h3>Works</h3>
      <br />
      <br />
      <br />
      <br />
      {works.works.map((work) => (
        <li key={work.position}>
          <b>{work.position}</b>
          <sup> | {work.age}</sup>
          <p>{work.comment}</p>
        </li>
      ))}
    </ul>
  );
};

export default Works;
