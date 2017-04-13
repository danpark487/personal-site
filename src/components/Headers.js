import React from 'react';
import { CSSTransitionGroup, CSSTransition, transit } from "react-css-transition";

// importing inline styles
import { css } from 'aphrodite';
import Styles from '../stylesheets/HomeStyles';
import TransitionStyles from '../stylesheets/TransitionStyles';

const Headers = (props) => (
  <CSSTransition
    {...props}
    defaultStyle={{ opacity: 0 }}
    enterStyle={{ opacity: transit(1.0, 500, "ease-in-out") }}
    leaveStyle={{ opacity: transit(0, 500, "ease-in-out") }}
    activeStyle={{ opacity: 1.0 }}
  >
    <a key="header" className={css(Styles.headerText)}>
      {props.display}
    </a>
);

export default Headers;
