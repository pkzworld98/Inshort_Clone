/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Share,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

import style from './stylesheet';

import {connect} from 'react-redux';

import RNFS from 'react-native-fs';
import {handleFeedClick} from '../../actions';
import Header from '../../components/Header';
import {ActivityIndicator} from 'react-native';
import {Image} from 'react-native-elements';
import {BottomSheet} from 'react-native-elements/dist/bottomSheet/BottomSheet';
import Icon from 'react-native-vector-icons/Entypo';
import FeedHeader from './FeedHeader ';
import BottomStagger from './BottomStagger';
import ViewShot from 'react-native-view-shot';
// // Standard Image
// <Image
//   source={{ uri: image }}
//   style={{ width: 200, height: 200 }}
// />

// Image with custom placeholder content
const mapStateToProps = state => ({
  state: state,
  night: state.helper.nightMode,
  showMenu: state.helper.showMenuToogle,
  bookMarkList: state.news.bookMarkedNewsList,
  newsList: state.news.newsList,
  currentNewsIndex: state.news.currentNewsSlideIndex,
  showBookmark: state.news.showBookMark,
});
const mapDispatchToProps = dispatch => {
  return {
    handleClick: (...args) => dispatch(handleFeedClick(...args)),
  };
};
//

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item,
    };
    // this.myRef = React.createRef();
  }

  handleFeedClick = () => {
    this.setState({
      // show: !this.state.show,
    });
    this.props.handleClick();
  };
  render() {
    console.log(this.props.state, 'yei hai state');
    let isBookmark = false;
    // if (!this.props.showBookMark) {
    let id = this.props.newsList[this.props.currentNewsIndex].id;

    this.props.showBookmark ? (isBookmark = true) : (isBookmark = false);
    if (!this.props.showBookmark) {
      for (let item of this.props.bookMarkList) {
        if (item.id === id) {
          isBookmark = true;
        }
      }
    }

    // }

    let night = this.props.night;
    return (
      <ViewShot
        ref={this.myRef}
        style={{flex: 1}}
        options={{format: 'jpg', quality: 0.9}}>
        {/* {this.props.showMenu ? <FeedHeader /> : null} */}
        <TouchableOpacity
          activeOpacity={1}
          onPress={this.handleFeedClick}
          style={night ? style.ncontainer : style.container}>
          <View style={style.image}>
            <Image
              alt="Alternate Text"
              style={style.imageStyle}
              source={{uri: this.props.item.content_preview_url}}
              PlaceholderContent={<ActivityIndicator />}
            />
          </View>
          <View style={isBookmark ? style.bookmarktitle : style.title}>
            <Text
              noOfLines={3}
              fontSize="lg"
              style={{
                color: isBookmark
                  ? 'rgb(204, 51, 135)'
                  : night
                  ? 'white'
                  : 'black',
                textAlign: 'justify',
                fontFamily: 'OpenSans-Bold',
              }}>
              {this.props.item.title}
            </Text>
          </View>
          <View style={!night ? style.desc : style.ndesc}>
            <Text fontSize="md" style={!night ? style.dtext : style.ndtext}>
              {this.props.item.content}
            </Text>
          </View>
        </TouchableOpacity>
        {isBookmark ? (
          <View style={style.star}>
            <Icon size={23} style={{color: 'rgb(204, 51, 135)'}} name="star" />
          </View>
        ) : null}
      </ViewShot>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
