import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity  } from 'react-native';





export class Home extends React.Component {
  
  //This is for styling the stacknavigator backgroundColor: '#56b2d8',
  static navigationOptions = {
    header: null
  };


  
  render() {

    return (
      
      
      <ImageBackground source={require('../assets/blue-wallpaper.jpg')} style={{width: "100%", height: "100%"}}>
        <View style={stylesHome.mainContainer}>

          <View style={stylesHome.backBtnContainer}>
            <TouchableOpacity  onPress={() => this.props.navigation.navigate("LoginScreen")}>
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
              <Text style={stylesHome.titleStyle}> Välkommen </Text>
            </View>

          <View style={stylesHome.buttonContainer}>

            <TouchableOpacity  style={stylesHome.buttonStyle} onPress={() => this.props.navigation.navigate("ThemeScreen")}>
                <Text style={stylesHome.textStyle}> Teman </Text>
              </TouchableOpacity >  

              <TouchableOpacity  style={stylesHome.buttonStyle} onPress={() => this.props.navigation.navigate("QuestionScreen")}>
                <Text style={stylesHome.textStyle}> Frågor </Text>
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
    /*backgroundColor: "lightgreen"*/
  },

  titleContainer: {
    marginTop: "10%",
    alignItems: "center",
  },

  titleStyle: {
    fontSize: 40,
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
  },

  backBtnContainer: {
    margin: "5%",
    marginTop: 40
  }



});

export default Home