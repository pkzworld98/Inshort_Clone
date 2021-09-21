import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  content: {
    flex: 1,
    // borderWidth: 1,
    display: 'flex',

    backgroundColor: 'white',
  },
  cloudImage: {
    height: '100%',
    width: '100%',
    // borderWidth: 1,
    resizeMode: 'contain',
    // alignSelf: 'flex-end',
    borderColor: 'pink',
  },
  phoneImage: {
    height: '100%',
    width: '100%',

    // borderWidth: 1,
    resizeMode: 'contain',
  },
  cloud: {
    padding: 6,

    width: '100%',
    flex: 0.45,
    // borderWidth: 1,
    // borderColor: 'red',
  },
  animation: {
    width: '100%',
    // borderWidth: 1,
    // borderColor: 'yellow',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.3,
  },
  phone: {
    display: 'flex',
    padding: 30,

    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flex: 0.25,
    // borderWidth: 1,
    // borderColor: 'red',
  },
  arrow: {
    // borderWidth: 1,
    // padding: 30,
  },
});
