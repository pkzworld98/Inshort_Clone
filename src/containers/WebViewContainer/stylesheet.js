import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  parent: {
    flex: 1,
  },
  container: {
    flex: 1,
    zIndex: 0.9,
  },
  top: {
    flex: 0.05,
    display: 'flex',
    flexDirection: 'row',
    // borderWidth: 1,
    zIndex: 1,
    backgroundColor: 'rgb(204, 51, 135)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  content: {flex: 0.95, zIndex: 0.6},
  left: {
    flex: 0.25,
    // borderWidth: 1,
    // borderColor: 'white',
    paddingLeft: 15,
    alignItems: 'flex-start',
    justifyContent: 'center',
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
  stagger: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: 'rgb(252, 248, 247)',
    height: 90,
    borderBottomStartRadius: 6,
    width: 140,
    display: 'flex',
    padding: 10,
    justifyContent: 'space-around',
    right: 0,
    position: 'absolute',
    top: 37,
    // right: 10,
    zIndex: 1,
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

  //nioght mode

  nstagger: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: 'rgb(204, 51, 135)',
    height: 90,
    borderBottomStartRadius: 6,
    width: 140,
    display: 'flex',
    borderWidth: 1,
    padding: 10,
    justifyContent: 'space-around',
    right: 0,
    position: 'absolute',
    top: 37,
    // right: 10,
    zIndex: 1,
  },
  ntop: {
    flex: 0.05,
    display: 'flex',
    flexDirection: 'row',
    // borderWidth: 1,
    zIndex: 1,
    backgroundColor: 'black',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(204, 51, 135)',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  ntext: {
    fontFamily: 'OpenSans-Bold',
    color: 'rgb(204, 51, 135)',
  },
  nstageerText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 12,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
