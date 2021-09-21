import {combineReducers} from 'redux';
import {category} from './category';
import {news} from './news';
import {helper} from './helper';

const rootReducter = combineReducers({category, news, helper});

export default rootReducter;
