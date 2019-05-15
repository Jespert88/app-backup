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


  /*

    This is from community react native.

      STORE DATA
    --------------
      storeData = async () => {
        try {
          await AsyncStorage.setItem('@storage_Key', 'stored value')
        } catch (e) {
          // saving error
        }
      }

       Read Data
    --------------
    getData = async () => {
      try {
        const value = await AsyncStorage.getItem('@storage_Key')
        if (value !== null) {
          // value previously stored
        }
      } catch (e) {
        // error reading value
      }
    }

    */




  checkIfLogged = () => {


    getData = async () => {
      try {
        const value = await AsyncStorage.getItem('@AsyncUser')
        if (value !== null) {
          this.setState({ checkUser: val })
        }
      } catch (e) {
        // error reading value
      }
    }
    getData()


  
    //If else statement to check if the this.state.checkUser is empty or not.
    var letCheck = this.state.checkUser;

    if (letCheck == "") {
      this.props.navigation.navigate("LoginScreen");
    } else {
      this.props.navigation.navigate("homeScreen");
    } 
    
  }

  componentDidMount() {
    this.checkIfLogged()
  }

    /*
  componentDidMount() {
      this.checkIfLogged()
  }
  */




  render() {

    return (


    
      <View style={stylesCheckLoggedIn.LoadingContainer}>
          <Text style={{textAlign: "center"}}>  {this.state.checkUser} </Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("HomeScreen")}>
            <Text> Hem </Text>
          </TouchableOpacity>
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