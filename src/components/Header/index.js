import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {style} from './stylesheet';

import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {handleNavigationRequest} from '../../actions';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const mapDispatchToProps = dispatch => {
  return {
    handleNavigation: (...args) => dispatch(handleNavigationRequest(...args)),
  };
};

const mapStateToProps = state => {
  return {
    night: state.helper.nightMode,
    showMenu: state.helper.showMenuToogle,
  };
};
class Header extends Component {
  onClickSetting = () => {
    this.props.navigation.navigate('Setting');
  };
  handler = naviagte => {
    this.props.handleNavigation(naviagte);
  };
  render() {
    let night = this.props.night;
    const navigateTo =
      this.props.header === 'All News' ? 'Discover' : 'All News';
    // console.log(this.props.header, 'pk aya', navigateTo);
    return (
      <View style={style.container}>
        {this.props.showMenu || this.props.header !== 'All News' ? (
          <View style={!night ? style.header : style.nheader}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                this.handler('Discover');
              }}
              style={style.left}>
              {navigateTo === 'Discover' ? (
                <View style={style.boxleft}>
                  <Icon
                    name="left"
                    size={15}
                    // style={{backgroundColor: 'black'}}
                    color={night ? 'black' : 'white'}
                  />
                  <Text
                    bold
                    fontSize="xs"
                    style={night ? style.ntextright : style.textright}>
                    {navigateTo}
                  </Text>
                </View>
              ) : (
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={style.setting}
                  onPress={this.onClickSetting}>
                  <Icon2
                    name="md-settings-sharp"
                    size={20}
                    // style={{backgroundColor: 'black'}}
                    color="white"
                  />
                </TouchableOpacity>
              )}
            </TouchableOpacity>
            <View style={style.middle}>
              <Text style={night ? style.ntext : style.text} fontSize="xl">
                {this.props.header}
              </Text>
            </View>
            <TouchableOpacity
              style={style.right}
              activeOpacity={0.5}
              onPress={() => {
                this.handler('All News');
              }}>
              {navigateTo === 'All News' ? (
                <View style={style.boxright}>
                  <Text
                    bold
                    fontSize="xs"
                    style={night ? style.ntextright : style.textright}>
                    {navigateTo}
                  </Text>
                  <Icon
                    name="right"
                    size={15}
                    // style={{backgroundColor: 'black'}}
                    color="white"
                  />
                </View>
              ) : null}
            </TouchableOpacity>
          </View>
        ) : null}

        <View style={style.content}>{this.props.children}</View>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
