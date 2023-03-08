import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      Copyright &copy; {new Date().getFullYear()} SCF | All rights reserved.
    </footer>
  );
};

export default Footer;
