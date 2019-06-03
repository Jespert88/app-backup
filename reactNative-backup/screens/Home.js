import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Alert  } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';




export class Home extends React.Component {
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




  
  signOutUser = () => {
   /* storeData = async () => {
      try {
        await AsyncStorage.setItem('@asyncId', null);
        await AsyncStorage.setItem('@asyncName', null);
        await AsyncStorage.setItem('@asyncQr', null);
        await AsyncStorage.setItem('@loggedIn', "false");
      } 
      catch (e) {
        console.log(e);
      }
    }
    storeData(); */
    this.props.navigation.navigate('LoginScreen');
  }

  notComplete = () => {
   alert("Denna funktionen är under uppdatering ^^"); 
  }





  render() {

    return (
      
      //Main Body of the Screen.
      <ImageBackground source={require('../assets/wallpaper.jpg')} style={{width: "100%", height: "100%"}}>
        <View style={stylesHome.mainContainer}>
           

        {/* Header Container */}
        <View style={stylesHome.HeaderContainer}>

          {/* Signout Container */}
          <View style={stylesHome.backBtnContainer}>
            <TouchableOpacity  onPress={this.signOutUser}>
              <Text style={stylesHome.signOutText}>Logga ut</Text>
            </TouchableOpacity>
          </View>

          {/* Profile Container */}
          <View style={stylesHome.profileContainer}>
          <TouchableOpacity  onPress={() => this.props.navigation.navigate("ProfileScreen")}>
            <Image source={require('../assets/user.png')} 
            style={{
            margin: 10,
            padding: 10,
            height: 40,
            width: "auto",
            justifyContent: "center",
            alignItems: "center",
            resizeMode: 'contain',
            }}></Image>

            {/* Here we show the value from the state varible: user. */}
            <Text style={stylesHome.profileText}> Min profil </Text>
          </TouchableOpacity>
          </View>

        </View>
        {/* End of Header Container */}
    
       



        {/* Title Container */}
        <View style={stylesHome.titleContainer}>
            <Text style={stylesHome.titleStyle}> Gör ett val </Text>
        </View>


        {/* Button Container */}
        <View style={stylesHome.buttonContainer}>
            <TouchableOpacity  style={stylesHome.buttonStyle} onPress={() => this.props.navigation.navigate("ChooseScreen")}>
              <Text style={stylesHome.textStyle}> Starta samtal </Text>
            </TouchableOpacity><Text>{"\n"}</Text>
            
            <TouchableOpacity  style={stylesHome.buttonStyle} onPress={this.notComplete}>
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
  HeaderContainer: {
    flexDirection: "row",
    //backgroundColor: "orange",
  },
  backBtnContainer: {
    //backgroundColor: "blue",
    justifyContent: "flex-end",
    marginLeft: 20,
    paddingRight: 5,
    paddingLeft: 5,
    //paddingTop: 60,
  },
  signOutText:{
    fontSize: 16,
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  profileContainer: {
    //backgroundColor: "green",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "50%",
  },
  profileText: {
    fontSize: 16,
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
   /* textShadowColor: '#9c29b7',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10 */
  },
















  titleContainer: {
    marginTop: "20%",
    alignItems: "center",
  },

  titleStyle: {
    fontSize: 45,
    fontWeight: "bold",
    fontFamily: "Roboto",
    color: "#fff",
    textShadowColor: '#570682',
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


  usernameTextStyle: {
    marginTop: 50,
    marginLeft: "60%",
    textAlign: "center",
    color: "#fff",
    fontSize: 15
  }

});

export default Home