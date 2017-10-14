import React, {Component} from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Alert} from "react-native";

import register from "../../api/register.js";

export default class SignUp extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConf: ''
    };
  }

  registerUser(){
    const {name, email, password,passwordConf } = this.state;
    register(email,name, password, passwordConf)
    .then(res => {
      if(res === 'THANH_CONG') return this.onSucces();
      this.onFail();
    });
  }

  onSucces(){
    Alert.alert(
      'Notice',
      'Sign up successfully',
      [
        {text: 'OK', onPress: this.props.gotoSignIn()},
      ],
      { cancelable: false }
    )
  }

  onFail(){
    Alert.alert(
      'Notice',
      'Email has been used by other',
      [
        {text: 'OK', onPress: () => this.setState({ email: ''})},
      ],
      { cancelable: false }
    )
  }

  render(){
    const {  inputStyle, bigButton, buttonText
          } = styles;
    return(
      <View>
      <TextInput
        style={inputStyle}
        value={this.state.name}
        onChangeText={text => this.setState({name: text})}
        underlineColorAndroid="transparent"
        placeholder="Enter your name"
      />
      <TextInput
        style={inputStyle}
        value={this.state.email}
        onChangeText={text => this.setState({email: text})}
        underlineColorAndroid="transparent"
        placeholder="Enter your email"
      />
      <TextInput
        style={inputStyle}
        value={this.state.password}
        onChangeText={text => this.setState({password: text})}
        secureTextEntry
        underlineColorAndroid="transparent"
        placeholder="Enter your password"
      />
      <TextInput
        style={inputStyle}
        value={this.state.passwordConf}
        onChangeText={text => this.setState({passwordConf: text})}
        secureTextEntry
        underlineColorAndroid="transparent"
        placeholder="Re-enter your password"
      />
        <TouchableOpacity style={bigButton} onPress={this.registerUser.bind(this)}>
          <Text style={buttonText}>SIGN UP NOW</Text>
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
  }
});
