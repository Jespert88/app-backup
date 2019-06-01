import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableHighlight, AsyncStorage, Dimensions } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Loading from "./screens/Loading";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Theme from "./screens/Theme";
import Question from "./screens/Question";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Choose from "./screens/Choose.js";


// Shows the first object in the array on mobile device. 
const MainNavigator = createStackNavigator({
  LoadingScreen: { screen: Loading },
  LoginScreen: { screen: Login},
  RegisterScreen: { screen: Register},
  HomeScreen: { screen: Home },
  ProfileScreen: { screen: Profile },
  ChooseScreen: { screen: Choose},
  ThemeScreen: { screen: Theme }, 
  QuestionScreen: { screen: Question },
});
const App = createAppContainer(MainNavigator);


export default App;