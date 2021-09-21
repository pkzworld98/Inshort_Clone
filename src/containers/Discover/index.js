import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Text} from 'native-base';
import React, {Component} from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import {showMenuBar} from '../../actions';
import CategoryBox from '../../components/CategoryBox';
import DiscoveryTopItem from '../../components/DiscoveryTopItem';

import Header from '../../components/Header';
import Setting from '../../components/Setting';
import {style} from './stylesheet';
const mapStateToProps = state => {
  return {
    night: state.helper.nightMode,
  };
};
const Stack = createStackNavigator();
class Discover extends Component {
  render() {
    let night = this.props.night;
    const header = ({navigation}) => {
      return (
        <Header navigation={navigation} header={this.props.header}>
          <View style={style.container}>
            <View style={style.top}>
              <DiscoveryTopItem
                icon={'trending-up'}
                text={'Trending'}
                color={!night ? 'white' : 'rgb(156, 154, 154)'}
              />
              <DiscoveryTopItem
                iconstyle={'style'}
                icon={'bookmark'}
                text={'Bookmark'}
                color={!night ? 'white' : 'rgb(156, 154, 154)'}
              />
            </View>
            <View style={style.content}>
              <Text style={style.text} fontSize="2xl">
                Categories
              </Text>

              <CategoryBox />
            </View>
          </View>
        </Header>
      );
    };
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Options" component={header} />

          <Stack.Screen
            name="Setting"
            component={Setting}
            options={{
              headerTitleStyle: style.htext,
              title: 'Settings',
              headerShown: true,
              headerBackImage: () => (
                <Icon
                  style={style.hicon}
                  name="left"
                  color="rgb(204, 51, 135)"
                />
              ),
              headerBackTitleStyle: style.hbtext,
              // headerBackTitle: () => <Text style={{color:rgb(201, 91, 115)"}}>Option</Text>,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default connect(mapStateToProps)(Discover);
