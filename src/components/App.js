import React, { Component } from 'react';
import { View, Text } from 'react-native';

import NavigationExperimental from 'react-native-deprecated-custom-components';

import Authentication from './Authentication/Authentication.js';
import Main from './Main/Main.js';
import ChangeInfo from './ChangeInfo/ChangeInfo.js';
import OrderHistory from './OrderHistory/OrderHistory.js';
import refreshToken from '../api/refreshToken';
//import { StackNavigator } from 'react-navigation';
export default class App extends Component {
  componentDidMount(){
    setInterval(refreshToken, 60*1000);
  }
  render() {
    return (
      <NavigationExperimental.Navigator
        initialRoute={{ name: 'MAIN' }}
        renderScene={(route, navigator) => {
          switch (route.name) {
            case 'MAIN': return <Main navigator={navigator}/>;
            case 'CHANGE_INFO': return <ChangeInfo navigator={navigator}/>;
            case 'AUTHENTICATION': return <Authentication navigator={navigator}/>;
            default: return <OrderHistory navigator={navigator}/>;

          }
        }}
        configureScene={route=>{
          if (route.name==='AUTHENTICATION') return NavigationExperimental.Navigator.SceneConfigs.FloatFromRight;
          return NavigationExperimental.Navigator.SceneConfigs.FloatFromLeft;
        }}
      />
    );
  }
}
