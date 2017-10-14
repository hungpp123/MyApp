import React, {Component} from "react";
import {View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

import profileIcon from "../../temp/profile.png";
import global from '../global.js';
import saveToken from '../../api/saveToken.js';
const urlProfile = 'http://192.168.1.92:3000/images/appIcon/profile.jpg';
const urlBg = 'http://192.168.1.92:3000/images/appIcon/bg.jpg';

export default class Menu extends Component{
  constructor(props){
    super(props);
    this.state = {user: null};
    global.onSignIn = this.onSignIn.bind(this);
  }

  onSignIn(user){
    this.setState({user: user});
  }

  onSignOut(){
    this.setState({user: null});
    saveToken('');
  }
  gotoAuthentication(){
    const { navigator } = this.props;
    navigator.push({name: 'AUTHENTICATION'});
  }
  gotoChangeInfo(){
    const { navigator } = this.props;
    navigator.push({name: 'CHANGE_INFO', user: this.state.user});
  }

  gotoOrderHistory(){
    const { navigator } = this.props;
    navigator.push({name: 'ORDER_HISTORY'});
  }
  render(){
    const {container, profile, btnStyle,
       btnText, btnSignInStyle, btnTextSignIn,
       loginContainer, username
     } = styles;
     const {user} = this.state;
    const logoutJSX = (
      <View style={{flex:1}}>
        <TouchableOpacity style={btnStyle} onPress={this.gotoAuthentication.bind(this)}>
          <Text style={btnText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
    const loginJSX=(
      <View style={loginContainer}>
        <Text style={username}>{user ? user.username : ''}</Text>
        <View>
          <TouchableOpacity style={btnSignInStyle} onPress={this.gotoOrderHistory.bind(this)}>
            <Text style={btnTextSignIn}>Order History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={btnSignInStyle} onPress={this.gotoChangeInfo.bind(this)}>
            <Text style={btnTextSignIn}>Change Info</Text>
          </TouchableOpacity>
          <TouchableOpacity style={btnSignInStyle}  onPress={this.onSignOut.bind(this)}>
            <Text style={btnTextSignIn}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
    const mainJSX = this.state.user ? loginJSX : logoutJSX;
    return(
      <View style={container}>
        <Image source={{uri: urlProfile}} style={profile}/>
        {mainJSX}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"rgba(31, 145, 196, 0.93)",
    borderRightWidth:3,
    borderColor:"#FFF",
    alignItems:"center",
  },
  profile:{
    width:120,
    height:120,
    borderRadius:60,
    marginVertical:30
  },
  btnStyle:{
    height: 60,
    backgroundColor:"#FFF",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:5,
    paddingHorizontal:70
  },
  btnText:{
    color:"rgba(31, 145, 196, 0.93)",
    fontFamily:"Avenir",
    fontSize:20
  },
  btnSignInStyle:{
    height: 60,
    backgroundColor:"#FFF",
    borderRadius:5,
    width:200,
    marginBottom:10,
    justifyContent:"center",
    paddingLeft:10
  },
  btnTextSignIn:{
    color:"rgba(31, 145, 196, 0.93)",
    fontSize:15,
  },
  loginContainer:{
    flex:1,justifyContent:'space-between',alignItems:'center'
  },
  username:{
    color:"#FFF", fontFamily:"Avenir", fontSize:20
  }
});
