import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {style} from './stylesheet';
import emptytop from '../../assets/emptytop.json';
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/Entypo';
import emptybottom from '../../assets/emptybottom.json';

import {connect} from 'react-redux';
import {handleNavigationRequest} from '../../actions';
const mapDispatchToProps = dispatch => {
  return {
    handleNavigation: (...args) => dispatch(handleNavigationRequest(...args)),
  };
};

class EmptyScreen extends Component {
  handleBackNavigation = navigateTo => {
    // console.log(navigateTo, 'hmara');
    this.props.handleNavigation(navigateTo);
  };
  render() {
    // console.log('ghusa to');
    return (
      <View style={style.container}>
        <View style={style.top}>
          <LottieView
            source={emptytop}
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
        <View style={style.bottom}>
          <LottieView
            source={emptybottom}
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
        <View style={style.box}>
          <Text style={style.text}>No Bookmark has been added</Text>
          <Text style={style.text2}>Add your favourite News now !!!</Text>
        </View>
        <View style={style.back}>
          <TouchableOpacity
            style={style.goback}
            activeOpacity={0.5}
            onPress={() => {
              this.handleBackNavigation('Discover');
            }}>
            <Icon
              name="chevron-left"
              size={20}
              // style={{backgroundColor: 'black'}}
              color="rgb(204, 51, 135)"
            />
            <Text>Go Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default connect(null, mapDispatchToProps)(EmptyScreen);
