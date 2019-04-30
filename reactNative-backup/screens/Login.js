import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, ImageBackground, TouchableOpacity, Modal, ScrollView, Alert, KeyboardAvoidingView  } from 'react-native';





export class Login extends React.Component {
    
    state = {
      modalVisible: false,
      userStoreData: "",
      passwordStoreData: ""
    }

     static navigationOptions = {
       header: null
     }

     setModalVisible(visible) {
      this.setState({modalVisible: visible});
    }

    
    //Post a user object to the /login route that handels the req. If the request is false, then console.log else go to home screen.
    checkUser = () => {
      fetch('http://samtal-server.herokuapp.com/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.state.userStoreData ,
          password: this.state.passwordStoreData
        })
      })
        .then((response) => response.json())
        .then((responseJson) => {
          
          if (responseJson == false) {

            // Works on both iOS and Android
            alert(
              'Båda fälten måste vara ifyllda',
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

          } else {
           // this.props.navigation.navigate('HomeScreen');
           this.props.navigation.navigate('HomeScreen', {
              NameOBJ: this.state.userStoreData
          });
          }

        })
        .catch((error) => {
          console.log(error);
        })
    };

 
  render() {

    return (
     <ImageBackground source={require('../assets/wallpaper.jpg')} style={{width: "100%", height: "100%"}}>
        

        <View style={stylesLogin.mainContainer}>
            <View style={stylesLogin.titleContainer}>
              <Text style={stylesLogin.titleStyle}> Samtalsgeneratorn </Text>
              <Text style={stylesLogin.subTitlestyle}> Slumpar olika teman och frågor för diskussion </Text>
            </View>

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
