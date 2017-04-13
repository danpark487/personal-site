import { StyleSheet } from 'aphrodite';
import { fadeIn, fadeInRight, fadeOutLeftBig } from 'react-animations';

export default StyleSheet.create({
  header: {
    position: 'relative',
    alignItems: 'center',
    top: '20%',
    left: '60%',
    width: '30%',
    display: 'flex',
    flexDirection: 'column'
  },
  headerText: {
    color: 'white',
    fontSize: '80px',
    fontFamily: 'Montserrat',
    fontWeight: 'bold'
  },
  headerTextOut: {
    color: 'white',
    fontSize: '80px',
    fontFamily: 'Montserrat',
    fontWeight: 'bold'
  },
  contentText: {
    color: 'white',
    fontSize: '30px',
    fontFamily: 'Cardo'
  }
});
