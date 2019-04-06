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
          title: 'Teman',
          headerStyle: {
            textAlign: "center",
            backgroundColor: '#539631',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        };



  render() {
    return (

      <ImageBackground source={require('../assets/green-wallpaper.png')} style={{width: "100%", height: "100%"}}>
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
    width: "100%"
  },

  titleStyle: {
    fontSize: 50,
    alignItems: "center",
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

export default Theme