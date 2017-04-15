import { StyleSheet } from 'aphrodite';
import { fadeInRightBig, fadeOutLeftBig } from 'react-animations';

export default StyleSheet.create({
  headerText: {
    color: 'white',
    fontSize: '80px',
    fontFamily: 'Montserrat',
    fontWeight: 'bold'
  },
  headerEnterFrom: {
    opacity: 0,
    x: '2000px'
  },
  headerEnterTo: {
    opacity: 1,
    transform: 'none'
  },
  headerLeaveFrom: {
    opacity: 1
  },
  headerLeaveTo: {
    opacity: 0,
    transform: 'translate3d(-2000px, 0, 0)'
  },
  headerEnter: {
    color: 'white',
    fontSize: '80px',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    animationName: fadeInRightBig,
    animationDuration: '1s'
  },
  headerLeave: {
    color: 'white',
    fontSize: '80px',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    animationName: fadeOutLeftBig,
    animationDuration: '1s'
  }
});
