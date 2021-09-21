import {style} from './stylesheet';

import React, {Component} from 'react';
import {FlatList, ScrollView, TouchableOpacity, View} from 'react-native';
import {Image, Text} from 'native-base';
import {connect} from 'react-redux';
import {flexGrow} from 'styled-system';
import {filterNews, handleNavigationRequest} from '../../actions';
const mapStateToProps = state => {
  return {
    categoryList: state.category.categoryList,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    filterNews: (...args) => dispatch(filterNews(...args)),
  };
};
class CategoryBox extends Component {
  handleClick = label => {
    this.props.filterNews(label);
  };
  render() {
    return (
      // <View style={style.list}>
      //   <FlatList
      //     // style={{flexDirection: 'row'}}
      //     horizontal={false}
      //     // style={style.list}
      //     // contentContainerStyle={{flex: 1}}
      //     data={this.props.categoryList}
      //     keyExtractor={this.props.categoryList.id}
      //     numColumns={3}
      //     renderItem={renderItem}
      //   />
      // </View>
      <View style={style.scrollview}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          // style={style.scrollview}
        >
          <View style={style.scrollcontent}>
            {this.props.categoryList.map(item => (
              <TouchableOpacity
                onPress={() => {
                  this.handleClick(item.label);
                }}
                activeOpacity={0.3}
                key={item.id}
                style={style.scrollcategory}>
                <View style={style.image}>
                  <Image
                    alt="hello"
                    style={style.imageUrl}
                    source={{uri: item.category_image_url}}
                  />
                </View>
                <View style={style.categoryName}>
                  <Text style={style.text} fontSize="sm">
                    {item.label}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* <View style={style.scrollcontent}>
            {.map(item => (
              <Text>he</Text>
              // <TouchableOpacity
              //   onPress={() => {
              //     this.handleClick(item.id);
              //   }}
              //   activeOpacity={1}
              //   key={item.id}
              //   // style={style.scrollcategory}
              // >
              //   <View style={style.image}>
              //     <Image
              //       style={style.imageUrl}
              //       source={{uri: item.category_image_url}}
              //     />
              //   </View>
              //   <View style={style.categoryName}>
              //     <Text style={style.text} fontSize="sm">
              //       {item.label}
              //     </Text>
              //   </View>
              // </TouchableOpacity>
            ))}
          </View> */}
        </ScrollView>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryBox);
