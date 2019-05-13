import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';






export class CheckLoggedIn extends React.Component {
  
    static navigationOptions = {
        header: null
      }

  constructor(props){
    super(props);

    this.state = {
      checkUser: "",
    }

  }


  checkIfLogged = () => {

    // Get the AsyncStorage Key,  "@AsyncUser" = (Key).
    
    getAsyncUserTest = async () => {
        try {
            await AsyncStorage.getItem("@AsyncUser").then(val => {
            this.setState({ checkUser: val })
            });
        }
        catch {
 
        }
    }
    getAsyncUserTest()




    // Set new AsyncStorage Key value.
    storeData = async () => {
        try {
          var AsyncUsername = this.state.checkUser;
          await AsyncStorage.setItem('@AsyncUser', AsyncUsername)
          JSON.parse(AsyncUsername);
        } catch (e) {
          // saving error
        }
      }
      storeData()
    


    //If else statement to check if the this.state.checkUser is empty or not.
      var userValue = this.state.checkUser;
     
      if (userValue !== "") {
        this.props.navigation.navigate("homeScreen");
      } else {
        this.props.navigation.navigate("LoginScreen");
      }
    
  }

  componentDidMount() {
      this.checkIfLogged()
  }





  render() {

    return (
    
      <View style={stylesCheckLoggedIn.LoadingContainer}>
          <ActivityIndicator size="large" color="#9043bc" />
      </View>
      
    )
  }
}

const stylesCheckLoggedIn = StyleSheet.create({
  mainContainer: {
    flex: 1,
    /*backgroundColor: "lightgreen"*/
  },

  LoadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
 
 
});

export default CheckLoggedIn