/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';

import {SafeAreaView} from 'react-native';
import {NativeBaseProvider, Text, Box} from 'native-base';

import {useDispatch} from 'react-redux';
import {fetchNews} from './src/actions';
import Home from './src/containers/Home';
import {Provider} from 'react-redux';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <SafeAreaView style={{flex: 1}}>
          <Home />
        </SafeAreaView>
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
