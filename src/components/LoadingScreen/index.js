import {Image} from 'native-base';
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {style} from './stylesheet';
// import cloud from '../../cloud.png';
import phone from '../../assets/phone.json';

import RNDownloadButton from 'react-native-download-button';
import LottieView from 'lottie-react-native';
import arrow from '../../assets/arrow.json';
import cloud from '../../assets/cloud.json';
// TODO: What to do with the module?r

export default class LoadingScreen extends Component {
  render() {
    return (
      <View style={style.content}>
        <View style={style.cloud}>
          <LottieView
            source={cloud}
            colorFilters={[
              {
                keypath: 'button',
                color: 'red',
              },
              {
                keypath: 'Sending Loader',
                color: 'red',
              },
            ]}
            autoPlay
            loop
          />
        </View>
        <View style={style.animation}>
          {/* <View style={style.arrow}> */}
          <LottieView
            source={arrow}
            colorFilters={[
              {
                keypath: 'button',
                color: 'red',
              },
              {
                keypath: 'Sending Loader',
                color: 'red',
              },
            ]}
            autoPlay
            loop
          />
          {/* </View> */}
        </View>
        <View style={style.phone}>
          <LottieView
            source={phone}
            colorFilters={[
              {
                keypath: 'button',
                color: 'red',
              },
              {
                keypath: 'Sending Loader',
                color: 'red',
              },
            ]}
            autoPlay
            loop
          />
        </View>
      </View>
    );
  }
}
