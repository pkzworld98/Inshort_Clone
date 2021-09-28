import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  top: {
    width: '100%',
    flex: 0.5,
  },
  bottom: {
    width: '80%',
    flex: 0.3,
  },
  box: {
    flex: 0.2,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  text: {
    color: 'grey',
    fontSize: 16,
  },
  text2: {
    marginTop: 4,
    fontSize: 12,
    color: 'rgb(204, 51, 135)',
  },
  back: {
    justifyContent: 'space-between',
    position: 'absolute',
    top: 20,
    left: 12,
  },
  goback: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
