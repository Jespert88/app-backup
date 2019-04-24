import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, ImageBackground, TouchableOpacity, KeyboardAvoidingView, Alert  } from 'react-native';


export class Register extends React.Component {
  
  state = {
    modalVisible: false,
    userState: "",
    passwordState: ""
  }

   static navigationOptions = {
     header: null
   }

   setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  

  createUser = () => {
    fetch('http://samtal-server.herokuapp.com/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.userState ,
        password: this.state.passwordState
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        
        if (responseJson == false) {
        
          // Works on both iOS and Android
          alert(
            'Denna användare existerar redan.',
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
          );
          console.log("User already exist") //Here will a alert pop up, check out example on docs.
        } else {
          this.props.navigation.navigate('LoginScreen', {nameObj: this.state.userState});
        }

      })
      .catch((error) => {
        console.log(error);
      });
  }



  render() {

    return (
      <ImageBackground source={require('../assets/wallpaper.jpg')} style={{width: "100%", height: "100%"}}>
        <View style={stylesRegister.mainContainer}>

             
            <View style={stylesRegister.backBtnContainer}>
                <TouchableOpacity  onPress={() => this.props.navigation.navigate("LoginScreen")}>
                <Image source={require('../assets/back.png')} 
                  style={{
                    margin: 5,
                    padding: 10,
                    height: 20,
                    width: 20,
                    resizeMode: 'stretch',
                  }}></Image>
                </TouchableOpacity>
              </View>


              <KeyboardAvoidingView style={stylesRegister.textInputContainer} behavior="padding" enabled>
              <TextInput
                style={stylesRegister.textInputStyle}
                placeholderTextColor ="#000"
                placeholder="Användarnamn"
                onChangeText={(user) => this.setState({userState: user})}
                />

              <TextInput
              style={stylesRegister.textInputStyle}
              placeholderTextColor ="#000"
              secureTextEntry={true}
              placeholder="lösenord"
              onChangeText={(password) => this.setState({passwordState: password})}
              />
              

              <TouchableOpacity style={stylesRegister.buttonStyle} onPress={this.createUser}> 
                  <Text style={{color: "#fff", textAlign: "center", fontSize: 18}}> Skapa användare </Text>
              </TouchableOpacity>

              </KeyboardAvoidingView>
           
        </View>
     </ImageBackground> 
      
      
      
    )
  }
}

const stylesRegister = StyleSheet.create({
  mainContainer: {
    flex: 1
  },


  textStyle: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center"
  },

  textInputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: "30%",
    marginLeft: "10%",
    marginRight: "10%",
    padding: 20
},
textInputStyle: {
    width: "100%",
    margin: 10,
    textAlign: "center",
    padding: 10,
    fontSize: 18,
    backgroundColor: "#fff",
    opacity: 0.7,
    borderRadius: 30
},

buttonStyle: {
  padding: 10
},

  backBtnContainer: {
    marginTop: 50,
    marginLeft: 20
  },

});

export default Register