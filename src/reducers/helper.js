import {
  FETCH_CATEGORY,
  HANDLE_FEED_SCREEN_CLICK,
  HANDLE_NAVIGATION_REQUEST,
  NIGHT_MODE_TOOGLE,
  SHOW_MENU_BAR,
} from '../actions/type';

const intialState = {
  nightMode: false,
  NaviagteToPageIndex: null,
  showMenuToogle: false,
};

export const helper = (state = intialState, action) => {
  console.log(action);
  switch (action.type) {
    case HANDLE_NAVIGATION_REQUEST:
      return {
        ...state,
        NaviagteToPageIndex: action.index,
      };
    case HANDLE_FEED_SCREEN_CLICK:
      return {
        ...state,
        showMenuToogle: !state.showMenuToogle,
      };
    case NIGHT_MODE_TOOGLE:
      return {
        ...state,
        nightMode: !state.nightMode,
      };

    default:
      return {
        ...state,
      };
  }
};
