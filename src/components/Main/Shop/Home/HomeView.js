import React, {Component} from "react";
import {ScrollView, Text, } from "react-native";

import Collection from "./Collection.js";
import Category from "./Category";
import TopProduct from "./TopProduct.js";

export default class HomeView extends Component{
  render(){
    const {types, topProducts} = this.props;
    return(
      <ScrollView style={{flex:1, backgroundColor:'rgb(194, 216, 233)'}}>
        <Collection />
        <Category navigator={this.props.navigator} types={types}/>
        <TopProduct navigator={this.props.navigator} topProducts={topProducts}/>
      </ScrollView>
    );
  }
}
