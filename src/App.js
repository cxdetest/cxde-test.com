import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Container } from './components/containers';
import Navigation from './components/Navigation';
import ScrollReveal from 'scrollreveal';
import './App.scss';

const App = () => {
  useEffect(() => {
    ScrollReveal().reveal('.navigation', { delay: 300 });
    ScrollReveal().reveal('.skills', { delay: 300 });
    ScrollReveal().reveal('.projects', { delay: 300 });
    ScrollReveal().reveal('.works', { delay: 300 });
    ScrollReveal().reveal('input', { delay: 300 });
    ScrollReveal().reveal('textarea', { delay: 300 });
    ScrollReveal().reveal('button', { delay: 300 });
    ScrollReveal().reveal('h3', { delay: 300 });
  }, []);

  return (
    <>
      <Navigation />
      <Hero />
      <Container>
        <Skills />
        <Projects />
        <Works />
      </Container>
      <Contact />
      <Footer />
    </>
  );
};

export default App;
