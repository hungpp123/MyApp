import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image, TextInput, StyleSheet } from 'react-native';

import icLogo  from '../../../appIcon/logo.jpg';
import icMenu  from '../../../appIcon/ic_menu.png';
const url = 'http://192.168.1.92:3000/images/appIcon/';

const { height } = Dimensions.get('window');

export default class Header extends Component{
  render(){
    const { wrapper, row1, textInput, iconStyle, titleStyle} = styles;
    return(
      <View style={wrapper}>
        <View style={row1}>
          <TouchableOpacity onPress={this.props.onOpen}>
            <Image source={icMenu} style={iconStyle}/>
          </TouchableOpacity>
          <Text style={titleStyle}>SHOP NOW</Text>
          <Image source={icLogo} style={iconStyle}/>
        </View>
        <TextInput style={textInput}
                  placeholder="What do you want to buy?"
                  underlineColorAndroid="transparent"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {height: height/8, backgroundColor:"rgba(31, 145, 196, 0.93)",padding:10, justifyContent:"space-around"},
  row1: {flexDirection:"row", justifyContent:"space-between"},
  textInput: {height: height/23,backgroundColor:"#FFF", paddingLeft:10, paddingVertical:0},
  titleStyle: {color:"#FFF", fontFamily:'Avenir',fontSize:20},
  iconStyle: {width:25,height:25}
});
