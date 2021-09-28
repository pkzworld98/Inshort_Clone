import React, {Component} from 'react';
import {Linking, Text, Touchable, TouchableOpacity, View} from 'react-native';

import {WebView} from 'react-native-webview';
import {style} from './stylesheet';

import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import {handleNavigationRequest} from '../../actions';
import {Box, IconButton, Stagger, useDisclose} from 'native-base';
import Clipboard from '@react-native-clipboard/clipboard';
import LoadingScreen from '../../components/LoadingScreen';
const mapDispatchToProps = dispatch => {
  return {
    handleNavigation: (...args) => dispatch(handleNavigationRequest(...args)),
  };
};

const mapSateToProps = state => {
  return {
    night: state.helper.nightMode,
  };
};
const getHostname = url => {
  // use URL constructor and return hostname
  const matches = url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
  // extract hostname (will be null if no match is found)
  return matches && matches[1];
};
class WebViewContainer extends Component {
  constructor() {
    super();
    this.state = {
      staggerToggle: false,
    };
  }

  handleStaggerToggle = () => {
    this.setState({
      staggerToggle: !this.state.staggerToggle,
    });
  };
  handleBackNavigation = navigateTo => {
    // console.log(navigateTo, 'hmara');
    this.props.handleNavigation(navigateTo);
  };
  handleCopyText = news => {
    Clipboard.setString(news);
    this.setState({
      staggerToggle: !this.state.staggerToggle,
    });
  };
  render() {
    let night = this.props.night;
    // const {isOpen, onToggle} = useDisclose();
    let header;
    let news;
    try {
      news =
        this.props.news.newsList.length !== 0
          ? this.props.news.newsList[this.props.news.currentNewsSlideIndex]
              .source_url
          : null;
      header = news ? getHostname(news) : null;
    } catch {
      console.log('error');
    }

    // console.log(this.state.staggerToggle, 'yei aya', news);

    return (
      <View style={style.parent}>
        {news ? (
          <View style={style.container}>
            <View style={!night ? style.top : style.ntop}>
              <View style={style.left}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => {
                    this.handleBackNavigation('All News');
                  }}>
                  <Icon
                    name="chevron-left"
                    size={20}
                    // style={{backgroundColor: 'black'}}
                    color="white"
                  />
                </TouchableOpacity>
              </View>
              <View style={style.middle}>
                <Text style={!night ? style.text : style.ntext}>{header}</Text>
              </View>
              <View style={style.right}>
                {/* <Box> */}
                {/* <Box
              alignItems="center"
              minH={220}
              style={{borderWidth: 1, borderColor: 'white'}}> */}
                {this.state.staggerToggle ? (
                  <View style={!night ? style.stagger : style.nstagger}>
                    <TouchableOpacity
                      activeOpacity={0.5}
                      // onPress={() => {
                      //   this.handleBackNavigation('All News');
                      // }}
                      onPress={() => Linking.openURL(news)}>
                      <View style={style.staggerItem}>
                        <Icon
                          name="globe"
                          size={20}
                          // style={{backgroundColor: 'rgb(40,41,40)'}}
                          color={!night ? 'rgb(204, 51, 135)' : 'white'}
                        />
                        <Text
                          style={
                            !night ? style.stageerText : style.nstageerText
                          }>
                          Open in Browser
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.5}
                      onPress={() => {
                        this.handleCopyText(news);
                      }}>
                      <View style={style.staggerItem}>
                        <Icon2
                          name="copy1"
                          size={20}
                          // style={{backgroundColor: 'rgb(40,41,40)'}}
                          color={!night ? 'rgb(204, 51, 135)' : 'white'}
                        />
                        <Text
                          style={
                            !night ? style.stageerText : style.nstageerText
                          }>
                          Copy Link
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                ) : null}

                <TouchableOpacity
                  // activeOpacity={1}
                  onPress={this.handleStaggerToggle}>
                  <Icon
                    name="dots-three-vertical"
                    size={20}
                    // style={{backgroundColor: 'black'}}
                    color="white"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={style.content}>
              <WebView
                source={{uri: news}}
                startInLoadingState
                scrollEnabled
                scalesPageToFit
                showsHorizontalScrollIndicator={false}
                javaScriptEnabled={true}
                zoomable={false}
              />
            </View>
          </View>
        ) : (
          <LoadingScreen />
        )}
      </View>
    );
  }
}

export default connect(mapSateToProps, mapDispatchToProps)(WebViewContainer);
