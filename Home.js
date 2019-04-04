import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity  } from 'react-native';



export class Home extends React.Component {
  
  
  render() {

    return (
      
      
     <ImageBackground source={require('../assets/wallpaper.jpg')} style={{width: "100%", height: "100%"}}>
        <View style={stylesHome.mainContainer}>

            <View style={stylesHome.titleContainer}>
              <Text style={stylesHome.titleStyle}> Välkommen </Text>
            </View>

          <View style={stylesHome.buttonContainer}>

            <TouchableOpacity  style={stylesHome.buttonStyle} onPress={() => this.props.navigation.navigate("ThemeScreen")}>
                <Text style={stylesHome.textStyle}> Teman </Text>
              </TouchableOpacity >  

              <TouchableOpacity  style={stylesHome.buttonStyle} onPress={() => this.props.navigation.navigate("ThemeScreen")}>
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
    fontSize: 30,
    color: "#fff"
  },

  textStyle: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center"
  },



  buttonContainer: {
    //backgroundColor:"#303",
    marginTop: "30%"
  },

  buttonStyle: {
    backgroundColor: "green",
    borderRadius: 30,
    marginTop: 20,
    marginRight: 70,
    marginLeft: 70,
    marginBottom: 20,
    padding: 10
  }


});

export default Home