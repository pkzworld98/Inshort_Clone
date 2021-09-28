import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import {showBookMarkedNews, showTrendingNews} from '../../actions';
import {style} from './stylesheet';
const mapStateToProps = state => ({
  night: state.helper.nightMode,
  bookMarkList: state.news.bookMarkedNewsList,
});
const mapDispatchToProps = dispatch => ({
  showTrending: () => dispatch(showTrendingNews()),
  showBookMark: (...args) => dispatch(showBookMarkedNews(...args)),
});
class DiscoveryTopItem extends Component {
  handler = name => {
    name === 'Trending'
      ? this.props.showTrending()
      : this.props.showBookMark(this.props.bookMarkList);
  };
  render() {
    let night = this.props.night;
    return (
      <TouchableOpacity
        style={!night ? style.container : style.ncontainer}
        onPress={() => {
          this.handler(this.props.text);
        }}>
        <View style={style.icon}>
          {this.props.iconstyle === 'style' ? (
            <Icon2
              // style={{backgroundColor: 'black'}}
              size={40}
              name={this.props.icon}
              color={this.props.color}
            />
          ) : (
            <Icon size={40} name={this.props.icon} color={this.props.color} />
          )}
        </View>
        <View style={style.name}>
          <Text style={!night ? style.text : style.ntext}>
            {this.props.text}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiscoveryTopItem);
