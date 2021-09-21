import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducter from './reducers';

const store = createStore(
  rootReducter,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
