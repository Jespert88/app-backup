import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableHighlight } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from "./screens/Home";
import Theme from "./screens/Theme";
import Question from "./screens/Question";




const MainNavigator = createStackNavigator({
  HomeScreen: { screen: Home },
  ThemeScreen: { screen: Theme }
 /* QuestionScreen: { screen: Question } */
});

const App = createAppContainer(MainNavigator);

export default App;
