import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity  } from 'react-native';





export class Question extends React.Component {
        state = {
            data: ""
         }
  
         componentWillMount = () => {
            fetch("https://samtal-server.herokuapp.com/question/random-question", {
               method: "GET"
            })
            .then((response) => response.json())
            .then((responseJson) => {
               
               this.setState({
                  data: responseJson.randomObj
               })
            })
            .catch((error) => {
               console.error(error);
            });
         }


         //This is for styling the stacknavigator
         static navigationOptions = {
          headerStyle: {
            backgroundColor: '#b0ff32',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        };



  render() {
    return (

      <ImageBackground source={require('../assets/green-wallpaper.png')} style={{width: "100%", height: "100%"}}>
        <View style={stylesQuestion.mainContainer}>

        <View style={stylesQuestion.titleContainer}>
          <Text style={stylesQuestion.titleStyle}>{this.state.data} </Text>
        </View>

        <View style={stylesQuestion.buttonContainer}>
          <TouchableOpacity  style={stylesQuestion.buttonStyle} onPress={this.componentWillMount}>
            <Text style={stylesQuestion.textStyle}> Välj ny fråga </Text>
          </TouchableOpacity >  
        </View>


        </View>

      </ImageBackground>
    )
  }
}

const stylesQuestion = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  titleContainer: {
    marginTop: "20%",
    alignItems: "center",
    width: "100%"
  },

  titleStyle: {
    fontSize: 30,
    padding: 10,
    textAlign: "center",
    color: "#000",
  },

  textStyle: {
    fontSize: 18,
    color: "#000",
    textAlign: "center"
  },



  buttonContainer: {
    //backgroundColor:"#303",
    marginTop: "30%"
  },

  buttonStyle: {
    borderRadius: 30,
    marginTop: 20,
    marginRight: 70,
    marginLeft: 70,
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#fff",
    opacity: 0.7,
    borderRadius: 30
  }


});

export default Question