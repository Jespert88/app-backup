import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, ImageBackground, TouchableOpacity, Modal  } from 'react-native';




export class Register extends React.Component {
  

  static navigationOptions = {
    header: null
  }

  state = {
   modalVisible: false,
 };




  render() {

    return (
     <ImageBackground source={require('../assets/green-wallpaper.png')} style={{width: "100%", height: "100%"}}>
        <View style={stylesRegister.mainContainer}>


             <View style={stylesRegister.textInputContainer}>
              <TextInput
                style={stylesRegister.textInputStyle}
                placeholderTextColor ="#000"
                placeholder="användarnamn"
                onChangeText={(text) => this.setState({text})}
              />

              <TextInput
              style={stylesRegister.textInputStyle}
              placeholderTextColor ="#000"
              placeholder="lösenord"
              onChangeText={(text) => this.setState({text})}
              />
              

              <TouchableOpacity style={stylesRegister.buttonStyle}> 
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