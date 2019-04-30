import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, ScrollView  } from 'react-native';



export class Profile extends React.Component {
  
//This is for styling the stacknavigator backgroundColor: '#56b2d8', or in this case for hidning.
  static navigationOptions = {
    header: null
  };

  render() {

    return (
      
      <ImageBackground source={require('../assets/wallpaper.jpg')} style={{width: "100%", height: "100%"}}>
        <ScrollView style={stylesProfile.mainContainer}>
        
            
        <View style={stylesProfile.signOutContainer}>
                <View style={stylesProfile.backBtnContainer}>
                    <TouchableOpacity  onPress={() => this.props.navigation.navigate("LoginScreen")}>
                    <Image source={require('../assets/back.png')} 
                    style={{
                        margin: 5,
                        padding: 10,
                        height: 20,
                        width: 20,
                        resizeMode: 'stretch',
                    }}></Image>
                    <Text>Tillfällig: Error att gå tillbaka till homescreen så just nu Loginscreen, fixa lösning.</Text>
                    </TouchableOpacity>
            </View>
        </View>

        
        <View style={stylesProfile.achivmentContainer}>
          <View style={{alignItems: "center", flexDirection: "row", justifyContent: "center"}}>
              <Text style={stylesProfile.titleStyle}> Jeppe </Text>
              <Image source={require('../assets/brain.png')} style={{width: 30, height: 30}}></Image>
          </View>

          <View style={stylesProfile.StatsTextContainer}>
              <Text style={stylesProfile.profileStatsText}>Timmar: 3</Text>
              <Text style={stylesProfile.profileStatsText}>Minuter: 180</Text>
              <Text style={stylesProfile.profileStatsText}>Sekunder: 10800</Text>
          </View><Text>{"\n"}</Text>


            <View style={stylesProfile.characterContainer}>
              <Text style={stylesProfile.characterTitle}>Samtalskaraktär</Text>
              <Image source={require('../assets/buddha.png')} style={{width: 100, height: 100}}></Image>
              <Text style={stylesProfile.textStyle}> Den upplysta </Text>
            </View><Text>{"\n"}{"\n"}</Text>


            <Text style={stylesProfile.titleStyle}> Achievements </Text>
            <View style={stylesProfile.achivmentFlexGrid}>
              <View style={stylesProfile.achiveImgContainer}>
              <Image source={require('../assets/chat.png')} style={{width: 50, height: 50}}></Image>
              <Text style={stylesProfile.textStyle}>First Talk</Text>
              <Text style={stylesProfile.textStyle}>1 Timme</Text>
              </View>

              <View style={stylesProfile.achiveImgContainer}>
              <Image source={require('../assets/chat2.png')} style={{width: 50, height: 50}}></Image>
              <Text style={stylesProfile.textStyle}>None Stop</Text>
              <Text style={stylesProfile.textStyle}>3 Timmar</Text>
              </View>

              <View style={stylesProfile.achiveImgContainerNoColor}>
              <Image source={require('../assets/brain2.png')} style={{width: 50, height: 50}}></Image>
              <Text style={stylesProfile.textStyleNoColor}>Learning</Text>
              <Text style={stylesProfile.textStyleNoColor}>5 Timmar</Text>
              </View>

              <View style={stylesProfile.achiveImgContainerNoColor}>
              <Image source={require('../assets/brain2.png')} style={{width: 50, height: 50}}></Image>
              <Text style={stylesProfile.textStyleNoColor}>Learning</Text>
              <Text style={stylesProfile.textStyleNoColor}>5 Timmar</Text>
              </View>
            </View>
              


          </View>
        </ScrollView>
     </ImageBackground> 
    )
  }
}

const stylesProfile = StyleSheet.create({
  mainContainer: {
    flex: 1,
    /*backgroundColor: "lightgreen"*/
  },
  titleContainer: {
    marginTop: "20%",
    alignItems: "center",
  },
  titleStyle: {
    textAlign: "center",
    fontSize: 30,
    color: "#fff",
    textShadowColor: '#9c29b7',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    padding: 5 
  },
  textStyle: {
    textAlign: "center",
    fontSize: 15,
    color: "#fff",
    textShadowColor: '#9c29b7',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10 
  },
  textStyleNoColor: {
    textAlign: "center",
    fontSize: 15,
    color: "#fff",
  },
  StatsTextContainer: {
    margin: 10,
    alignItems: "center",
  },
  profileStatsText: {
    fontSize: 20,
    color: "#fff",
    textShadowColor: '#9c29b7',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 2 
  },

  characterContainer: {
    alignItems: "center"
  },
  characterTitle: {
    fontSize: 20,
    color: "#fff",
    textShadowColor: '#9c29b7',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },


  achivmentContainer: {
    flex: 1, 
    height: "auto",
    backgroundColor: 'rgba(81, 37, 173, 0.3)',
    margin: 10,
    padding: 5,
    borderRadius: 20, 
  },
  achivmentFlexGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    //backgroundColor: "green",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20
    
  },
achiveImgContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'rgba(81, 37, 173, 0.3)',
    borderRadius: 10,
    margin: 5,
    width: 100,
    height: 100
},
achiveImgContainerNoColor: {
  alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'rgba(144, 146, 150, 0.5)',
    borderRadius: 10,
    margin: 5,
    width: 100,
    height: 100
},





  signOutContainer: {
    flexDirection: "row"
  },
  backBtnContainer: {
    marginTop: 20,
    marginLeft: 20
  }

});

export default Profile