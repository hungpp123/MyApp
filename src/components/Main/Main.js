import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Drawer from 'react-native-drawer';

import Menu from './Menu';
import Shop from './Shop/Shop';
import checkLogin from "../../api/checkLogin.js";
import getToken from "../../api/getToken.js";
import global from "../global.js";
import refreshToken from '../../api/refreshToken.js';

export default class Main extends Component {

  componentDidMount(){
    getToken()
    .then(token => checkLogin(token))
    .then(res => global.onSignIn(res.user))
    .catch(err => console.log("LOI CHECK LOGIN:",err));
  }
  closeControlPanel = () => {
    this.drawer.close()
  };
  openControlPanel = () => {
    this.drawer.open()
  };

  gotoAuthentication() {
     const { navigator } = this.props;
     navigator.push({ name: 'AUTHENTICATION' });
  }

  gotoChangeInfo() {
    const { navigator } = this.props;
    navigator.push({ name: 'CHANGE_INFO' });
  }

  gotoOrderHistory() {
       const { navigator } = this.props;
       navigator.push({ name: 'ORDER_HISTORY' });
   }

  closeControlPanel = () => {
      this.drawer.close();
  };
  openControlPanel = () => {
      this.drawer.open();
  };

  render() {
      const { navigator } = this.props;
      return (
         <Drawer
             ref={(ref) => { this.drawer = ref; }}
             content={<Menu navigator={navigator} />}
             openDrawerOffset={0.4}
             tapToClose
          >
             <Shop open={this.openControlPanel.bind(this)} />
         </Drawer>
      );
  }
}
