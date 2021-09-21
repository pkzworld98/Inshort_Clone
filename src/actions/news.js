// import {collection, getDocs} from 'firebase/firestore';
// // import {db} from '../firebase';
// import {FETCH_NEW} from './type';
import firestore from '@react-native-firebase/firestore';
import {goToFeed, handleNavigationRequest} from '.';
import {FETCH_NEW, FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS} from './type';

export const fetchNews = () => {
  return async dispatch => {
    let news = [];
    dispatch({
      type: FETCH_NEWS_REQUEST,
    });
    firestore()
      .collection('news')
      .orderBy('created_at', 'desc')
      .limit(10)
      .get()

      .then(r => {
        r.forEach(item => {
          news.push(item.data());
        });
        setTimeout(() => {
          dispatch({
            type: FETCH_NEWS_SUCCESS,
            news,
          });
        }, 1000);
      })
      .catch(e => {
        console.log(e);
      });
  };
};

export const filterNews = label => {
  return async dispatch => {
    let news = [];
    dispatch({
      type: FETCH_NEWS_REQUEST,
    });
    firestore()
      .collection('news')
      .where('category', 'array-contains', label)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(item => {
          news.push(item.data());
        });
        dispatch({
          type: FETCH_NEWS_SUCCESS,
          news,
        });
        dispatch(goToFeed());
      })
      .catch(e => {
        console.log(e, 'yei aya error');
      });
  };
};

export const showTrendingNews = label => {
  return async dispatch => {
    console.log('ghusaaaaa');
    let news = [];
    dispatch({
      type: FETCH_NEWS_REQUEST,
    });
    firestore()
      .collection('news')
      .where('send_notifications', '==', true)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(item => {
          news.push(item.data());
        });
        dispatch({
          type: FETCH_NEWS_SUCCESS,
          news,
        });
        dispatch(goToFeed('All News'));
      })
      .catch(e => {
        console.log(e, 'yei aya error');
      });
  };
};
