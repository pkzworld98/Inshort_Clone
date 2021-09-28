import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Octicons';
import Icon3 from 'react-native-vector-icons/Ionicons';

import {connect} from 'react-redux';
import {addToBookMark, handleNavigationRequest} from '../../../actions';
import {style} from './stylesheet';
import ViewShot from 'react-native-view-shot';
const mapStateToProps = state => {
  return {
    night: state.helper.nightMode,
    bookMarkList: state.news.bookMarkedNewsList,
    newsList: state.news.newsList,
    currentNewsIndex: state.news.currentNewsSlideIndex,
    showBookmark: state.news.showBookMark,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleNavigation: (...args) => dispatch(handleNavigationRequest(...args)),
    addToBookMarkList: (...args) => dispatch(addToBookMark(...args)),
  };
};
class BottomStagger extends Component {
  addToBookMark = isBookmark => {
    console.log(isBookmark, 'ghusa');

    this.props.addToBookMarkList(
      isBookmark,

      this.props.showBookmark
        ? this.props.bookMarkList[this.props.currentNewsIndex]
        : this.props.newsList[this.props.currentNewsIndex],
    );
  };
  render() {
    let id = this.props.newsList[this.props.currentNewsIndex].id;
    let isBookmark = false;
    this.props.showBookmark ? (isBookmark = true) : (isBookmark = false);
    if (!this.props.showBookmark) {
      for (let item of this.props.bookMarkList) {
        if (item.id === id) {
          isBookmark = true;
        }
      }
    }

    console.log(isBookmark, 'render ke andar');
    const night = this.props.night;
    return (
      <View style={night ? style.ncontainer : style.container}>
        <View style={style.left}>
          <TouchableOpacity activeOpacity={0.5} onPress={this.props.share}>
            <Icon
              name="sharealt"
              size={20}
              // style={{backgroundColor: 'black'}}
              color="white"
            />
          </TouchableOpacity>
        </View>

        <View style={style.right}>
          {isBookmark ? (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                this.addToBookMark(isBookmark);
              }}>
              <Icon3
                name="bookmark"
                size={20}
                // style={{backgroundColor: 'black'}}
                color="white"
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                this.addToBookMark(isBookmark);
              }}>
              <Icon3
                name="bookmark-outline"
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

export default connect(mapStateToProps, mapDispatchToProps)(BottomStagger);
