/**
 * @format
 */

import App from './App';
import {name as appName} from './app.json';
import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  StatusBar,
  Platform,
  SafeAreaView,
} from 'react-native';
const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, {backgroundColor}]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
);
class DarkTheme extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MyStatusBar
          backgroundColor="rgb(204, 51, 135)"
          barStyle="light-content"
        />

        <View style={styles.content}>
          <App />
        </View>
      </View>
    );
  }
}

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor: '#79B45D',
    height: APPBAR_HEIGHT,
  },
  content: {
    flex: 1,
    backgroundColor: '#33373B',
  },
});

AppRegistry.registerComponent(appName, () => DarkTheme);
