import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, ImageBackground, TouchableOpacity, Modal, ScrollView, Alert, KeyboardAvoidingView  } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


export class Login extends React.Component {
    
  constructor(props){
    super(props);

    this.state = {
      modalVisible: false,
      userStoreData: "",
      passwordStoreData: "",
    }

  }
  
   static navigationOptions = {
     header: null
   }
   setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  



  //If i understand, this functions gonna run these two functions when its ready
  // -if there are no errors, send the user to homescreen directly.

    /*
    componentDidMount() {
    this.waitForAsync().done()
  }

  //Get global varible from AsyncStorage, and if value are not null then send user to HomeScreen.
    waitForAsync = async () => {
      var value = await AsyncStorage.getItem('@AsyncUser');
      if (value !== null) {
        this.props.navigation.navigate("homeScreen", value);
      } else {
        console.log("error")
      }
    }
    */
 
  

//Post a user object to the /login route that handels the req. If the request is false, then a alert comes up
//else go to home screen.
 checkUser = (userStoreData) => {
    fetch('http://samtal-server.herokuapp.com/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.userStoreData,
        password: this.state.passwordStoreData
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        
      
        // If responseJson is false, start an a Alert.
        if (responseJson == false) {

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

          setNewAsyncUser = () => {
            var AsyncUsername = this.state.userStoreData
            AsyncStorage.setItem("@AsyncUser" , JSON.stringify(AsyncUsername))
          }
        
          setNewAsyncUser()
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
                onChangeText={(user) => this.setState({userStoreData: user})}
                />
            
                <TextInput
                style={stylesLogin.textInputStyle}
                placeholderTextColor ="#000"
                secureTextEntry={true}
                placeholder="lösenord"
                onChangeText={(password) => this.setState({passwordStoreData: password})}
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
                Syftet med denna applikation är att främja det verbala samtalet över det digitala.{"\n"}{"\n"}


                Genom att klicka på starta samtal knappen, så startar du en aktivitet som gör dig till
                spelledare, vilket du också får en QR-kod som andra spelare ska skanna. Om du istället 
                väljer delta i samtal knappen behöver du skanna en annans spelare QR-kod för att 
                kunna delta i denne persons samtal och få poäng.
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
    marginTop: 20,
    height: "auto"
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
    textAlign: "center",
    fontWeight: "bold"
  },

  CloseBtnStyle: {
   //backgroundColor: "#56b2d8",
      borderRadius: 30,
      borderWidth: 1,
      borderColor: '#222',

      marginTop: 20,
      marginRight: "35%",
      marginLeft: "35%",
      marginBottom: 20,
      padding: 8
  }


});

export default Login
