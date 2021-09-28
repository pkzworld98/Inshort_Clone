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

    elevation: 5,

    backgroundColor: 'rgb(204, 51, 135)',
    height: 40,

    width: '100%',
    display: 'flex',
    padding: 10,
    justifyContent: 'space-around',
    right: 0,
    position: 'absolute',
    bottom: 0,
    // right: 10,
    zIndex: 1,

    // borderWidth: 1,

    flexDirection: 'row',
  },
  stageerText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 12,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  staggerItem: {
    // padding: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    fontFamily: 'OpenSans-Regular',
    color: 'white',
  },
  ///night
  ntext: {
    fontFamily: 'OpenSans-Regular',
    color: 'rgb(204, 51, 135)',
  },
  ncontainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderWidth: 1,
    backgroundColor: 'black',
    height: 40,

    width: '100%',
    display: 'flex',
    padding: 10,
    justifyContent: 'space-around',
    right: 0,
    position: 'absolute',
    bottom: 0,
    // right: 10,
    zIndex: 1,
    borderTopColor: 'rgb(204, 51, 135)',
    borderTopWidth: 1,

    // borderWidth: 1,

    flexDirection: 'row',
  },
});
