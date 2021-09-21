import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    // flex: 1,
    borderRadius: 10,
    backgroundColor: 'rgb(201, 91, 115)',

    padding: 10,
    width: 90,
    margin: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    height: 80,
    // width: '40%',

    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  icon: {
    flex: 0.7,
  },
  name: {
    marginTop: 5,
    flex: 0.3,
  },
  text: {
    fontSize: 12,
    color: 'white',
  },

  ///night mode

  ncontainer: {
    // flex: 1,
    borderRadius: 10,
    backgroundColor: 'rgb(232, 227, 227)',

    padding: 10,
    width: 90,
    margin: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    height: 80,
    // width: '40%',

    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  ntext: {
    fontSize: 12,
    color: 'black',
  },
});
