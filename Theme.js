import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity  } from 'react-native';





export class Theme extends React.Component {
        state = {
            data: ""
         }
  
         componentWillMount = () => {
            fetch("https://samtal-server.herokuapp.com/theme/random-theme", {
               method: "GET"
            })
            .then((response) => response.json())
            .then((responseJson) => {
               console.log(responseJson);
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

      <ImageBackground source={require('../assets/wallpaper.jpg')} style={{width: "100%", height: "100%"}}>
        <View style={stylesHome.mainContainer}>

        <View style={stylesHome.titleContainer}>
          <Text style={stylesHome.titleStyle}>{this.state.data} </Text>
        </View>

        <View style={stylesHome.buttonContainer}>
          <TouchableOpacity  style={stylesHome.buttonStyle} onPress={this.componentWillMount}>
            <Text style={stylesHome.textStyle}> Välj nytt tema </Text>
          </TouchableOpacity >  
        </View>


        </View>

      </ImageBackground>
    )
  }
}

const stylesHome = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  titleContainer: {
    marginTop: "20%",
    alignItems: "center",
    backgroundColor: "green",
    width: "100%"
  },

  titleStyle: {
    fontSize: 50,
    alignItems: "center",
    color: "#fff",
  },

  textStyle: {
    fontSize: 18,
    color: "#fff"
  },



  buttonContainer: {
    //backgroundColor:"#303",
    marginTop: "30%"
  },

  buttonStyle: {
    alignItems: "center",
    backgroundColor: "green",
    borderRadius: 30,
    marginTop: 20,
    marginRight: 70,
    marginLeft: 70,
    marginBottom: 20,
    padding: 10
  }


});

export default Theme