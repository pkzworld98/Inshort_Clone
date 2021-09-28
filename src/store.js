import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {persistStore, persistReducer} from 'redux-persist';

import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['news'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
let store = createStore(rootReducer, applyMiddleware(thunk));
let persistor = persistStore(store);
// return { store, persistor }
// const store = createStore(
//   rootReducter,
//   composeWithDevTools(applyMiddleware(thunk)),
// );
export default store;
