import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity  } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';



export class Join extends React.Component {
//This is for styling the stacknavigator backgroundColor: '#56b2d8', or in this case for hidning.
static navigationOptions = {
  header: null
};


  constructor() {
    super()
    this.state = {
      user: "",
    }

  }


  getAsyncUserTest = async () => {
    try {
        await AsyncStorage.getItem("@AsyncUser").then(val => {
          this.setState({ user: val })
          return JSON.parse(val)
        });
    }
    catch {
      alert("Error check code..")
    }
  }
  
 






  render() {

    return (
      
      //Main Body of the Screen.
      <ImageBackground source={require('../assets/wallpaper.jpg')} style={{width: "100%", height: "100%"}}>
        <View style={stylesJoin.mainContainer}>
           

        {/* SignOut Container */}
        <View style={stylesJoin.signOutContainer}>
          {/* Back arrow Container */}
          <View style={stylesJoin.backBtnContainer}>
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
        </View>


        <Text style={stylesJoin.titleStyle}> Här ska appen starta Kameran för att kunna 
            läsa en annan spelares QR-kod 
        </Text>






        </View>
     </ImageBackground> 
      
    )
  }
}

const stylesJoin = StyleSheet.create({
  mainContainer: {
    flex: 1,
    /*backgroundColor: "lightgreen"*/
  },
  titleContainer: {
    marginTop: "20%",
    alignItems: "center",
  },

  titleStyle: {
    fontSize: 45,
    color: "#fff",
    textShadowColor: '#9c29b7',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10 
  },

  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginLeft: "60%"
  },
  profileText: {
    fontSize: 18,
    color: "#fff",
   /* textShadowColor: '#9c29b7',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10 */
  },


  signOutContainer: {
    flexDirection: "row"
  },

  backBtnContainer: {
    marginTop: 50,
    marginLeft: 20
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
    //backgroundColor:"blue",
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


  signOutContainer: {
    flexDirection: "row"
  },


  backBtnContainer: {
    marginTop: 50,
    marginLeft: 20
  },

  usernameTextStyle: {
    marginTop: 50,
    marginLeft: "60%",
    textAlign: "center",
    color: "#fff",
    fontSize: 15
  }

});

export default Join