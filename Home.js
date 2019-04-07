import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity  } from 'react-native';





export class Home extends React.Component {
  
  //This is for styling the stacknavigator
  static navigationOptions = {
    
   // title: 'Home',
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
        <View style={stylesHome.mainContainer}>

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
    color: "#000"
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

export default Home