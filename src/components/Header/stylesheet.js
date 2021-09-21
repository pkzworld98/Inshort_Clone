import {StyleSheet} from 'react-native';
import {borderWidth} from 'styled-system';

export const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.05,
    display: 'flex',
    flexDirection: 'row',

    backgroundColor: 'rgb(204, 51, 135)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  headerblank: {
    flex: 0.05,
    display: 'flex',
    flexDirection: 'row',

    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  left: {
    flex: 0.25,
    // borderWidth: 1,
    // borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  middle: {
    flex: 0.5,
    // borderWidth: 1,
    // borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  right: {
    flex: 0.25,
    // borderWidth: 1,
    // borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  setting: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    paddingLeft: 20,
  },
  content: {
    flex: 0.95,
  },
  text: {
    fontWeight: '700',
    color: 'white',
    fontFamily: 'Roboto-Black',
    letterSpacing: 1,
  },
  textright: {
    fontFamily: 'Roboto-Black',
    color: 'white',
  },
  boxleft: {
    paddingLeft: 15,
    paddingRight: 15,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  boxright: {
    paddingLeft: 15,
    paddingRight: 15,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nheader: {
    flex: 0.05,
    display: 'flex',
    flexDirection: 'row',

    backgroundColor: 'rgb(196, 194, 194)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  ntext: {
    fontWeight: '700',
    color: 'rgb(204, 51, 135)',
    fontFamily: 'Roboto-Black',
    letterSpacing: 1,
  },
  ntextright: {
    fontFamily: 'Roboto-Black',
    color: 'black',
  },
});
