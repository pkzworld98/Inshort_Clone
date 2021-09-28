import React, {Component} from 'react';
import {SafeAreaView, Settings, Text, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {connect} from 'react-redux';
import Discover from '../Discover';

import {Dimensions} from 'react-native';
import PagerView from 'react-native-pager-view';
import WebViewContainer from '../WebViewContainer';
import AppCarousel from '../../components/AppCarousel';
import {fetchBookMark, fetchNews} from '../../actions';
import {fetchCategory} from '../../actions/category';
import LoadingScreen from '../../components/LoadingScreen';
import Setting from '../../components/Setting';

const {width, height} = Dimensions.get('window');
const mapStateToProps = state => ({
  app: state,
  news: state.news,
  navigateTo: state.helper.NaviagteToPageIndex,
});
const mapDispatchToProps = disptach => {
  return {
    fetchNews: (...args) => disptach(fetchNews(...args)),
    fetchCategory: (...args) => disptach(fetchCategory(...args)),
    bookMarkedNewslist: (...args) => disptach(fetchBookMark(...args)),
  };
};

class Home extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();
  }
  componentDidMount() {
    this.props.fetchNews(1);
    this.props.fetchCategory();
    // this.props.bookMarkedNewslist();
  }
  componentDidUpdate() {
    this.props.navigateTo !== null
      ? this.myRef.current.setPage &&
        this.myRef.current.setPage(this.props.navigateTo)
      : null;
  }

  render() {
    console.log(this.props.app, 'helo');
    return (
      <PagerView
        style={{flex: 1}}
        ref={this.myRef}
        // setPage={this.props.navigateTo}
        initialPage={1}>
        <View key="1">
          {/* <Setting /> */}
          <Discover header={'Discover'} />
          {/* <Discover header={'Discover'} /> */}
        </View>
        <View key="2">
          <AppCarousel
            newsList={this.props.news.newsList}
            header={'All News'}
          />
        </View>
        <View key="3">
          <WebViewContainer news={this.props.news} />
        </View>
      </PagerView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
