import React, {Component} from "react";
import {View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";



const {width, height} = Dimensions.get("window");
//const url = 'http://192.168.1.92:81/api/images/type/';
const url = 'http://192.168.1.92:3000/images/type/';
export default class Category extends Component{
  gotoListProduct(category){
    const {navigator} = this.props;
    navigator.push({name:'LIST_PRODUCT', category});
  }
  render(){
    const {types } = this.props;
    const {wrapper, textStyle, imageStyle, cateTitle} = styles;
    const swiper = (
      <Swiper width={imageWidth} height={imageHeight}>
        {types.map(e=>(
          <TouchableOpacity onPress={() => this.gotoListProduct(e)} key={e._id}>
            <Image source={{uri:`${url}${e.image}`}} style={imageStyle}>
              <Text style={cateTitle}>{e.name}</Text>
            </Image>
          </TouchableOpacity>
        ))}
      </Swiper>
    );
    return(
      <View style={wrapper}>
        <View style={{ justifyContent:"center", height:50}}>
          <Text style={textStyle}>LIST OF CATEGORY</Text>
        </View>
        <View style={{flex:4, justifyContent:"flex-end"}}>
          {types.length ? swiper : null}
        </View>
      </View>
    );
  }
}
//933*465
const imageWidth = width -40;
const imageHeight = (imageWidth/2);
const styles = StyleSheet.create({
  wrapper:{
    width:width-20,
    backgroundColor:"#FFF",
    margin:10,
    shadowColor: "rgb(20, 27, 36)",
    shadowOffset:{width:0, height:3},
    shadowOpacity: 0.2,
    padding:10,
    paddingTop:0
  },
  textStyle:{
    fontSize: 20,
    color: "rgb(216, 219, 233)"
  },
  imageStyle:{
    height:imageHeight,
    width:imageWidth,
    justifyContent:"center",
    alignItems:"center"
  },
  cateTitle:{
    fontSize:15,
    fontFamily:"Avenir",
    color:"#a47e7e",
  }

});
