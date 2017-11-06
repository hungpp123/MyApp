import React, {Component} from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Image} from "react-native";
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

import signIn from '../../api/signIn.js';
import global from '../global.js';
import saveToken from '../../api/saveToken.js';
import register from "../../api/register.js";
const urlBg = 'http://192.168.1.92:3000/images/appIcon/bg.jpg';

const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager
} = FBSDK;

export default class SignIn extends Component{
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
      if(res === 'THANH_CONG') return this.onSignIn();
      this.onSignIn();
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

  handleSigninGoogle() {
    GoogleSignin.signIn().then((user) => {
      console.log(user);
    }).catch((err) => {
      console.log('WRONG SIGNIN', err);
    }).done();
  }

  render(){
    const {  inputStyle, bigButton, buttonText, backgroundImage, buttonContainer, buttonStyle, textButtonStyle
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
        <View style={styles.buttonContainer}>
        <LoginButton
          readPermissions={["email"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("login has error: " + result.error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {

                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    let accessToken = data.accessToken;

                    const responseInfoCallback = (error, result) => {
                      if (error) {
                        console.log(error)
                        alert('Error fetching data: ' + error.toString());
                      } else {
                        console.log(result);
                        this.setState({ name:result.name,email: result.email, password: result.id,passwordConf:result.id});
                        this.registerUser();
                      }
                    }

                    const infoRequest = new GraphRequest(
                      '/me',
                      {
                        accessToken: accessToken,
                        parameters: {
                          fields: {
                            string: 'id,name,email'
                          }
                        }
                      },
                      responseInfoCallback
                    );

                    // Start the graph request.
                    new GraphRequestManager().addRequest(infoRequest).start()

                  }
                )

              }
            }
          }
          onLogoutFinished={() => alert("logout.")}/>

            <TouchableOpacity style={styles.buttonStyle} onPress={() => this.handleSigninGoogle()}>
              <Text style={styles.textButtonStyle}>Sign in with Google +</Text>
            </TouchableOpacity>
          </View>
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
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection:"row",
    backgroundColor:"rgba(31, 145, 196, 0.93)",
    marginBottom:10
  },
  buttonStyle: {
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#F00',
    borderRadius: 5,
    marginLeft:5
  },
  textButtonStyle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FFF'
  }
});
