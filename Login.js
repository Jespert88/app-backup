import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, ImageBackground, TouchableOpacity, Modal  } from 'react-native';




export class Login extends React.Component {
      
    state = { data: "" }

     componentWillMount = () => {
        fetch("https://samtal-server.herokuapp.com/users", {
           method: "GET"
        })
        .then((response) => response.json())
        .then((responseJson) => {
           //console.log(responseJson);
           this.setState({
              data: responseJson.username
           })
           console.log(responseJson)
        })
        .catch((error) => {
           console.error(error);
        });
     }

  render() {



    return (
     <ImageBackground source={require('../assets/green-wallpaper.png')} style={{width: "100%", height: "100%"}}>
        <View style={stylesLogin.mainContainer}>


             <View style={stylesLogin.textInputContainer}>
              <TextInput
                style={stylesLogin.textInputStyle}
                placeholderTextColor ="#000"
                placeholder="användarnamn"
                onChangeText={(text) => this.setState({text})}
              />

              <TextInput
              style={stylesLogin.textInputStyle}
              placeholderTextColor ="#000"
              placeholder="lösenord"
              onChangeText={(text) => this.setState({text})}
              />
              
              <TouchableOpacity style={{marginTop: 20}} onPress={() => this.props.navigation.navigate("HomeScreen")}> 
                  <Text style={stylesLogin.textStyle}> Logga in </Text>
              </TouchableOpacity>

            <Text style={stylesLogin.textStyle}> 
              
                {this.state.data} 
            </Text>


            </View>
           
        </View>
     </ImageBackground> 
      
      
      
    )
  }
}

const stylesLogin = StyleSheet.create({
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
    backgroundColor: "green",
    borderRadius: 30,
    marginTop: 20,
    marginRight: 70,
    marginLeft: 70,
    marginBottom: 20,
    padding: 10
  }


});

export default Login