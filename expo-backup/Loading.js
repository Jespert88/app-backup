import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, ImageBackground, TouchableOpacity, Modal, ScrollView, Alert, KeyboardAvoidingView, ActivityIndicator  } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';




export default class Loading extends React.Component {

//This is for styling the stacknavigator backgroundColor: '#56b2d8', or in this case for hidning.
static navigationOptions = {
  header: null
};




    /* 
    Note for myself:
    async dosen't wait on anything. It runs directly, can be important in future to know.


    This function is checking if the AsyncStorage key (@loggedIn) has value. 
    If not null then send to home screen, else send to login screen.
    */
   
    getData = async () => {
        try {
          const value = await AsyncStorage.getItem('@loggedIn');

          if(value !== null) {

            console.log(value);
        
            this.props.navigation.navigate('HomeScreen');
  
          } else {

            console.log("hejsan" + value);
   
            this.props.navigation.navigate('LoginScreen');
  
          }
        } catch(e) {
          console.log(e)
        }
      }


    componentDidMount = async () => {
        this.getData()
    }



    render() {
        return (
            <View style={{ marginTop: "80%", justifyContent: "center", alignItems: "center"}}>
                <ActivityIndicator size="large" color="#7b29aa" />
            </View>
        )

    }

}
