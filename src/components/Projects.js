import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { GiWorld } from 'react-icons/gi';
import { Card, Grid } from './containers';
import WeatherApp from '../assets/weather-app.png';
import TodoApp from '../assets/todo-app.png';
import GamesGallery from '../assets/games-gallery.png';
import PhotoGallery from '../assets/photo-gallery.png';
import FavoriteLinks from '../assets/favorite_links.png';
import projects from '../db.json';
import './Projects.scss';

const Projects = () => {
  return (
    <>
      <h3>Projects</h3>
      <Grid className='projects'>
        {projects.projects.map((project) => (
          <Card key={project.project} className='card'>
            {project.project === 'WeatherApp' && (
              <img src={WeatherApp} alt={project.project} />
            )}
            {project.project === 'TodoApp' && (
              <img src={TodoApp} alt={project.project} />
            )}
            {project.project === 'Games Gallery' && (
              <img src={GamesGallery} alt={project.project} />
            )}
            {project.project === 'Photo Gallery' && (
              <img src={PhotoGallery} alt={project.project} />
            )}
            {project.project === 'Favorite Links' && (
              <img src={FavoriteLinks} alt={project.project} />
            )}

            <Links links={project.links}>
              <p>{project.project}</p>
            </Links>
          </Card>
        ))}
      </Grid>
    </>
  );
};

export default Projects;

const Links = ({ links, children }) => {
  return (
    <span className='links'>
      <p>{children}</p>
      <a href={links.repository} target='_blank' rel='noreferrer '>
        <BsGithub />
      </a>
      <a href={links.deployment} target='_blank' rel='noreferrer '>
        <GiWorld />
      </a>
    </span>
  );
};
