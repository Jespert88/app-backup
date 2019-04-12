import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity  } from 'react-native';





export class Theme extends React.Component {

        //This is for styling the stacknavigator backgroundColor: '#56b2d8', or in this case for hidning.
        static navigationOptions = {
          header: null
        };

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

        


  render() {
    return (

      <ImageBackground source={require('../assets/wallpaper.jpg')} style={{width: "100%", height: "100%"}}>
        <View style={stylesHome.mainContainer}>

        
        <View style={stylesHome.backBtnContainer}>
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