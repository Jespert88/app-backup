/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
/*
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
*/

import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableHighlight, AsyncStorage, Dimensions } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from "./screens/Home";
import Theme from "./screens/Theme";
import Question from "./screens/Question";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Choose from "./screens/Choose.js";
import Profile from "./screens/Profile.js";


// set any object to first in this list to see it on mobile device. 
const MainNavigator = createStackNavigator({
  LoginScreen: { screen: Login},
  RegisterScreen: { screen: Register},
  ProfileScreen: { screen: Profile},
  HomeScreen: { screen: Home },
  ChooseScreen: { screen: Choose},
  ThemeScreen: { screen: Theme }, 
  QuestionScreen: { screen: Question },
});
const App = createAppContainer(MainNavigator);


export default App;
