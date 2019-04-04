import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableHighlight } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from "./screens/Home";
import Theme from "./screens/Theme";
import Question from "./screens/Question";
import Login from "./screens/Login";
import Register from "./screens/Register";


// set any object to first in this list to see it on mobile device. 
const MainNavigator = createStackNavigator({
  HomeScreen: { screen: Home },
  ThemeScreen: { screen: Theme },
  LoginScreen: { screen: Login}, 
  RegisterScreen: { screen: Register}
 /* QuestionScreen: { screen: Question } */
});


/* This function will check if user already exists. If user already does, send user to home screen */
function checkData() {
  console.log("hej")
}
checkData()


const App = createAppContainer(MainNavigator);

export default App;
