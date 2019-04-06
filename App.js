import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableHighlight, AsyncStorage } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from "./screens/Home";
import Theme from "./screens/Theme";
import Question from "./screens/Question";
import Login from "./screens/Login";
import Register from "./screens/Register";


// set any object to first in this list to see it on mobile device. 
const MainNavigator = createStackNavigator({
  LoginScreen: { screen: Login},
  HomeScreen: { screen: Home },
  ThemeScreen: { screen: Theme }, 
  RegisterScreen: { screen: Register},
  QuestionScreen: { screen: Question } 
});

/*
navigationOptions = {
  headerStyle: { backgroundColor: 'red' },
  headerTitleStyle: { color: 'green' }
}
*/




state = {
  data: ""
}

componentWillMount = () => {
  fetch("https://samtal-server.herokuapp.com/users", {
     method: "GET"
  })
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);
  })
  .catch((error) => {
     console.error(error);
  });
}



/*

_storeData = async () => {
  try {
    await AsyncStorage.setItem('@user', 'Det sparade värdet');
  } catch (error) {
    // Error saving data
  }
};
_storeData()

getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@user')
    if (value !== null) {
      console.log(value);
    }
  } catch(e) {
    console.log(e);
  }
};
getData()
*/

/* This function will check if user already exists. If user already does, send user to home screen */
/*function checkData() {
  var data = null;

  if (data != null) {
    console.log("logged in")
  } else {
    console.log("you need to register")
  }
}
checkData()
*/

const App = createAppContainer(MainNavigator);

export default App;
