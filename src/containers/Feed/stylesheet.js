import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',

    height: '100%',
    backgroundColor: 'white',
    zIndex: 0.8,

    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  image: {
    flex: 0.35,
    justifyContent: 'flex-start',
    display: 'flex',

    // paddingLeft: 15,
    // paddingRight: 20,
    marginBottom: 30,
  },
  bookmarktitle: {
    flex: 0.1,
    color: 'rgb(204, 51, 135)',
    marginLeft: 5,
    marginRight: 5,
    paddingLeft: 20,
    paddingRight: 20,
    // borderWidth: 1,
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
  star: {
    position: 'absolute',
    top: 45,
    left: 10,
  },
  imageStyle: {
    resizeMode: 'cover',

    height: '100%',
    width: '100%',
  },
  dtext: {
    color: 'white',
    textAlign: 'justify',
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
  },

  header: {
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
    height: 37.3,
    width: '100%',
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
    backgroundColor: 'grey',
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
  ncontainer: {
    flex: 1,
    display: 'flex',

    // borderColor: 'white',
    height: '100%',
    backgroundColor: 'black',
    zIndex: 0.8,

    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  ndtext: {
    color: 'white',
    textAlign: 'justify',
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
  },
});

export default style;
