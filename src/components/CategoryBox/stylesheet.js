import {Dimensions, StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  scrollview: {
    marginTop: 15,
    flex: 1,
    // borderWidth: 1,
  },
  list: {
    flex: 1,
    // borderWidth: 1,
  },
  scrollcontent: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',

    // borderColor: 'yellow',

    // width: '100%',
    // height: '100%',
    // maxWidth: Dimensions.get('window').width / 3 - 10, // Width / 3 - (marginLeft and marginRight for the components)
    // justifyContent: 'center',
    // alignItems: 'center',
    margin: 5,
    // borderWidth: 1,
  },
  flatcontent: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    maxWidth: Dimensions.get('window').width / 3 - 10, // Width / 3 - (marginLeft and marginRight for the components)
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },

  flatcategory: {
    width: '100%',
    paddingBottom: 5,

    display: 'flex',

    borderRadius: 10,

    justifyContent: 'flex-start',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  scrollcategory: {
    width: '30%',
    height: 130,
    paddingBottom: 5,

    display: 'flex',

    borderRadius: 10,
    margin: 5,

    justifyContent: 'flex-start',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    height: '80%',

    width: '100%',
  },
  imageUrl: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,

    height: '100%',
    width: '100%',
    alignSelf: 'center',
  },
  categoryName: {
    elevation: 40,
    width: '100%',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20%',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,

    // fontSize: 10,
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '700',
  },
});
