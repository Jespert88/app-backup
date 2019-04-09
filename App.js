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

const App = createAppContainer(MainNavigator);


/*
determineScreen = () => {

}
*/








export default App;
