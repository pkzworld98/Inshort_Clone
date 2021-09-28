import {combineReducers} from 'redux';
import {category} from './category';
import {news} from './news';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {helper} from './helper';
const newsPersistConfig = {
  key: 'news',
  storage: AsyncStorage,
  whitelist: ['bookMarkedNewsList'],
};

// const rootReducer = combineReducers({
//   news,
//   category,
//   helper,

const rootReducer = combineReducers({
  news: persistReducer(newsPersistConfig, news),
  category,
  helper,
});

export default rootReducer;
