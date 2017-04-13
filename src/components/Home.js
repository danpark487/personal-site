import React from 'react';
import { CSSTransitionGroup, CSSTransition, transit } from "react-css-transition";

// components
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Links from './Links';
import Headers from './Headers';

import SlideInRight from './SlideInRight';

// importing inline styles
import { css } from 'aphrodite';
import Styles from '../stylesheets/HomeStyles';
import TransitionStyles from '../stylesheets/TransitionStyles';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      display: 'Name'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(show) {
    this.setState({ display: show, active: true });
  }

  render() {
    const { display } = this.state;

    return (
      <div className={css(Styles.container)}>
        <div className={css(Styles.header)}>
          <CSSTransitionGroup>
            <FadeIn>
              <a key="header" className={css(Styles.headerText)}>
                {display}
              </a>
            </FadeIn>
            <FadeIn>
              {
                (() => {
                  switch(display) {
                    case 'about':    return <About display={display} />;
                    case 'projects': return <Projects display={display} />;
                    case 'links':    return <Links display={display} />;
                    default:         return <Navbar display={display} handleClick={this.handleClick} />;
                  };
                })()
              }
            </FadeIn>
          </CSSTransitionGroup>
        </div>
      </div>
    );
  }
};

export default Home;
