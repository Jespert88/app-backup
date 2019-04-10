import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, ImageBackground, TouchableOpacity, Modal, ScrollView, Alert  } from 'react-native';





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
     <ImageBackground source={require('../assets/blue-wallpaper.jpg')} style={{width: "100%", height: "100%"}}>
        
        <View style={stylesLogin.mainContainer}>

          <View style={stylesLogin.titleContainer}>
            <Text style={stylesLogin.titleStyle}> Samtalsgeneratorn </Text>
          </View>

            
             <View style={stylesLogin.textInputContainer}>
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
                
                <TouchableOpacity style={{marginTop: 20}} onPress={this.checkUser}>
                    <Text style={stylesLogin.buttonTextStyle}> Logga in </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{marginTop: 220}} onPress={() => this.props.navigation.navigate("RegisterScreen")}>
                    <Text style={stylesLogin.buttonTextStyle}> Registrera </Text>
                </TouchableOpacity>
            </View>
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
                Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. 
                Lorem ipsum har varit standard ända sedan 1500-talet, 
                när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett 
                provexemplar av en bok.{"\n"} {"\n"} 
                
                Lorem ipsum har inte bara överlevt fem århundraden, 
                utan även övergången till elektronisk typografi utan större förändringar. 
                Det blev allmänt känt på 1960-talet i samband med lanseringen av Letraset-ark 
                med avsnitt av Lorem Ipsum, och senare med mjukvaror som Aldus PageMaker.

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
            <Image source={require("../assets/infov3.png")} style={{width: 30, height: 30}}></Image>
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
    marginTop: "10%"
  },

  titleStyle: {
    fontSize: 40,
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
    height: 400
  },


  buttonTextStyle: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center"
  },



  textInputContainer: {
      marginTop: "10%",
      marginLeft: "10%",
      marginRight: "10%",
  },
  textInputStyle: {
      textAlign: "center",
      margin: "5%",
      padding: 10,
      fontSize: 18,
      backgroundColor: "#fff",
      opacity: 0.7,
      borderRadius: 30
  },



  buttonStyle: {
    backgroundColor: "green",
    borderRadius: 30,
    marginTop: 20,
    marginRight: 70,
    marginLeft: 70,
    marginBottom: 20,
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
    color: "#fff",
    fontWeight: "bold"
  },

  CloseBtnStyle: {
    backgroundColor: "#56b2d8",
      borderRadius: 30,
      marginTop: 20,
      marginRight: "35%",
      marginLeft: "35%",
      marginBottom: 20,
      padding: 8
  }


});

export default Login
