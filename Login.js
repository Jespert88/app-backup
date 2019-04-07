import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, ImageBackground, TouchableOpacity, Modal  } from 'react-native';







export class Login extends React.Component {
      
     static navigationOptions = {
       header: null
     }

     state = {
      modalVisible: false,
    };
  
    setModalVisible(visible) {
      this.setState({modalVisible: visible});
    }

  render() {

    return (
     <ImageBackground source={require('../assets/green-wallpaper.png')} style={{width: "100%", height: "100%"}}>
        
        <View style={stylesLogin.mainContainer}>

          <View style={stylesLogin.titleContainer}>
           <Text style={stylesLogin.titleStyle}> Samtalsgeneratorn </Text>
          </View>
           
             <View style={stylesLogin.textInputContainer}>
              <TextInput 
                ref= "username"
                style={stylesLogin.textInputStyle}
                placeholderTextColor ="#000"
                placeholder="användarnamn"
                onChangeText={(text) => this.setState({text})}
                value={this.state.username}
              />

              <TextInput
              ref = "password"
              style={stylesLogin.textInputStyle}
              placeholderTextColor ="#000"
              secureTextEntry={true}
              placeholder="lösenord"
              onChangeText={(text) => this.setState({text})}
              value={this.state.password}
              />
              
              <TouchableOpacity style={{marginTop: 20}} onPress={() => this.props.navigation.navigate("HomeScreen")}>
                  <Text style={stylesLogin.textStyle}> Logga in </Text>
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

            <View>
              <Text>
              Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. 
              Lorem ipsum har varit standard ända sedan 1500-talet, 
              när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett 
              provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden, 
              utan även övergången till elektronisk typografi utan större förändringar. 
              Det blev allmänt känt på 1960-talet i samband med lanseringen av Letraset-ark 
              med avsnitt av Lorem Ipsum, och senare med mjukvaror som Aldus PageMaker.
              </Text>

              <TouchableOpacity
                style={stylesLogin.CloseBtnStyle}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Stäng</Text>
              </TouchableOpacity>
            </View>

          </View>
        </Modal>

        <View style={stylesLogin.infoButtonContainer}>
          <TouchableOpacity onPress={() => { this.setModalVisible(true); }} style={stylesLogin.CloseBtnContainer}>
            <Image source={require("../assets/info.png")} style={{width: 30, height: 30}}></Image>
            <Text> Info </Text>
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
    marginTop: "30%"
  },

  titleStyle: {
    fontSize: 40,
    color: "#000"
  },

  textStyle: {
    fontSize: 18,
    color: "#000",
    textAlign: "center"
  },

  textInputContainer: {
      marginTop: "40%",
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
    backgroundColor: "green",
    marginLeft: "65%"
  },
  infoButtonStyle: {

  },


  CloseBtnContainer: {
    margin: "40%"
  },

  CloseBtnText: {
    textAlign: "center"
  },

  CloseBtnStyle: {
    backgroundColor: "green",
      opacity: 0.7,
      borderRadius: 30,
      padding: 10
  }


});

export default Login


/*
state = { data: "" }

     componentWillMount = () => {
        fetch("https://samtal-server.herokuapp.com/users", {
           method: "GET"
        })
        .then((response) => response.json())
        .then((responseJson) => {
           //console.log(responseJson);
           this.setState({
              data: responseJson.username
           })
           //console.log(responseJson)
        })
        .catch((error) => {
           console.error(error);
        });
     }
*/