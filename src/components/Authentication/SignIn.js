import React, {Component} from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Image} from "react-native";

import signIn from '../../api/signIn.js';
import global from '../global.js';
import saveToken from '../../api/saveToken.js';
const urlBg = 'http://192.168.1.92:3000/images/appIcon/bg.jpg';

export default class SignIn extends Component{
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password: ''
    };
  }


  onSignIn(){
    const { email, password} = this.state;
    signIn(email, password)
    .then(res => {
      global.onSignIn(res.user);
      this.props.goBackToMain();
      saveToken(res.token);
    })
    .catch(err => console.log(err));
  }

  render(){
    const {  inputStyle, bigButton, buttonText, backgroundImage
          } = styles;
    const { email, password} = this.state;
    return(
      <View>
      <TextInput
        style={inputStyle}
        underlineColorAndroid="transparent"
        placeholder="Enter your email"
        value={email}
        onChangeText={text => this.setState({email: text})}
      />
      <TextInput
        style={inputStyle}
        underlineColorAndroid="transparent"
        placeholder="Enter your password"
        value={password}
        onChangeText={text => this.setState({password: text})}
        secureTextEntry
      />
        <TouchableOpacity style={bigButton} onPress={this.onSignIn.bind(this)}>
          <Text style={buttonText}>SIGN IN NOW</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputStyle:{
    height:50,
    backgroundColor:"#FFF",
    marginBottom:10,
    borderRadius:20,
    paddingLeft:30
  },
  bigButton:{
    height:50,
    borderRadius:20,
    borderWidth:1,
    borderColor:"#FFF",
    alignItems:"center",
    justifyContent:"center",
    marginBottom:10
  },
  buttonText:{
    fontFamily:"Avenir",
    color:"#FFF",
    fontWeight:'400'
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    resizeMode: 'stretch', // or 'stretch',
  }
});
