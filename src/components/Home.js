import React from 'react';
import { Link } from 'react-router';

// importing inline styles
import { css } from 'aphrodite';
import Styles from '../stylesheets/NavbarStyles';

const Home = ({ handleNavigation }) => {
  return (
    <div className={css(Styles.container)}>
      <Link to="/about" className={css(Styles.linkText)} onClick={() => { handleNavigation('about')} }>About</Link>
      <text className={css(Styles.linkText)}>|</text>
      <Link to="/projects" className={css(Styles.linkText)} onClick={() => { handleNavigation('projects')} }>Projects</Link>
      <text className={css(Styles.linkText)}>|</text>
      <Link to="/links" className={css(Styles.linkText)} onClick={() => { handleNavigation('links')} }>Links</Link>
    </div>
  );
};

export default Home;
