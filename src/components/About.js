import React from 'react';

// importing inline styles
import { css } from 'aphrodite';
import Styles from '../stylesheets/ContentStyles';
import TransitionStyles from '../stylesheets/TransitionStyles';

const About = ({ display }) => {
  return (
    <text className={css(Styles.contentText)}>Lolskies</text>
  );
};

export default About;
