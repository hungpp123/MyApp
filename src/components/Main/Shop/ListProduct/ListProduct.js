import React, { Component } from 'react';
import { View, Text, TouchableOpacity,
        StyleSheet, ScrollView, Image } from 'react-native';

import backList from "../../../../appIcon/backList.png";
import sp1 from "../../../../temp/sp1.jpeg";
export default class ListProduct extends Component {
  goBack(){
    const {navigator} = this.props;
    navigator.pop();
  }
  gotoDetail(){
    const {navigator} = this.props;
    navigator.push({name:'PRODUCT_DETAIL'});
  }
  render() {
    const { container, header, wrapper, backStyle,
            titleStyle, productContainer, productImage,
            productInfo, lastRowInfo,
            txtName, txtPrice, txtMaterial, txtColor, txtShowDetail} = styles;
    return (
      <View style={container}>
        <ScrollView style={wrapper}>
          <View style={header}>
            <TouchableOpacity onPress={this.goBack.bind(this)}>
              <Image source={backList} style={backStyle}/>
            </TouchableOpacity>
            <Text style={titleStyle}>Party Dress</Text>
            <View style={{width:30}}/>
          </View>
          <View style={productContainer}>
              <Image style={productImage} source={sp1}/>
            <View style={productInfo}>
              <Text style={txtName}>Lace Sleeve Si</Text>
              <Text style={txtPrice}>117$</Text>
              <Text style={txtMaterial}>Material Silk</Text>
              <View style={lastRowInfo}>
                <Text style={txtColor}>Color RoyalBlue</Text>
                <View style={{backgroundColor:'cyan', height:16, width:16, borderRadius:8}}/>
                <TouchableOpacity>
                  <Text style={txtShowDetail}>SHOW DETAILS</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={productContainer}>
            <Image style={productImage} source={sp1}/>
            <View style={productInfo}>
              <Text style={txtName}>Lace Sleeve Si</Text>
              <Text style={txtPrice}>117$</Text>
              <Text style={txtMaterial}>Material Silk</Text>
              <View style={lastRowInfo}>
                <Text style={txtColor}>Color RoyalBlue</Text>
                <View style={{backgroundColor:'cyan', height:16, width:16, borderRadius:8}}/>
                <TouchableOpacity>
                  <Text style={txtShowDetail}>SHOW DETAILS</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={productContainer}>
            <Image style={productImage} source={sp1}/>
            <View style={productInfo}>
              <Text style={txtName}>Lace Sleeve Si</Text>
              <Text style={txtPrice}>117$</Text>
              <Text style={txtMaterial}>Material Silk</Text>
              <View style={lastRowInfo}>
                <Text style={txtColor}>Color RoyalBlue</Text>
                <View style={{backgroundColor:'cyan', height:16, width:16, borderRadius:8}}/>
                <TouchableOpacity>
                  <Text style={txtShowDetail}>SHOW DETAILS</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={productContainer}>
            <Image style={productImage} source={sp1}/>
            <View style={productInfo}>
              <Text style={txtName}>Lace Sleeve Si</Text>
              <Text style={txtPrice}>117$</Text>
              <Text style={txtMaterial}>Material Silk</Text>
              <View style={lastRowInfo}>
                <Text style={txtColor}>Color RoyalBlue</Text>
                <View style={{backgroundColor:'cyan', height:16, width:16, borderRadius:8}}/>
                <TouchableOpacity>
                  <Text style={txtShowDetail}>SHOW DETAILS</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
     flex: 1,
     backgroundColor: 'rgb(194, 216, 233)',
  },
  header:{
    height:50,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding:5,
  },
  wrapper:{
    backgroundColor: '#FFF',
    shadowColor: "#1f3226",
    shadowOffset: {width:0, height:3},
    shadowOpacity: 0.2,
    margin:10,
    paddingHorizontal:10,
  },
  backStyle:{
    width:30,
    height:30
  },
  titleStyle:{
    fontFamily: 'Avenir',
    color: '#c61a67',
    fontSize:20
  },
  productContainer:{
    flexDirection:'row',
    paddingVertical:15,
    borderTopColor: "rgb(198, 189, 196)",
    borderBottomColor: "#FFF",
    borderLeftColor: "#FFF",
    borderRightColor: "#FFF",
    borderWidth:1,
  },
  productImage:{
    width:90,
    height: (90*452)/361,
  },
  lastRowInfo:{
    flexDirection:"row",
    justifyContent:'space-between',
    alignItems: 'center'
  },
  productInfo:{
    justifyContent:'space-between',
    marginLeft:15,
    flex:1
  },
  txtName:{
    fontFamily: "Avenir",
    color:"#b8a4b2",
    fontSize:20,
    fontWeight: '400'
  },
  txtPrice:{
    fontFamily: 'Avenir',
    color: '#c61a67',
  },
  txtMaterial:{
    fontFamily: 'Avenir',
  },
  txtColor:{
    fontFamily: 'Avenir',
  },
  txtShowDetail:{
    fontFamily: 'Avenir',
    color: '#c61a67',
    fontSize:11,
  }
});
