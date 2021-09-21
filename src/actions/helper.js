import {fetchNews} from '.';
import {
  HANDLE_FEED_SCREEN_CLICK,
  HANDLE_NAVIGATION_REQUEST,
  INDEX_CHANGE_HANDLER,
  NIGHT_MODE_TOOGLE,
  SHOW_MENU_BAR,
} from './type';

export const handleIndexChange = index => {
  return dispatch => {
    dispatch({
      type: INDEX_CHANGE_HANDLER,
      index,
    });
  };
};

export const handleDarkModeToggle = () => {
  return dispatch => {
    dispatch({
      type: NIGHT_MODE_TOOGLE,
    });
  };
};

export const handleNavigationRequest = navigateTo => {
  return dispatch => {
    // console.log('yhan bhi aggyaa', navigateTo);
    const index = navigateTo === 'Discover' ? 0 : 1;
    navigateTo === 'All News' ? dispatch(fetchNews()) : null;
    dispatch({
      type: HANDLE_NAVIGATION_REQUEST,
      index,
    });
  };
};

export const goToFeed = navigateTo => {
  return dispatch => {
    const index = 1;

    dispatch({
      type: HANDLE_NAVIGATION_REQUEST,
      index,
    });
  };
};

export const handleFeedClick = () => {
  return dispatch => {
    dispatch({
      type: HANDLE_FEED_SCREEN_CLICK,
    });
  };
};

export const showMenuBar = () => {
  return dispatch => {
    dispatch({
      type: SHOW_MENU_BAR,
    });
  };
};
