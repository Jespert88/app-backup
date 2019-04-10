import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableHighlight, AsyncStorage, Dimensions } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from "./screens/Home";
import Theme from "./screens/Theme";
import Question from "./screens/Question";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Choose from "./screens/Choose.js";



// set any object to first in this list to see it on mobile device. 
const MainNavigator = createStackNavigator({
  LoginScreen: { screen: Login},
  RegisterScreen: { screen: Register},
  HomeScreen: { screen: Home },
  ChooseScreen: { screen: Choose},
  ThemeScreen: { screen: Theme }, 
  QuestionScreen: { screen: Question },
});

const App = createAppContainer(MainNavigator);


/*
determineScreen = () => {

}
*/

export default App;
