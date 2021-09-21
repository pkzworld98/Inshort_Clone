/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {TouchableHighlight, TouchableOpacity, View} from 'react-native';
// import {Image} from 'native-base';
import style from './stylesheet';
import {Text, VStack, Center, NativeBaseProvider} from 'native-base';
import {connect} from 'react-redux';
import {handleFeedClick} from '../../actions';
import Header from '../../components/Header';
import {ActivityIndicator} from 'react-native';
import {Image} from 'react-native-elements';

// // Standard Image
// <Image
//   source={{ uri: image }}
//   style={{ width: 200, height: 200 }}
// />

// Image with custom placeholder content
const mapStateToProps = state => ({
  night: state.helper.nightMode,
});
const mapDispatchToProps = dispatch => {
  return {
    handleClick: (...args) => dispatch(handleFeedClick(...args)),
  };
};

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item,
    };
  }

  render() {
    let night = this.props.night;
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={this.props.handleClick}
        style={style.container}>
        <View style={style.image}>
          <Image
            resizeMethod="resize"
            alt="Alternate Text"
            style={style.imageStyle}
            source={{uri: this.props.item.content_preview_url}}
            PlaceholderContent={<ActivityIndicator />}
          />
        </View>
        <View style={style.title}>
          <Text
            noOfLines={3}
            fontSize="lg"
            style={{
              color: 'black',
              textAlign: 'justify',
              fontFamily: 'Roboto-Black',
            }}>
            {this.props.item.title}
          </Text>
        </View>
        <View style={!night ? style.desc : style.ndesc}>
          <Text fontSize="md" style={!night ? style.dtext : style.ndtext}>
            {this.props.item.content}
          </Text>
        </View>
        <View style={style.extra}>
          {/* <Text fontSize="md" style={{color: 'grey', textAlign: 'justify'}}>
            {this.props.item.content}
          </Text> */}
        </View>
      </TouchableOpacity>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
