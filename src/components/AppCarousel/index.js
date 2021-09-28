import React, {Component} from 'react';
import Carousel from 'react-native-snap-carousel';
import style from './stylesheet';
import {
  Dimensions,
  Share,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import ViewShot from 'react-native-view-shot';
import RNFS from 'react-native-fs';
import Feed from '../../containers/Feed';
import {connect} from 'react-redux';
import {fetchNews, handleIndexChange} from '../../actions';
import Header from '../Header';
import LoadingScreen from '../LoadingScreen';
import FeedHeader from '../../containers/Feed/FeedHeader ';
import BottomStagger from '../../containers/Feed/BottomStagger';
import EmptyScreen from '../EmptyScreen';

const {width, height} = Dimensions.get('window');
const mapDispatchToProps = dispatch => {
  return {
    indexHandler: (...args) => dispatch(handleIndexChange(...args)),
    fetchNews: (...args) => dispatch(fetchNews(...args)),
  };
};
const mapStateToProps = state => {
  return {
    loading: state.news.loadingState,
    page: state.news.page,
    bookMarkedNewsList: state.news.bookMarkedNewsList,
    showMenu: state.helper.showMenuToogle,
    showBookmark: state.news.showBookMark,

    offSet: state.news.newsOffset,
  };
};

class AppCarousel extends Component {
  constructor() {
    super();
    // this.myRef = React.createRef();
  }
  _renderItem = ({item, index}) => {
    return <Feed item={item} />;
  };
  handler = index => {
    this.props.indexHandler(index);
  };
  onEndReachedHandler = showBookmark => {
    showBookmark
      ? null
      : this.props.fetchNews(this.props.page + 1, this.props.offSet);
  };
  moveTotop = () => {
    this.carousel.snapToItem(0);
  };
  handlecaptureAndShareScreenshot = () => {
    console.log(this.myRef, 'screenshot share');
    // console.log('kaam to kar rha hai');
    this.myRef.capture().then(uri => {
      RNFS.readFile(uri, 'base64').then(res => {
        let urlString = 'data:image/jpeg;base64,' + res;
        let options = {
          title: 'Share Title',
          message: 'Share Message',
          url: urlString,
          type: 'image/jpeg',
        };
        Share.open(options)
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            err && console.log(err);
          });
      });
    });
  };

  render() {
    let wait;
    setTimeout(() => {
      wait = this.props.loading;
    }, 5000);
    console.log(this.props.showMenu, 'pk  aya');
    return this.props.bookMarkedNewsList.length === 0 &&
      !this.props.loading &&
      this.props.showBookmark ? (
      <EmptyScreen />
    ) : (
      <ViewShot
        ref={ref => (this.myRef = ref)}
        style={{flex: 1}}
        options={{format: 'jpg', quality: 0.9}}>
        {this.props.loading ? (
          <LoadingScreen />
        ) : (
          <View style={{flex: 1}}>
            {this.props.showMenu ? <FeedHeader top={this.moveTotop} /> : null}
            <Carousel
              layout={'default'}
              ref={ref => (this.carousel = ref)}
              data={
                this.props.showBookmark
                  ? this.props.bookMarkedNewsList
                  : this.props.newsList
              }
              sliderWidth={width}
              itemWidth={width}
              // slideStyle={{width: viewportWidth}}
              renderItem={this._renderItem}
              onSnapToItem={this.handler}
              // activeAnimationType="spring"
              // activeSlideAlignment="start"
              // layout="default"
              enableMomentum={true}
              swipeThreshold={70}
              // useScrollView={true}
              inactiveSlideOpacity={1}
              // inactiveSlideShift={0}
              // inactiveSlideScale={0.8}

              itemHeight={height}
              sliderHeight={height}
              vertical={true}
              onEndReached={() => {
                this.onEndReachedHandler(this.props.showBookmark);
              }}
            />
            {this.props.showMenu ? (
              <BottomStagger share={this.handlecaptureAndShareScreenshot} />
            ) : null}
          </View>
        )}
      </ViewShot>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppCarousel);
