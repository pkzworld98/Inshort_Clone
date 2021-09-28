import {StyleSheet} from 'react-native';
import {padding} from 'styled-system';

export const style = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    backgroundColor: 'white',
  },

  top: {
    flex: 0.25,
    display: 'flex',
    flexDirection: 'row',
    // borderWidth: 1,
    padding: 10,
    width: '100%',
    alignItems: 'center',
  },
  content: {
    flex: 0.75,
    marginLeft: 10,

    marginRight: 5,
  },

  text: {
    fontFamily: 'OpenSans-Regular',
    color: 'rgb(201, 91, 115)',
    fontWeight: '600',
    marginLeft: 10,
  },
  htext: {
    fontFamily: 'OpenSans-Regular',
    color: 'rgb(201, 91, 115)',
    fontSize: 17,
  },
  hicon: {
    marginLeft: 7,
  },
  hbtext: {
    fontFamily: 'OpenSans-Regular',
    marginLeft: 10,
    color: 'black',
    fontSize: 14,
  },
  nhbtext: {
    fontFamily: 'OpenSans-Regular',
    marginLeft: 10,
    color: 'white',
    fontSize: 14,
  },
  ncontainer: {
    height: '100%',
    display: 'flex',
    backgroundColor: 'black',
  },
});
