import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity  } from 'react-native';
//import QRCode from 'react-native-qrcode';


export class Choose extends React.Component {
  
  //This is for styling the stacknavigator backgroundColor: '#56b2d8', or in this case for hidning.
  static navigationOptions = {
    header: null
  };

/*
      state = {
        data: ""
    }

    componentWillMount = () => {
        fetch("https://samtal-server.herokuapp.com/users", {
          method: "GET"
        })
        .then((response) => response.json())
        .then((responseJson) => {
          
          data = responseJson[1].qrcode;
          console.log(data)

        })
        .catch((error) => {
          console.error(error);
        });
    }
*/



  render() {

    return (
      
      
      <ImageBackground source={require('../assets/wallpaper.jpg')} style={{width: "100%", height: "100%"}}>
        <View style={stylesChoose.mainContainer}>

          <View style={stylesChoose.backBtnContainer}>
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

          {/* Installera innan användning ( npm install react-native-qrcode --save ).

          <View style={stylesChoose.qrcode}>
            <QRCode size={200} value={this.state.text}></QRCode>
          </View>
          <View style={stylesChoose.titleContainer}>
            <Text style={stylesChoose.titleStyle}> Låt deltagare skanna </Text>
          </View>
          */}

          <View style={stylesChoose.titleContainer}>
            <Text style={stylesChoose.titleStyle}> Skanna QR-kod för att Skapa grupp och samla poäng.</Text>
          </View>
          

          <View style={stylesChoose.buttonContainer}>
            <View style={stylesChoose.titleContainer}>
              <Text style={stylesChoose.titleStyle}> Diskutera direkt </Text>
            </View>

            <TouchableOpacity  style={stylesChoose.buttonStyle} onPress={() => this.props.navigation.navigate("ThemeScreen")}>
              <Text style={stylesChoose.textStyle}> Tema </Text>
            </TouchableOpacity >  

            <TouchableOpacity  style={stylesChoose.buttonStyle} onPress={() => this.props.navigation.navigate("QuestionScreen")}>
              <Text style={stylesChoose.textStyle}> Frågor </Text>
            </TouchableOpacity >  
          </View>
          

      </View>
     </ImageBackground> 
      
      
      
    )
  }
}

const stylesChoose = StyleSheet.create({
  mainContainer: {
    flex: 1,
    /*backgroundColor: "lightgreen"*/
  },

  qrcode: {
    alignItems: "center",
    justifyContent: "center"
  },


  titleContainer: {
    marginTop: "5%",
    textAlign: "center",
  },

  titleStyle: {
    textAlign: "center",
    fontSize: 30,
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
    marginTop: 50,
    marginLeft: 20
  },

  usernameContainer: {
    marginLeft: "70%",
    textAlign: "center",
    color: "#fff"
  },
 
});

export default Choose