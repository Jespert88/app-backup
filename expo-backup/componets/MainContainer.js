
import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

//Screens.
import Home from "../screens/Home";
import Theme from "../screens/Theme";
import Question from "../screens/Question";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Choose from "../screens/Choose.js";
import Profile from "../screens/Profile.js";




//Info! This whole file is needed for the loginsystem to work.
export const LoginStack = createStackNavigator({
    LoginScreen: { screen: Login},
    RegisterScreen: { screen: Register},
    HomeScreen: { screen: Home },
    ProfileScreen: { screen: Profile},
    ChooseScreen: { screen: Choose},
    ThemeScreen: { screen: Theme }, 
    QuestionScreen: { screen: Question },
})


export const MainStack = createStackNavigator({
    HomeScreen: { screen: Home },
    ProfileScreen: { screen: Profile},
    ChooseScreen: { screen: Choose},
    ThemeScreen: { screen: Theme }, 
    QuestionScreen: { screen: Question },
    LoginScreen: { screen: Login},
    RegisterScreen: { screen: Register},
})

export const createContainer = (checkedLogin = false) => {
    return createAppContainer({
        Home: { screen: MainStack },
        Login: { screen: LoginStack }
    })
}