import {FETCH_CATEGORY} from '../actions/type';

const intialState = {
  categoryList: [],
};

export const category = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORY:
      return {
        ...state,
        categoryList: action.category,
      };

    default:
      return {
        ...state,
      };
  }
};
