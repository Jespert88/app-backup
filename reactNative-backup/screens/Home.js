import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity  } from 'react-native';
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


  getAsyncUserTest = async () => {
    await AsyncStorage.getItem("@AsyncUser").then(val => {
      this.setState({ user: val }).then(
        JSON.stringify(val)
      )
      return JSON.parse(val)
    });
  }
  
  componentDidMount() {
    this.getAsyncUserTest()
  }






  render() {

    return (
      
      //Main Body of the Screen.
      <ImageBackground source={require('../assets/wallpaper.jpg')} style={{width: "100%", height: "100%"}}>
        <View style={stylesHome.mainContainer}>
           

        {/* SignOut Container */}
        <View style={stylesHome.signOutContainer}>

          {/* Back arrow Container */}
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

            {/* Profile Container */}
            <View style={stylesHome.profileContainer}>
              <TouchableOpacity  onPress={() => this.props.navigation.navigate("ProfileScreen")}>
                <Image source={require('../assets/user.png')} 
                  style={{
                    margin: 10,
                    padding: 10,
                    height: 40,
                    width: 40,
                    alignItems: "center",
                    resizeMode: 'stretch',
                  }}></Image>

                {/* Here we show the value from the state varible: user. */}
                <Text style={stylesHome.profileText}>{this.state.user}</Text>

              </TouchableOpacity>
            </View>
        </View>

       



        {/* Title Container */}
        <View style={stylesHome.titleContainer}>
            <Text style={stylesHome.titleStyle}> Gör ett val </Text>
        </View>


        {/* Button Container */}
        <View style={stylesHome.buttonContainer}>
            <TouchableOpacity  style={stylesHome.buttonStyle} onPress={() => this.props.navigation.navigate("ChooseScreen")}>
              <Text style={stylesHome.textStyle}> Starta samtal </Text>
            </TouchableOpacity><Text>{"\n"}</Text>
            
            <TouchableOpacity  style={stylesHome.buttonStyle} onPress={() => this.props.navigation.navigate("JoinScreen")}>
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
    marginTop: "20%",
    alignItems: "center",
  },

  titleStyle: {
    fontSize: 45,
    color: "#fff",
    textShadowColor: '#570682',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10 
  },

  profileContainer: {
    //backgroundColor: "green",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginLeft: "65%"
  },
  profileText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center"
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

export default Home