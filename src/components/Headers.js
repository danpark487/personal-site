import React from 'react';
import { TweenMax } from 'gsap';

// importing inline styles
import { css } from 'aphrodite';
import Styles from '../stylesheets/HomeStyles';

class Headers extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillEnter (callback) {
    console.log('entering')
    const el = this.container;
    TweenMax.fromTo(el, 1, {opacity: 0}, {opacity: 1, onComplete: callback});
  }

  componentWillLeave (callback) {
    console.log('leaving')
    const el = this.container;
    TweenMax.fromTo(el, 1, {opacity: 1}, {opacity: 0, onComplete: callback});
  }

  render() {
    const { display } = this.props;

    return (
      <div key="header" ref={c => this.container = c}>
        <a className={css(Styles.headerText)} >
          {display}
        </a>
      </div>
    );
  }
};

export default Headers;
