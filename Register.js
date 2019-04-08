import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, ImageBackground, TouchableOpacity, Modal  } from 'react-native';




export class Register extends React.Component {
  

  
  state = {
    data: "",
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
          console.log("Error") //Here will a alert pop up, check out example on docs.
        } else {
          this.props.navigation.navigate('HomeScreen');
        }

      })
      .catch((error) => {
        console.log(error);
      });
  }



  render() {

    return (
      <ImageBackground source={require('../assets/blue-wallpaper.jpg')} style={{width: "100%", height: "100%"}}>
        <View style={stylesRegister.mainContainer}>


             <View style={stylesRegister.textInputContainer}>
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
                  <Text style={{color: "#000", textAlign: "center", fontSize: 15}}> Skapa användare </Text>
              </TouchableOpacity>

            </View>
           
        </View>
     </ImageBackground> 
      
      
      
    )
  }
}

const stylesRegister = StyleSheet.create({
  mainContainer: {
    flex: 1,
    /*backgroundColor: "lightgreen"*/
  },

  titleContainer: {
    backgroundColor: "green",
    alignItems: "center",
  },

  titleStyle: {
    fontSize: 30,
    color: "#fff"
  },

  textStyle: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center"
  },

  textInputContainer: {
      marginTop: "30%",
      marginLeft: "10%",
      marginRight: "10%",
  },

  textInputStyle: {
      textAlign: "center",
      margin: 10,
      padding: 10,
      fontSize: 18,
      backgroundColor: "#fff",
      opacity: 0.7,
      borderRadius: 30
  },


  buttonStyle: {
    backgroundColor: "#fff",
    opacity: 0.7,
    borderRadius: 30,
    marginTop: 50,
    marginRight: 60,
    marginLeft: 60,
    marginBottom: 20,
    padding: 10
  }


});

export default Register