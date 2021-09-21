import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    // borderWidth: 3,
    // borderColor: 'white',
    height: '100%',
    backgroundColor: 'white',

    justifyContent: 'center',
    flexDirection: 'column',
  },
  image: {
    marginTop: 10,
    flex: 0.3,

    // borderWidth: 1,
    paddingLeft: 15,
    paddingRight: 20,
    marginBottom: 30,
  },
  title: {
    flex: 0.1,
    color: 'white',
    marginLeft: 5,
    marginRight: 5,
    paddingLeft: 20,
    paddingRight: 20,
    // borderWidth: 1,
  },
  desc: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    // borderColor: '',
    borderWidth: 1,
    borderColor: 'rgb(204, 51, 135)',
    backgroundColor: 'rgb(201, 91, 115)',
    flex: 0.33,
    borderRadius: 10,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    color: 'white',
    paddingTop: 20,
    paddingLeft: 30,
    paddingRight: 30,
  },
  extra: {
    flex: 0.17,
  },
  imageStyle: {
    resizeMode: 'contain',
    alignSelf: 'center',
    height: '100%',
    width: '100%',
  },
  dtext: {
    color: 'white',
    textAlign: 'justify',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  ///night mode
  ndesc: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    // borderColor: '',
    borderWidth: 1,
    borderColor: 'rgb(204, 51, 135)',
    backgroundColor: 'rgb(232, 227, 227)',
    flex: 0.33,
    borderRadius: 10,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    color: 'white',
    paddingTop: 20,
    paddingLeft: 30,
    paddingRight: 30,
  },

  ndtext: {
    color: 'black',
    textAlign: 'justify',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
});

export default style;
