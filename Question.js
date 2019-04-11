import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity  } from 'react-native';



export class Question extends React.Component {
        
  
        //This is for styling the stacknavigator backgroundColor: '#56b2d8', or in this case for hidning.
        static navigationOptions = {
          header: null
        };


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


  render() {
    return (

      <ImageBackground source={require('../assets/blue-wallpaper.jpg')} style={{width: "100%", height: "100%"}}>
        <View style={stylesQuestion.mainContainer}>

        <View style={stylesQuestion.backBtnContainer}>
            <TouchableOpacity  onPress={() => this.props.navigation.navigate("HomeScreen")}>
            <Image source={require('../assets/back.png')} 
              style={{
                margin: 5,
                padding: 10,
                height: 20,
                width: 20,
                resizeMode: 'stretch',
              }}></Image>
            </TouchableOpacity>
          </View>

        <View style={stylesQuestion.titleContainer}>
          <Text style={stylesQuestion.titleStyle}>{this.state.data} </Text>
        </View>

        <View style={stylesQuestion.buttonContainer}>
          <TouchableOpacity  style={stylesQuestion.buttonStyle} onPress={this.componentWillMount}>
            <Text style={stylesQuestion.textStyle}> Välj ny fråga </Text>
          </TouchableOpacity >  

          <TouchableOpacity  style={stylesQuestion.buttonStyle} onPress={this.startTimer}>
            <Text style={stylesQuestion.textStyle}> Timer </Text>
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
    position: "absolute",
    marginTop: "50%",
    alignItems: "center",
    width: "100%"
  },

  titleStyle: {
    fontSize: 30,
    padding: 10,
    textAlign: "center",
    color: "#fff",
    textShadowColor: '#0e5572',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },

  textStyle: {
    fontSize: 18,
    color: "#000",
    textAlign: "center"
  },

  backBtnContainer: {
    margin: "5%",
    marginTop: 40
  },

  buttonContainer: {
    marginTop: 250
  },

  buttonStyle: {
    margin: 10,
    marginRight: 80,
    marginLeft: 80,
    padding: 10,
    backgroundColor: "#fff",
    opacity: 0.7,
    borderRadius: 30
  }


});

export default Question