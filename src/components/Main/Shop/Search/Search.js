import React, {Component} from "react";
import {ScrollView, Text, } from "react-native";

import NavigationExperimental from 'react-native-deprecated-custom-components';

import SearchView from './SearchView.js';
import ProductDetail from '../ProductDetail/ProductDetail.js';
import ListProduct from '../ListProduct/ListProduct.js'

export default class Search extends Component{
  render(){
    return(
      <NavigationExperimental.Navigator
        initialRoute={{name:'SEARCH_VIEW'}}
        renderScene={(route, navigator)=>{
          switch(route.name){
            case 'SEARCH_VIEW': return <SearchView navigator={navigator}/>;
            default: return <ProductDetail navigator={navigator}/>;
          }
        }}
      />
    );
  }
}
