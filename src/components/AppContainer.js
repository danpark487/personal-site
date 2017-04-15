import React from 'react';
import { Link } from 'react-router';
import { CSSTransitionGroup, TransitionGroup } from 'react-transition-group';

//import component
import Headers from './Headers';

//importing transition animation styles
import { css } from 'aphrodite';
import Styles from '../stylesheets/HomeStyles';
import TransitionStyles from '../stylesheets/TransitionStyles';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: 'Dan Park',
      show: false
    };

    this.handleNavigation = this.handleNavigation.bind(this);
  }

  handleNavigation(display) {
    this.setState({ display, show: true });
  }

  render() {
    const { location, children } = this.props;
    const { show, display } = this.state;

    return (
      <div>
        <TransitionGroup>
          { show ? null : <Headers display={display} /> }
        </TransitionGroup>
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={2000}
          transitionLeaveTimeout={2000}
        >
          {
            React.cloneElement(  // for transitions with react-router v.3
              children,
              {key: location.pathname, handleNavigation: this.handleNavigation}
            )
          }
        </CSSTransitionGroup>
      </div>
    )
  }
};

export default AppContainer;
