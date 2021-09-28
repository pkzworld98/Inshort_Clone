import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';

import {connect} from 'react-redux';
import {fetchNews, handleNavigationRequest} from '../../../actions';
import {style} from './stylesheet';
const mapStateToProps = state => {
  return {
    night: state.helper.nightMode,
    toggle: state.news.currentNewsSlideIndex,
    showBookmark: state.news.showBookMark,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleNavigation: (...args) => dispatch(handleNavigationRequest(...args)),
    handleReloadNews: (...args) => dispatch(fetchNews(1)),
  };
};
class FeedHeader extends Component {
  handleBackNavigation = navigateTo => {
    console.log(navigateTo, 'hmara');
    this.props.handleNavigation(navigateTo);
  };
  render() {
    const night = this.props.night;
    return (
      <View style={night ? style.ncontainer : style.container}>
        <View style={style.left}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={style.tleft}
            onPress={() => {
              this.handleBackNavigation('Discover');
            }}>
            <Icon
              name="left"
              size={15}
              // style={{backgroundColor: 'black'}}
              color="white"
            />
            <Text style={[night ? style.ntext : style.text, {color: 'white'}]}>
              Discover
            </Text>
          </TouchableOpacity>
        </View>
        <View style={style.middle}>
          {this.props.showBookmark ? (
            <Text style={!night ? style.text : style.ntext}>
              My Favourite News
            </Text>
          ) : (
            <Text style={!night ? style.text : style.ntext}>My Feed</Text>
          )}
        </View>
        <View style={style.right}>
          {this.props.toggle === 0 ? (
            <TouchableOpacity
              activeOpacity={0.5}
              style={style.tleft}
              onPress={this.props.handleReloadNews}>
              <Icon
                name="reload1"
                size={20}
                // style={{backgroundColor: 'black'}}
                color="white"
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              activeOpacity={0.5}
              style={style.tleft}
              onPress={this.props.top}>
              <Icon2
                name="align-top"
                size={20}
                // style={{backgroundColor: 'black'}}
                color="white"
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedHeader);
