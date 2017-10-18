import React, {Component} from "react";
import {View, Text, Image, StyleSheet } from "react-native";
import TabNavigator from 'react-native-tab-navigator';


import Home from "./Home/Home.js";
import Contact from "./Contact/Contact.js";
import Cart from "./Cart/Cart.js";
import Search from "./Search/Search.js";
import Header from "./Header.js";
import global from "../../../components/global.js";

import initData from '../../../api/initData.js';
import saveCart from '../../../api/saveCart.js';
import getCart from '../../../api/getCart.js';

import homeIconS from "../../../appIcon/home.png";
import homeIcon from "../../../appIcon/home0.png";
import cartIconS from "../../../appIcon/cart.png";
import cartIcon from "../../../appIcon/cart0.png";
import searchIconS from "../../../appIcon/search.png";
import searchIcon from "../../../appIcon/search0.png";
import contactIconS from "../../../appIcon/contact.png";
import contactIcon from "../../../appIcon/contact0.png";

export default class Shop extends Component{
  constructor(props){
    super(props);
    this.state={
      selectedTab:'home',
      types:[],
      topProducts:[],
      cartArray: []
    };
    global.addProductToCart = this.addProductToCart.bind(this);
    global.incrQuantity = this.incrQuantity.bind(this);
    global.decrQuantity = this.decrQuantity.bind(this);
    global.removeProduct = this.removeProduct.bind(this);
    global.gotoSearch = this.gotoSearch.bind(this);
  }
  addProductToCart(product){
    this.setState(
      { cartArray: this.state.cartArray.concat({product: product, quantity: 1})},
      () => saveCart(this.state.cartArray)
    );
  }

  incrQuantity(productId){
    const newCart = this.state.cartArray.map(e =>{
      if(e.product._id !== productId) return e;
      return { product: e.product, quantity: e.quantity + 1};
    });
    this.setState({cartArray: newCart,},
      () => saveCart(this.state.cartArray)
    );
  }

  decrQuantity(productId){
    const newCart = this.state.cartArray.map(e =>{
      if(e.product._id !== productId) return e;
      return { product: e.product, quantity: e.quantity - 1};
    });
    this.setState({cartArray: newCart,},
      () => saveCart(this.state.cartArray)
    );
  }

  removeProduct(productId){
    const newCart = this.state.cartArray.filter(e => e.product._id !== productId);
    this.setState({cartArray: newCart,},
      () => saveCart(this.state.cartArray)
    );
  }

  componentDidMount(){
    initData()
    .then(resJSON => {
      const { type, product }= resJSON;
      this.setState({types: type, topProducts: product});
    });
    getCart()
    .then(cartArray => this.setState({cartArray: cartArray}));
  }

  gotoSearch(){
    this.setState({selectedTab:'search'});
  }

  openMenu(){
    const { open } = this.props;
    open();
  }
  render(){
    const {iconStyle} = styles;
    const {types, selectedTab, topProducts, cartArray} = this.state;
    return(
      <View style={{flex:1}}>
        <Header onOpen={this.openMenu.bind(this)}/>
        <TabNavigator>
          <TabNavigator.Item
            selected={selectedTab === 'home'}
            title="Home"
            onPress={() => this.setState({ selectedTab: 'home' })}
            renderIcon={() => <Image source={homeIcon} style={iconStyle} />}
            renderSelectedIcon={() => <Image source={homeIconS} style={iconStyle} />}
            selectedTitleStyle={{color:"rgba(31, 145, 196, 0.93)"}}
          >
            <Home types={types} topProducts={topProducts}/>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={selectedTab === 'cart'}
            title="Cart"
            onPress={() => this.setState({ selectedTab: 'cart' })}
            renderIcon={() => <Image source={cartIcon} style={iconStyle} />}
            renderSelectedIcon={() => <Image source={cartIconS} style={iconStyle} />}
            badgeText={cartArray.length}
            selectedTitleStyle={{color:"rgba(31, 145, 196, 0.93)"}}
          >
            <Cart cartArray={cartArray}/>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={selectedTab === 'search'}
            title="Search"
            onPress={() => this.setState({ selectedTab: 'search' })}
            renderIcon={() => <Image source={searchIcon} style={iconStyle} />}
            renderSelectedIcon={() => <Image source={searchIconS} style={iconStyle} />}
            selectedTitleStyle={{color:"rgba(31, 145, 196, 0.93)"}}
          >
            <Search />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={selectedTab === 'contact'}
            title="Contact"
            onPress={() => this.setState({ selectedTab: 'contact' })}
            renderIcon={() => <Image source={contactIcon} style={iconStyle} />}
            renderSelectedIcon={() => <Image source={contactIconS} style={iconStyle} />}
            selectedTitleStyle={{color:"rgba(31, 145, 196, 0.93)"}}
          >
            <Contact />
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconStyle: {width:20, height: 20}
});
