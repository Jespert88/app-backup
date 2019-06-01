import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity  } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import QRCode from 'react-native-qrcode';


export class Choose extends React.Component {
  
  //This is for styling the stacknavigator backgroundColor: '#56b2d8', or in this case for hidning.
  static navigationOptions = {
    header: null
  };

  constructor(props){
    super(props);

    this.state = {
      myQrCode: "null"
    }

  }

  getQrCode = async () => {
    try {
  
      // Get the AsyncStorage keys.
      const idFromAsync = await AsyncStorage.getItem('@asyncId');
      const nameFromAsync = await AsyncStorage.getItem('@asyncName');
  
      if (idFromAsync !== null) {
  
        fetch('https://samtal-server.herokuapp.com/get-user-data', {
            method: 'POST',
            //mode: "cors",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
  
            },
            body: JSON.stringify({
              username: nameFromAsync
            })
          })
          .then(response => response.json())
          .then(jsonData => {
            
            this.setState({
              myQrCode: jsonData.qrcode
            });
            
            console.log(this.state.myQrCode);
          })
          .catch((err) => {
            console.log(err);
          });
  
      } else {
        console.log("There is no id..");
      }
  
    } catch (e) {
      console.log(e);
    }
  }

  componentDidMount() {
    this.getQrCode();
  }

    

   




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



          {/* Installera innan användning ( npm install react-native-qrcode --save ). */}
          <View style={stylesChoose.qrcode}>
            <QRCode size={135} value={this.state.myQrCode}></QRCode>
          </View>
          <View style={stylesChoose.titleContainerQR}>
            <Text style={stylesChoose.titleStyleQR}> Skapa grupp </Text>

            <View style={stylesChoose.subTitlesContainer}>
              <Text style={stylesChoose.subTitles}> 
                 Andra personer måste skanna {"\n"}
                din kod för att gruppen ska startas.
              </Text>
            </View>
            
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
    justifyContent: "center",
    overflow: "hidden",
    padding: 10,
    marginLeft: 80,
    marginRight: 80,
    borderRadius: 20
  },

  titleContainerQR: {
    marginTop: "2%",
    textAlign: "center",
  },

  titleStyleQR: {
    textAlign: "center",
    fontSize: 25,
    color: "#fff",
    textShadowColor: '#570682',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },


  titleContainer: {
    marginTop: "5%",
    textAlign: "center",
  },

  titleStyle: {
    textAlign: "center",
    fontSize: 25,
    color: "#fff",
    textShadowColor: '#570682',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },

  subTitlesContainer: {
    //backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 40
  },

  subTitles: {
    textAlign: "left",
    fontSize: 18,
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



  buttonContainer: {
    //backgroundColor:"#303",
    //marginTop: "5%"
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