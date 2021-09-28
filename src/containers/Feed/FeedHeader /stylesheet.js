import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: 'rgb(204, 51, 135)',

    elevation: 5,
    // borderWidth: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    height: 37.9,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  tleft: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    // width: '90%',

    // alignItems: 'center',
    // borderWidth: 1,
  },
  left: {
    flex: 0.25,
    // borderWidth: 1,
    // borderColor: 'blue',
    paddingLeft: 9,

    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',

    // alignItems: 'center',
    // justifyContent: 'center',
  },
  middle: {
    flex: 0.5,

    alignItems: 'center',
    justifyContent: 'center',
  },
  right: {
    flex: 0.25,
    // borderWidth: 1,
    // borderColor: 'white',
    alignItems: 'flex-end',
    position: 'relative',
    paddingRight: 10,
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'OpenSans-Bold',
    color: 'white',
  },
  ///night mode
  ntext: {
    fontFamily: 'OpenSans-Bold',
    color: 'rgb(204, 51, 135)',
    fontWeight: '700',
  },
  ncontainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: 'black',
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(204, 51, 135)',

    elevation: 5,
    // borderWidth: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    height: 37.3,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
});
