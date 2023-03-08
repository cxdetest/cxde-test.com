import React from 'react';
import { Flex, RulerContainer } from './containers';
import { FaReact, FaAngular, FaSass, FaPython } from 'react-icons/fa';
import { GrNode, GrMysql } from 'react-icons/gr';
import { SiMongodb, SiExpress, SiAuth0, SiTypescript } from 'react-icons/si';
import { BsGithub } from 'react-icons/bs';
import db from '../db.json';
import './Skills.scss';

const Skills = () => {
  const { skills, utils } = db;

  return (
    <Flex className='skills'>
      <h3>Skills</h3>
      <Ruler data={skills} />
      <Ruler data={utils} />
    </Flex>
  );
};

export default Skills;

const Ruler = ({ data }) => {
  return (
    <RulerContainer>
      {data.map((el) => (
        <span key={el}>
          <p>{el}</p>
          <>
            {el === 'ReactJS' && <FaReact />}
            {el === 'AngularJS' && <FaAngular />}
            {el === 'NodeJS' && <GrNode />}
            {el === 'MySQL' && <GrMysql />}
            {el === 'MongoDB' && <SiMongodb />}
            {el === 'Git' && <BsGithub />}
            {el === 'ExpressJS' && <SiExpress />}
            {el === 'Sass' && <FaSass />}
            {el === 'Auth0' && <SiAuth0 />}
            {el === 'Python' && <FaPython />}
            {el === 'TypeScript' && <SiTypescript />}
          </>
        </span>
      ))}
    </RulerContainer>
  );
};
