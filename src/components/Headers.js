import React from 'react';
import { TweenMax } from 'gsap';

// importing inline styles
import { css } from 'aphrodite';
import Styles from '../stylesheets/HeaderStyles';

class Headers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      styleClass: css(Styles.headerText)
    }
  }

  componentWillEnter (callback) { 
    const el = this.header;
    this.setState({
      styleClass: css(Styles.headerEnter)
    });
  }

  componentWillLeave (callback) {
    const el = this.header;
    console.log('leaving', el)
    this.setState({
      styleClass: css(Styles.headerLeave)
    });
    // TweenMax.fromTo(el, 1, {x:0, opacity: 1}, {x:-2000, opacity: 0, ease: Power3.easeOut, onComplete: callback});
  }

  render() {
    const { display } = this.props;
    const { styleClass } = this.state;

    return (
      <a ref={c => this.header = c} className={styleClass}>
        {display}
      </a>
    );
  }
};

export default Headers;
