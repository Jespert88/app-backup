import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, ImageBackground, TouchableOpacity, Modal, ScrollView, Alert, KeyboardAvoidingView  } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';





export class Login extends React.Component {
    
  constructor(props){
    super(props);

    this.state = {
      modalVisible: false,
      givenUsername: null,
      givenPassword: null
    }

  }
  
   static navigationOptions = {
     header: null
   }
   setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }


  

    /*

    This is from community react native.

      STORE DATA
    --------------
      storeData = async () => {
        try {
          await AsyncStorage.setItem('@storage_Key', 'stored value')
        } catch (e) {
          // saving error
        }
      }

       Read Data
    --------------
    getData = async () => {
      try {
        const value = await AsyncStorage.getItem('@storage_Key')
        if (value !== null) {
          // value previously stored
        }
      } catch (e) {
        // error reading value
      }
    }

    */
 
  

//Post a user object to the /login route that handels the req. If the request is false, then a alert comes up
//else go to home screen.
 checkUser = () => {
    fetch('http://samtal-server.herokuapp.com/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.givenUsername,
        password: this.state.givenPassword
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        
      
        // If responseJson is false, start an a Alert.
        if (!responseJson) {

           // Works on both iOS and Android
           alert(
            'Fel användare, lösen eller så har du ej fyllt i alla fält',
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
          );

        // Else set AsyncStorage varible = user input (userStoreData) and send user to next screen.
        // userStoreData = "" as default.
        } else {


          var idString = JSON.stringify(responseJson._id);
          var userName = JSON.stringify(responseJson.username);
          var qrCode = JSON.stringify(responseJson.qr_code);


          storeData = async () => {
            try {
              await AsyncStorage.setItem('@asyncId', idString);
              await AsyncStorage.setItem('@asyncName', userName);
              await AsyncStorage.setItem('@asyncQr', qrCode);
              await AsyncStorage.setItem('@loggedIn', "true");
            } 
            catch (e) {
              console.log(e);
            }
          }
          storeData();
          this.props.navigation.navigate('HomeScreen');


        }

      })
      .catch((error) => {
        console.log(error);
      })
      .done();
  };

  


 
  render() {
    return (
     <ImageBackground source={require('../assets/wallpaper.jpg')} style={{width: "100%", height: "100%"}}>
        

        <View style={stylesLogin.mainContainer}>
            <View style={stylesLogin.titleContainer}>
              <Text style={stylesLogin.titleStyle}> Samtalsgeneratorn </Text>
              <Text style={stylesLogin.subTitlestyle}> Slumpar olika teman och frågor för diskussion </Text>
            </View>

            {/* Login form */}
            <KeyboardAvoidingView style={stylesLogin.textInputContainer} behavior="padding" enabled>
              <TextInput
                style={stylesLogin.textInputStyle}
                placeholderTextColor ="#000"
                placeholder="Användarnamn"
                onChangeText={(user) => this.setState({givenUsername: user})}
                />
            
                <TextInput
                style={stylesLogin.textInputStyle}
                placeholderTextColor ="#000"
                secureTextEntry={true}
                placeholder="lösenord"
                onChangeText={(password) => this.setState({givenPassword: password})}
                />

                <TouchableOpacity style={stylesLogin.buttonStyle} onPress={this.checkUser}>
                    <Text style={stylesLogin.buttonTextStyle}> Logga in </Text>
                </TouchableOpacity>
                <TouchableOpacity style={stylesLogin.buttonStyle} onPress={() => this.props.navigation.navigate("RegisterScreen")}>
                    <Text style={stylesLogin.buttonTextStyle}> Registrera </Text>
                </TouchableOpacity>
                
            </KeyboardAvoidingView>

        </View>

      {/* Modal */}
        <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>

            <View style={stylesLogin.textContainer}>

              <Text style={{textAlign: "center", fontSize: 30}}> Välkommen till Samtalsgeneratorn {"\n"}</Text>
              <ScrollView style={stylesLogin.scrollViewContainer}>
                <Text style={stylesLogin.textStyle}>
                  Genom smarttelefonens genombrott och framfart har mobiltelefonen på bara några år kommit att bli en av de mest centrala delarna i många individers liv. 
                  Den används bland annat för att hålla kontakt med familj, vänner och kollegor, för att kommunicera och vara aktiv i olika sociala flöden.{"\n"} {"\n"} 
                  Många människor är sociala varelser som pratar och kommunicerar med andra individer hela tiden. Men det finns något som håller på att glömmas bort, något som kan tyckas självklart att kunna föra ett muntligt samtal med en annan individ utan att en mobiltelefon på något sätt finns med i bilden.
                  Sherry Turkle och Professor Jean M. Twenge har under många år bedrivit forskning på barn och unga vuxna som är flitiga användare av sina smarttelefoner. {"\n"} {"\n"} 
                  Många av dessa unga personer har aldrig haft något annat val än att ha en smarttelefon och hela deras sociala liv existerar genom den. Ett växande fenomen är att många av dessa unga personer kommunicerar med varandra genom text i sina smarttelefoner, även om de sitter bredvid varandra i samma rum. {"\n"} {"\n"} 
                  Barn leker inte tillsammans som de gjorde förr och deras emotionella utveckling verkar gå allt mer långsamt. 
                  Syftet med följande undersökning har varit att skapa en motvikt till denna utveckling och genom ett medietekniskt perspektiv presentera en mobilapplikation som uppmuntrar och inspirerar till muntlig dialog mellan individer. 



                
                {"\n"} {"\n"} 

                </Text>
              </ScrollView>
             

              <View style={stylesLogin.CloseBtnContainer}>
              <TouchableOpacity
                  style={stylesLogin.CloseBtnStyle}
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <Text style={stylesLogin.CloseBtnText}>Stäng</Text>
                </TouchableOpacity>
              </View>
            </View>


          </View>
        </Modal>

        <View style={stylesLogin.infoButtonContainer}>
          <TouchableOpacity onPress={() => { this.setModalVisible(true); }}>
            <Image source={require("../assets/infoIcon.png")} style={{width: 30, height: 30}}></Image>
            <Text style={stylesLogin.infoButtonText}> Info </Text>
          </TouchableOpacity>
        </View>
        

      </View>
      {/* End of Modal */}
     </ImageBackground> 
    )
  }
}

const stylesLogin = StyleSheet.create({
  mainContainer: { flex: 1,},


  titleContainer: {
    alignItems: "center",
    marginTop: "20%",
  },

  titleStyle: {
    fontSize: 40,
    color: "#fff",
    textShadowColor: '#0e5572',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },

  subTitlestyle: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "sans-serif-light",
    color: "#fff",
    textShadowColor: '#0e5572',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },

  infoTitle: {
    fontSize: 30,
    color: "#fff",
    textAlign:"center",
     textShadowColor: '#0e5572',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },

  textContainer: {
    margin: "5%",
  },
  textStyle: {
    fontSize: 18,
    textAlign: "left"
  },

  scrollViewContainer: {
    marginTop: 5,
    height: 400
  },


  buttonTextStyle: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center"
  },

  textInputContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: "30%",
      marginLeft: "10%",
      marginRight: "10%",
      padding: 20
  },
  textInputStyle: {
      width: "100%",
      margin: 10,
      textAlign: "center",
      padding: 10,
      fontSize: 18,
      backgroundColor: "#fff",
      opacity: 0.7,
      borderRadius: 30
  },

  buttonStyle: {
    padding: 10
  },



  infoButtonContainer: {
    alignItems: "flex-end",
    margin: "5%",
    padding: 10
  },
  
  infoButtonText: {
    fontSize: 14,
    color: "#fff",
    textAlign: "center"
  },
  


  CloseBtnContainer: {},

  CloseBtnText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold"
  },

  CloseBtnStyle: {
      backgroundColor: "#c89fe0",
      borderRadius: 30,
     // borderWidth: 1,
    //  borderColor: '#222',

      marginTop: 20,
      marginRight: "35%",
      marginLeft: "35%",
      marginBottom: 20,
      padding: 8
  }


});

export default Login
