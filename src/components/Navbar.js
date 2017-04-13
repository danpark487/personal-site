import React from 'react';
import { CSSTransitionGroup, CSSTransition, transit } from "react-css-transition";

// importing inline styles
import { css } from 'aphrodite';
import Styles from '../stylesheets/NavbarStyles';
import TransitionStyles from '../stylesheets/TransitionStyles';

const Navbar = ({ handleClick, display }) => {
  return (
    <CSSTransition
      defaultStyle={css(Styles.container)}
      enterStyle={css(TransitionStyles.headerEnter)}
      leaveStyle={css(TransitionStyles.headerLeave)}
      activeStyle={{ opacity: 1.0 }}
    >
      <text className={css(Styles.linkText)} onClick={() => { handleClick('about')} }>About</text>
      <text className={css(Styles.linkText)}>|</text>
      <text className={css(Styles.linkText)} onClick={() => { handleClick('projects')} }>Projects</text>
      <text className={css(Styles.linkText)}>|</text>
      <text className={css(Styles.linkText)} onClick={() => { handleClick('links')} }>Links</text>
    </CSSTransition>
  );
};

export default Navbar;
