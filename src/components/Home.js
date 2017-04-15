import React from 'react';
import { Link } from 'react-router';

// importing inline styles
import { css } from 'aphrodite';
import Styles from '../stylesheets/ContentStyles';

const Home = ({ handleNavigation }) => {
  return (
    <div className={css(Styles.contentContainer)}>
      <Link to="/about" className={css(Styles.contentText)} onClick={() => { handleNavigation('about')} }>About</Link>
      <text className={css(Styles.contentText)}>|</text>
      <Link to="/projects" className={css(Styles.contentText)} onClick={() => { handleNavigation('projects')} }>Projects</Link>
      <text className={css(Styles.contentText)}>|</text>
      <Link to="/links" className={css(Styles.contentText)} onClick={() => { handleNavigation('links')} }>Links</Link>
    </div>
  );
};

export default Home;
