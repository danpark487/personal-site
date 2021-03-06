import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
  container: {
    backgroundColor: 'black',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  header: {
    position: 'relative',
    alignItems: 'center',
    top: '20%',
    left: '60%',
    width: '30%',
    display: 'flex',
    flexDirection: 'column'
  }
});
