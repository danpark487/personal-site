import { StyleSheet } from 'aphrodite';
import { fadeIn, fadeInRightBig, fadeOutLeftBig } from 'react-animations';

export default StyleSheet.create({
  contentEnter: {
    opacity: 0
  },
  contentEnterActive: {
    opacity: 1
  },
  contentLeave: {
    opacity: 1
  },
  contentLeaveActive: {
    opacity: 0
  },
  headerEnter: {
    animationName: fadeInRightBig,
    animationDuration: '1s'
  },
  headerLeave: {
    animationName: fadeOutLeftBig,
    animationDuration: '1s'
  },
  appear: {
    opacity: 0.01,
    transform: 'translate3d(100%, 0, 0)'
  },
  appearActive: {
    opacity: 1,
    transform: 'none'
  }
});
