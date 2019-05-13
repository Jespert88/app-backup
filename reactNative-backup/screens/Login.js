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


          storeData = async () => {
            try {
              var AsyncUsername = this.state.userStoreData;
              await AsyncStorage.setItem('@AsyncUser', AsyncUsername)
              JSON.parse(AsyncUsername);
            } catch (e) {
              // saving error
            }
          }
          storeData()
          this.props.navigation.navigate('HomeScreen');


          /*
          setNewAsyncUser = () => {
            var AsyncUsername = this.state.userStoreData
            JSON.parse(val)
            AsyncStorage.setItem("@AsyncUser" , JSON.stringify(AsyncUsername))
          }
        
          setNewAsyncUser()*/
          
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
                I motsättning till vad många tror, är inte Lorem Ipsum slumpvisa ord.
                Det har sina rötter i ett stycke klassiskt litteratur på latin från 45 år före år 0, 
                och är alltså över 2000 år gammalt. Richard McClintock, en professor i latin på Hampden-Sydney{"\n"}{"\n"}   
                College i Virginia, översatte ett av de mer ovanliga orden, consectetur, från ett stycke Lorem 
                Ipsum och fann dess ursprung genom att studera användningen av dessa ord i klassisk litteratur.
                Lorem Ipsum kommer från styckena 1.10.32 och 1.10.33 av "de Finibus Bonorum et Malorum" 
                (Ytterligheterna av ont och gott) av Cicero, skriven 45 före år 0. Boken är en avhandling i 
                teorier om etik, och var väldigt populär under renäsanssen. Den inledande meningen i Lorem Ipsum, 
                "Lorem Ipsum dolor sit amet...", kommer från stycke 1.10.32.{"\n"}{"\n"}


                
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
