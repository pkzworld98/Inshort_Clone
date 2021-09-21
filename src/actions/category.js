import firestore from '@react-native-firebase/firestore';
import {FETCH_CATEGORY} from './type';

export const fetchCategory = () => {
  return async dispatch => {
    let category = [];

    firestore()
      .collection('category')
      .get()
      .then(r => {
        r.forEach(item => {
          category.push(item.data());
        });

        dispatch({
          type: FETCH_CATEGORY,
          category,
        });
      })
      .catch(e => {
        console.log(e);
      });
  };
};
