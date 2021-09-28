// import {collection, getDocs} from 'firebase/firestore';
// // import {db} from '../firebase';
// import {FETCH_NEW} from './type';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import {goToFeed, handleNavigationRequest} from '.';
import {
  ADD_TO_BOOKMARK_REQUEST,
  ADD_TO_BOOKMARK_SUCCESS,
  BOOK_MARK_IS_SHOWING,
  FETCH_BOOKMARK,
  FETCH_NEW,
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  FETCH_TOPIC_NEWS_SUCCESS,
  REMOVE_FROM_BOOKMARK,
} from './type';

export const fetchNews = (page, offSet) => {
  return async dispatch => {
    let news = [];
    dispatch({
      type: FETCH_NEWS_REQUEST,
    });
    const query =
      !page || page === 1
        ? firestore().collection('news').orderBy('created_at', 'desc').limit(10)
        : firestore()
            .collection('news')
            .orderBy('created_at', 'desc')
            .startAfter(offSet)
            .limit(10);
    query
      .get()
      .then(r => {
        r.forEach(item => {
          news.push(item.data());
        });

        dispatch({
          type: FETCH_NEWS_SUCCESS,
          news,
          newsOffset: news[news.length - 1].created_at,
          page,
        });
      })
      .catch(e => {
        console.log(e);
      });
  };
};

export const filterNews = (page, label, offSet) => {
  console.log(page, label, offSet, 'yei aya category wala mein');
  return async dispatch => {
    let news = [];
    dispatch({
      type: FETCH_NEWS_REQUEST,
    });
    const query =
      !page || page === 1
        ? firestore()
            .collection('news')
            .where('category', 'array-contains', label)
            .orderBy('created_at', 'desc')
            .limit(5)
        : firestore()
            .collection('news')
            .where('category', 'array-contains', label)
            .orderBy('created_at', 'desc')
            .startAfter(offSet)
            .limit(5);
    console.log(query, 'yuei query');

    query
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(item => {
          news.push(item.data());
        });
        console.log(news, 'yei hai category news');
        dispatch({
          type: FETCH_TOPIC_NEWS_SUCCESS,
          news,
          label,
          newsOffset: news[news.length - 1].created_at,
          page,
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

// export const fetchBookMark = () => {
//   return async dispatch => {

//       ? dispatch({
//           type: FETCH_BOOKMARK,
//           data,
//         })
//       : null;
//   };
// };

export const addToBookMark = (isBookmark, news) => {
  console.log('ghusa', news, isBookmark);
  return async dispatch => {
    isBookmark
      ? dispatch({
          type: REMOVE_FROM_BOOKMARK,
          data: news,
        })
      : dispatch({
          type: ADD_TO_BOOKMARK_SUCCESS,
          data: news,
        });
  };
};

export const showBookMarkedNews = news => {
  return async dispatch => {
    dispatch({
      type: FETCH_BOOKMARK,
      news,
    });

    dispatch(goToFeed());
  };
};
