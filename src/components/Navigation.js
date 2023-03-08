import React, { useEffect, useState } from 'react';
import { CgMenuGridO } from 'react-icons/cg';

import './Navigation.scss';

const Navigation = () => {
  const [scroll, setScroll] = useState(0);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    window.scrollTo(0, scroll);
  }, [scroll]);

  return (
    <nav className='navigation'>
      {menu ? (
        <>
          <span
            onClick={() => {
              setMenu(false);
              setScroll(0);
            }}
          >
            Home
          </span>
          <span
            onClick={() => {
              setMenu(false);
              setScroll(770);
            }}
          >
            Skills
          </span>
          <span
            onClick={() => {
              setMenu(false);
              setScroll(1375);
            }}
          >
            Projects
          </span>
          <span
            onClick={() => {
              setMenu(false);
              setScroll(2010);
            }}
          >
            Works
          </span>
          <span
            onClick={() => {
              setMenu(false);
              setScroll(2110);
            }}
          >
            Contact
          </span>
        </>
      ) : (
        <CgMenuGridO onClick={() => setMenu(true)} />
      )}
    </nav>
  );
};

export default Navigation;
