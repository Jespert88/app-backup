import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, ScrollView  } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';




export class Profile extends React.Component {
//This is for styling the stacknavigator backgroundColor: '#56b2d8', or in this case for hidning.
  static navigationOptions = {
    header: null
  };


  constructor(props) {
    super(props);

    this.state = {
      data: "",
      myUsername: "Hämtar namn",
      myHours: 0,
      myMinutes: 0,
      mySeconds: 0,
      myPoints: 0,
      imageURI: require("../assets/student.png"),
      avatarText: "Jag lär mig",
      // bild 1 = "../assets/baby.png"
      // bild 2 = "../assets/student.png"
      // bild 3 = "../assets/buddha.png"

      // bild 1 text = "Den ovetande"
      // bild 2 text = "Den förstående"
      // bild 3 text = "Den upplysta"

      //Achievements
      /*
      A1: require("../assets/chatNoColor.png"),
      A2: require("../assets/cha2NoColor.png"),
      A3: require("../assets/brain2.png"),
      A4: require("../assets/earNoColor.png"),
      A5: require("../assets/appleNoColor.png"),
      A6: require("../assets/handNoColor.png")
      */

    }
  }


    getAsyncUserTest = async () => {
      
      //this.state.A1 = require("../assets/chat.png"),
      
      this.state.myHours = 1,
      this.state.myMinutes = 60,
      this.state.mySeconds = 1200,
      this.state.myPoints = 10,
      this.state.imageURI = require("../assets/buddha.png"),
      this.state.avatarText = "Jag vet allt"

      //this.state.A1 = require("../assets/chat.png")


      try {
          await AsyncStorage.getItem("@AsyncUser").then(val => {
            this.setState({ 
              myUsername: val
            })
            return JSON.parse(val)
        });
        alert("Inloggad: " + val)
      }
      catch {
        
      }

    }



    componentDidMount() {
      this.getAsyncUserTest()
    }
    
  
  
  render() {

    return (
      
      <ImageBackground source={require('../assets/wallpaper.jpg')} style={{width: "100%", height: "100%"}}>
        <ScrollView style={stylesProfile.mainContainer}>
        
        {/* SignOut Container */}
        <View style={stylesProfile.signOutContainer}>
                <View style={stylesProfile.backBtnContainer}>
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
        </View>


       
        {/* Username container */}
        <View style={stylesProfile.achivmentContainer}>
          <View style={{alignItems: "center", flexDirection: "row", justifyContent: "center"}}>
              <Text style={stylesProfile.titleStyle}> {this.state.myUsername} </Text>
              <Image source={require('../assets/brain.png')} style={{width: 30, height: 30}}></Image>
          </View>

        

          {/* Profilestats container */}
          <View style={stylesProfile.StatsTextContainer}>
              <Text style={stylesProfile.profileStatsText}>Timmar: {this.state.myHours}</Text>
              <Text style={stylesProfile.profileStatsText}>Minuter: {this.state.myMinutes}</Text>
              <Text style={stylesProfile.profileStatsText}>Sekunder: {this.state.mySeconds}</Text>
              <Text style={stylesProfile.profileStatsText}>Poäng: {this.state.myPoints}</Text>
          </View><Text>{"\n"}</Text>

            {/* Avatar container */}
            <View style={stylesProfile.characterContainer}>
              <Text style={stylesProfile.characterTitle}> Samtalskaraktär </Text>
              <Image style={{width: 100, height: 100}} source={this.state.imageURI}></Image>
              <Text style={stylesProfile.textStyle}> {this.state.avatarText} </Text>
            </View><Text>{"\n"}</Text>


            {/* Achievements container */}
            <Text style={stylesProfile.titleStyle}> Achievements </Text>
            <View style={stylesProfile.achivmentFlexGrid}>

                <View style={stylesProfile.achiveImgContainer}>
                  <Image style={{width: 50, height: 50}} source={require("../assets/chat.png")}></Image>
                  <Text style={stylesProfile.textStyle}> First Talk </Text>
                  <Text style={stylesProfile.textStyle}> 10 points </Text>
                </View>

                <View style={stylesProfile.achiveImgContainer}>
                  <Image style={{width: 50, height: 50}} source={require("../assets/chat2NoColor.png")}></Image>
                  <Text style={stylesProfile.textStyle}> None Stop </Text>
                  <Text style={stylesProfile.textStyle}> 20 points </Text>
                </View>

                <View style={stylesProfile.achiveImgContainer}>
                  <Image style={{width: 50, height: 50}} source={require("../assets/brain2.png")}></Image>
                  <Text style={stylesProfile.textStyle}> Learning </Text>
                  <Text style={stylesProfile.textStyle}> 30 points </Text>
                </View>

                <View style={stylesProfile.achiveImgContainer}>
                  <Image style={{width: 50, height: 50}} source={require("../assets/earNoColor.png")}></Image>
                  <Text style={stylesProfile.textStyle}> time to Listen </Text>
                  <Text style={stylesProfile.textStyle}> 40 points </Text>
                </View>

                <View style={stylesProfile.achiveImgContainer}>
                  <Image style={{width: 50, height: 50}} source={require("../assets/appleNoColor.png")}></Image>
                  <Text style={stylesProfile.textStyle}> Knowledge </Text>
                  <Text style={stylesProfile.textStyle}> 50 points </Text>
                </View>

                <View style={stylesProfile.achiveImgContainer}>
                  <Image style={{width: 50, height: 50}} source={require("../assets/handNoColor.png")}></Image>
                  <Text style={stylesProfile.textStyle}> I know all </Text>
                  <Text style={stylesProfile.textStyle}> 100 points </Text>
                </View>

               
                
              {/*
                <View style={stylesProfile.achiveImgContainer}>
                <Image style={{width: 50, height: 50}} source={require("../assets/chatNoColor.png")}></Image>
                <Text style={stylesProfile.textStyle}> First Talk </Text>
                <Text style={stylesProfile.textStyle}> 10 points </Text>
                </View>
 
                <View style={stylesProfile.achiveImgContainer}>
                <Image style={{width: 50, height: 50}} source={require("../assets/cha2NoColor.png")}></Image>
                <Text style={stylesProfile.textStyle}> None Stop </Text>
                <Text style={stylesProfile.textStyle}> 20 points </Text>
                </View>
           
                <View style={stylesProfile.achiveImgContainer}>
                <Image style={{width: 50, height: 50}} source={require("../assets/brain2.png")}></Image>
                <Text style={stylesProfile.textStyle}> Learning </Text>
                <Text style={stylesProfile.textStyle}> 30 points </Text>
                </View>

                <View style={stylesProfile.achiveImgContainer}>
                <Image style={{width: 50, height: 50}} source={require("../assets/earNoColor.png")}></Image>
                <Text style={stylesProfile.textStyle}> time to Listen </Text>
                <Text style={stylesProfile.textStyle}> 40 points  </Text>
                </View>

                <View style={stylesProfile.achiveImgContainer}>
                <Image style={{width: 50, height: 50}} source={require("../assets/appleNoColor.png")}></Image>
                <Text style={stylesProfile.textStyle}> Knowledge </Text>
                <Text style={stylesProfile.textStyle}> 50 points  </Text>
                </View>

                <View style={stylesProfile.achiveImgContainer}>
                <Image style={{width: 50, height: 50}} source={require("../assets/handNoColor.png")}></Image>
                <Text style={stylesProfile.textStyle}> I know all </Text>
                <Text style={stylesProfile.textStyle}> 100 points  </Text>
                </View>
              */}


                {/*  This is for chaning the status of img with data, dont throw!!!!

                <View style={stylesProfile.achiveImgContainer}>
                <Image style={{width: 50, height: 50}} source={this.state.A1}></Image>
                <Text style={stylesProfile.textStyle}> First Talk </Text>
                <Text style={stylesProfile.textStyle}> 10 points </Text>
                </View>
 
                <View style={stylesProfile.achiveImgContainer}>
                <Image style={{width: 50, height: 50}} source={this.state.A2}></Image>
                <Text style={stylesProfile.textStyle}> None Stop </Text>
                <Text style={stylesProfile.textStyle}> 20 points </Text>
                </View>
           
                <View style={stylesProfile.achiveImgContainer}>
                <Image style={{width: 50, height: 50}} source={this.state.A3}></Image>
                <Text style={stylesProfile.textStyle}> Learning </Text>
                <Text style={stylesProfile.textStyle}> 30 points </Text>
                </View>

                <View style={stylesProfile.achiveImgContainer}>
                <Image style={{width: 50, height: 50}} source={this.state.A4}></Image>
                <Text style={stylesProfile.textStyle}> time to Listen </Text>
                <Text style={stylesProfile.textStyle}> 40 points  </Text>
                </View>

                <View style={stylesProfile.achiveImgContainer}>
                <Image style={{width: 50, height: 50}} source={this.state.A5}></Image>
                <Text style={stylesProfile.textStyle}> Knowledge </Text>
                <Text style={stylesProfile.textStyle}> 50 points  </Text>
                </View>

                <View style={stylesProfile.achiveImgContainer}>
                <Image style={{width: 50, height: 50}} source={this.state.A6}></Image>
                <Text style={stylesProfile.textStyle}> I know all </Text>
                <Text style={stylesProfile.textStyle}> 100 points  </Text>
                </View>
              */}
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