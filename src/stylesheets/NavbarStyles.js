import { StyleSheet } from 'aphrodite';
import { fadeInRight, fadeOutRight, fadeIn } from 'react-animations';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row'
  },
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
  linkText: {
    color: 'black',
    fontSize: '30px',
    fontFamily: 'Montserrat',
    paddingLeft: '20px'
  }
});
