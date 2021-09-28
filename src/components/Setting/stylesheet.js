import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  optionIcon: {},
  optionText: {
    marginLeft: 18,
    fontSize: 15,
    fontFamily: 'OpenSans-Regular',
  },
  option: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 5,
    paddingLeft: 10,
  },
  listitem: {
    marginLeft: 18,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  stext: {
    fontFamily: 'OpenSans-Regular',
    color: 'rgb(201, 91, 115)',
    marginTop: 5,
    fontSize: 12,
  },
  bottom: {
    backgroundColor: 'rgb(201, 91, 115)',
    display: 'flex',
    flexDirection: 'column',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  bitem: {
    padding: 20,
    paddingLeft: 50,
    // borderWidth: 1,
  },
  btext: {
    fontFamily: 'OpenSans-Regular',
    color: 'white',
  },

  //dark mode

  ncontainer: {
    backgroundColor: 'pink',
  },
  noptionIcon: {},
  noptionText: {
    marginLeft: 18,
    fontSize: 15,
    fontFamily: 'OpenSans-Regular',
  },
  noption: {
    display: 'flex',

    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 5,
    paddingLeft: 10,
  },
  nlistitem: {
    marginLeft: 18,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  nstext: {
    fontFamily: 'OpenSans-Regular',
    color: 'rgb(201, 91, 115)',
    marginTop: 5,
    fontSize: 12,
  },
  nbottom: {
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'column',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  nbitem: {
    padding: 20,
    paddingLeft: 50,
    // borderWidth: 1,
  },
  nbtext: {
    fontFamily: 'OpenSans-Regular',
    color: 'white',
  },
});
