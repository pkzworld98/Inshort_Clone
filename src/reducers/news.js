import {
  FETCH_NEW,
  INDEX_CHANGE_HANDLER,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_REQUEST,
} from '../actions/type.js';

const intialState = {
  nisLoading: false,
  newsList: [],
  loadingState: false,
  currentNewsSlideIndex: 0,
  isWebViewVisible: false,
  categories: [],
  newsOffset: null,
  currentTopic: null,
};

export const news = (state = intialState, action) => {
  // console.log(action, 'action ');
  switch (action.type) {
    case FETCH_NEWS_SUCCESS:
      return {
        ...state,

        newsList: action.news,
        loadingState: false,
      };
    case FETCH_NEWS_REQUEST:
      return {
        ...state,
        loadingState: true,
      };
    case INDEX_CHANGE_HANDLER:
      return {
        ...state,
        currentNewsSlideIndex: action.index,
      };
    default:
      return {
        ...state,
      };
  }
};
