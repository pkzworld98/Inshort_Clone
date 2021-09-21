import React, {Component} from 'react';
import Carousel from 'react-native-snap-carousel';
import {
  Dimensions,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import Feed from '../../containers/Feed';
import {connect} from 'react-redux';
import {handleIndexChange} from '../../actions';
import Header from '../Header';
import LoadingScreen from '../LoadingScreen';

const {width, height} = Dimensions.get('window');
const mapDispatchToProps = dispatch => {
  return {
    indexHandler: (...args) => dispatch(handleIndexChange(...args)),
  };
};
const mapStateToProps = state => {
  return {
    loading: state.news.loadingState,
  };
};

class AppCarousel extends Component {
  _renderItem = ({item, index}) => {
    return <Feed item={item} />;
  };
  handler = index => {
    // this.setState({activeIndex: index});
    // console.log(index, 'pk');
    this.props.indexHandler(index);
  };

  render() {
    let wait;
    setTimeout(() => {
      wait = this.props.loading;
    }, 5000);
    // console.log(this.props.header, 'pk  aya');
    return (
      <Header header={this.props.header}>
        {this.props.loading ? (
          <LoadingScreen />
        ) : (
          <Carousel
            layout={'default'}
            ref={ref => (this.carousel = ref)}
            data={this.props.newsList}
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
          />
        )}
      </Header>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppCarousel);
