import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity  } from 'react-native';



export class Home extends React.Component {
  
  //This is for styling the stacknavigator backgroundColor: '#56b2d8', or in this case for hidning.
  static navigationOptions = {
    header: null
  };


  render() {

    return (
      
      <ImageBackground source={require('../assets/wallpaper.jpg')} style={{width: "100%", height: "100%"}}>
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
          

            <Text style={stylesHome.usernameTextStyle}>
              Inloggad: {"\n"} 
              {this.props.navigation.state.params.NameOBJ}
            </Text>
       
            <View style={stylesHome.titleContainer}>
              <Text style={stylesHome.titleStyle}> Gör ett val </Text>
            </View>

            
          <View style={stylesHome.buttonContainer}>
            <TouchableOpacity  style={stylesHome.buttonStyle} onPress={() => this.props.navigation.navigate("ChooseScreen")}>
              <Text style={stylesHome.textStyle}> Starta samtal </Text>
            </TouchableOpacity><Text>{"\n"}</Text>
            
            <TouchableOpacity  style={stylesHome.buttonStyle} onPress={() => this.props.navigation.navigate("ChooseScreen")}>
              <Text style={stylesHome.textStyle}> Delta i samtal </Text>
            </TouchableOpacity>
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
    textShadowColor: '#9c29b7',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10 
  },

  textStyle: {
    fontSize: 18,
    color: "#000",
    textAlign: "center"
  },

  textWithShadow: {
      fontSize: 15,
      color: "#fff",
     // textShadowColor: '#9c29b7',
     // textShadowOffset: {width: -1, height: 1},
     // textShadowRadius: 10,
      textAlign: "center"
  },



  buttonContainer: {
    //backgroundColor:"#303",
    marginTop: "10%"
  },

  buttonStyle: {
    borderRadius: 30,
    marginTop: 10,
    marginRight: 70,
    marginLeft: 70,
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#fff",
    opacity: 0.7,
    borderRadius: 30
  },

  backBtnContainer: {
    marginTop: 40,
    flexDirection: "row"
  },

  logoutText: {
    flexDirection: "row"
  },


  usernameTextStyle: {
    marginLeft: "70%",
    textAlign: "center",
    color: "#fff",
    fontSize: 15
  }

});

export default Home