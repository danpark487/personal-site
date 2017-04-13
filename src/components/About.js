import React from 'react';
import { CSSTransitionGroup, CSSTransition, transit } from "react-css-transition";

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
