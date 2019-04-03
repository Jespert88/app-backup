import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableHighlight } from 'react-native';





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
      <View style={stylesHome.mainContainer}>

            <View style={stylesHome.titleContainer}>
              <Text style={stylesHome.titleStyle}> {this.state.data} </Text>
        </View>

          <View style={stylesHome.buttonContainer}>
            <TouchableHighlight style={stylesHome.buttonStyle} onPress={this.componentWillMount}>
                <Text style={stylesHome.textStyle}> Theme </Text>
              </TouchableHighlight>  
          </View>
         

      </View>
    )
  }
}

const stylesHome = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "blue"
  },

  titleContainer: {
    backgroundColor: "blue",
    margin: "20%",
    alignItems: "center"
  },

  titleStyle: {
    fontSize: 30,
    color: "#fff"
  },

  textStyle: {
    fontSize: 30,
    color: "#fff"
  },



  buttonContainer: {
    backgroundColor: "pink",
    margin: 40
  },

  buttonStyle: {
    backgroundColor: "green",
    borderRadius: 30,
    margin: 30,
    padding: 10
  }


});

export default Theme