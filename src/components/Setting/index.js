import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Linking} from 'react-native';
import {ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {style} from './stylesheet';
import {Switch} from 'react-native-elements';
import Share from 'react-native-share';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {handleDarkModeToggle} from '../../actions';

const mapStateToProps = state => ({
  night: state.helper.nightMode,
});
const mapDispatchToProps = dispatch => ({
  nightMode: () => dispatch(handleDarkModeToggle()),
});

class Setting extends Component {
  constructor() {
    super();
    this.state = {
      notifications: false,
      // nightmode: this.props.night,
    };
  }
  handleNotificationSwitch = () => {
    this.setState({
      notifications: !this.state.notifications,
    });
  };
  handleNightModeSwitch = () => {
    // this.setState({
    //   nightmode: !this.state.nightmode,
    // });
    this.props.nightMode();
  };
  handleFeedback = () => {
    Linking.openURL('mailto:prabhat98kumar@gmail.com');
  };
  handleShare = async () => {
    const shareOption = {
      message: 'Now read news anywhere. All news with just one click',
    };
    await Share.open(shareOption)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };
  render() {
    const night = this.props.night;
    // console.log(night, 'night');

    return (
      <View>
        <ListItem
          style={!night ? style.container : style.ncontainer}
          bottomDivider>
          {/* <Icon name={item.icon} /> */}
          <ListItem.Content style={!night ? style.option : style.noption}>
            <Icon
              name="notifications"
              color={!night ? 'rgb(201, 91, 115)' : 'grey'}
              size={17}
            />
            <ListItem.Title style={style.optionText}>
              Notifications
            </ListItem.Title>
          </ListItem.Content>
          <Switch
            value={this.state.notifications}
            onChange={this.handleNotificationSwitch}
            color="rgb(201, 91, 115)"
          />
          {/* <ListItem.Chevron /> */}
        </ListItem>
        <ListItem bottomDivider>
          <ListItem.Content style={!night ? style.option : style.noption}>
            <Icon
              name="moon"
              color={!night ? 'rgb(201, 91, 115)' : 'grey'}
              size={17}
            />
            <View style={style.listitem}>
              <ListItem.Title
                style={{fontSize: 15, fontFamily: 'Roboto-Black'}}>
                Night Mode
              </ListItem.Title>
              <Text style={style.stext}>For better readability at night</Text>
            </View>
          </ListItem.Content>
          <Switch
            value={this.props.night}
            onChange={this.handleNightModeSwitch}
            color="rgb(201, 91, 115)"
          />
          {/* <ListItem.Chevron /> */}
        </ListItem>
        <View style={!night ? style.bottom : style.nbottom}>
          <TouchableHighlight
            underlayColor="rgb(214, 96, 118)"
            activeOpacity={0.5}
            style={style.bitem}
            onPress={this.handleShare}>
            <Text style={style.btext}>Share This App</Text>
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.5}
            style={style.bitem}
            onPress={this.handleFeedback}>
            <Text style={style.btext}>Feedback</Text>
          </TouchableHighlight>
          <TouchableHighlight activeOpacity={0.5} style={style.bitem}>
            <Text style={style.btext}>Terms & condition</Text>
          </TouchableHighlight>
          <TouchableHighlight activeOpacity={0.5} style={style.bitem}>
            <Text style={style.btext}>Privacy</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Setting);
