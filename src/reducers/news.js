import {
  FETCH_NEW,
  INDEX_CHANGE_HANDLER,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_REQUEST,
  FETCH_TOPIC_NEWS_SUCCESS,
  ADD_TO_BOOKMARK_REQUEST,
  ADD_TO_BOOKMARK_SUCCESS,
  FETCH_BOOKMARK,
  REMOVE_FROM_BOOKMARK,
} from '../actions/type.js';

const intialState = {
  newsList: [],
  loadingState: false,
  currentNewsSlideIndex: 0,
  page: 1,
  bookMarkedNewsList: [],

  // categories: [],
  newsOffset: null,
  currentTopic: null,
  showBookMark: false,
};

export const news = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        showBookMark: false,

        newsList: action.news,
        loadingState: false,
        currentTopic: null,
        newsOffset: action.newsOffset,
        currentNewsSlideIndex: 0,
        page: action.page,
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
    case FETCH_TOPIC_NEWS_SUCCESS:
      return {
        ...state,
        showBookMark: false,
        newsList: action.news,
        loadingState: false,
        currentTopic: action.label,
        newsOffset: action.newsOffset,
        currentNewsSlideIndex: 0,
        page: action.page,
      };
    case FETCH_BOOKMARK:
      return {
        ...state,
        // newsList: action.news,
        showBookMark: true,
        currentNewsSlideIndex: 0,
      };
    case ADD_TO_BOOKMARK_REQUEST:
      return {
        ...state,
      };
    case REMOVE_FROM_BOOKMARK:
      return {
        ...state,
        bookMarkedNewsList: state.bookMarkedNewsList.filter(
          item => item.id !== action.data.id,
        ),
      };
    case ADD_TO_BOOKMARK_SUCCESS:
      return {
        ...state,
        bookMarkedNewsList: [...state.bookMarkedNewsList, action.data],
      };

    default:
      return {
        ...state,
      };
  }
};
