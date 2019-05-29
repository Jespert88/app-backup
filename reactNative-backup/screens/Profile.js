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

    myId: null,
    myUsername: null,
    myHours: null,
    myMinutes: null,
    mySeconds: null, 
    myPoints: null,


    test: "",

    //Prestation 1
    achiveIMG1: require('../assets/question.png'),
    achiveText1: "",

    //Prestation 2
    achiveIMG2: require('../assets/question.png'),
    achiveText2: "",

    //Prestation 3
    achiveIMG3: require('../assets/question.png'),
    achiveText3: "",

    //Prestation 4
    achiveIMG4: require('../assets/question.png'),
    achiveText4: "",

    //Prestation 5
    achiveIMG5: require('../assets/question.png'),
    achiveText5: "",

    //Prestation 6
    achiveIMG6: require('../assets/question.png'),
    achiveText6: "",

  }
}

// Get AsyncStorage value and then takes that value and make a http req with post, and sets state from that value.
getProfileData = async () => {
  try {

    // Get the AsyncStorage keys.
    const idFromAsync = await AsyncStorage.getItem('@asyncId');
    const nameFromAsync = await AsyncStorage.getItem('@asyncName');


    /*
      If keys are not null, then make new var and parse key from string back to object.
      This is done becurse otherwise the this.state.key will show this in App: username example: "Jeppe".
      And you don't wanna show " <-- this so therefor you must convert back to Json Object 
      with JSON.parse(key); 
    */

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
        .then(responseJson => {

          this.setState({
            myUsername: responseJson.username,
            myHours: responseJson.hours,
            myMinutes: responseJson.minutes,
            mySeconds: responseJson.seconds,
            myPoints: responseJson.points,
          });


          //Check wich Achivments that should be displayed.
          checkAchivement1 = (err) => {

            if (this.state.myPoints >= 5) {

              this.setState({
                achiveIMG1: require('../assets/chat.png'),
                achiveText1: "Första \n samtalet",
              })

            } else if (this.state.myPoints = 0) {
              this.setState({
                achiveIMG1: require('../assets/question.png'),
                achiveText1: "",
              })
            } else {
              console.log(err);
            }

          }
          checkAchivement1();

          checkAchivement2 = (err) => {

            if (this.state.myPoints >= 10) {

              this.setState({
                achiveIMG2: require('../assets/chat2.png'),
                achiveText2: "Pratkvarn",
              })

            } else if (this.state.myPoints = 0) {
              this.setState({
                achiveIMG2: require('../assets/question.png'),
                achiveText2: "",
              })
            } else {
              console.log(err);
            }

          }
          checkAchivement2();

          checkAchivement3 = (err) => {

            if (this.state.myPoints >= 30) {

              this.setState({
                achiveIMG3: require('../assets/apple.png'),
                achiveText3: "Du lär dig",
              })

            } else if (this.state.myPoints = 0) {
              this.setState({
                achiveIMG3: require('../assets/question.png'),
                achiveText3: "",
              })
            } else {
              console.log(err);
            }

          }
          checkAchivement3();

          checkAchivement4 = (err) => {

            if (this.state.myPoints >= 40) {

              this.setState({
                achiveIMG4: require('../assets/ear.png'),
                achiveText4: "Du lyssnar bra",
              })

            } else if (this.state.myPoints = 0) {
              this.setState({
                achiveIMG4: require('../assets/question.png'),
                achiveText4: "",
              })
            } else {
              console.log(err);
            }

          }
          checkAchivement4();

          checkAchivement5 = (err) => {

            if (this.state.myPoints >= 50) {

              this.setState({
                achiveIMG5: require('../assets/hand.png'),
                achiveText5: "Det är roligt \n att lära sig",
              })

            } else if (this.state.myPoints = 0) {
              this.setState({
                achiveIMG5: require('../assets/question.png'),
                achiveText5: "",
              })
            } else {
              console.log(err);
            }

          }
          checkAchivement5();

          checkAchivement6 = (err) => {

            if (this.state.myPoints >= 60) {

              this.setState({
                achiveIMG6: require('../assets/buddha.png'),
                achiveText6: "Nu vet jag allt",
              })

            } else if (this.state.myPoints = 0) {
              this.setState({
                achiveIMG6: require('../assets/question.png'),
                achiveText6: "",
              })
            } else {
              console.log(err);
            }

          }
          checkAchivement6();



          
      




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
  this.getProfileData();
}


  render() {

    return (
      
      <ImageBackground source={require('../assets/wallpaper.jpg')} style={{width: "100%", height: "100%"}}>
        <ScrollView style={stylesProfile.mainContainer}>
        

        {/* Username container */}
        <View style={stylesProfile.achivmentContainer}>

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

              <View style={stylesProfile.syncBtnContainer}>
                <TouchableOpacity  onPress={this.getProfileData}>
                <Image source={require('../assets/sync-arrows.png')} 
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

           <Text>{"\n"}</Text>


            {/* Achievements container */}
            <Text style={stylesProfile.titleStyle}> Prestationer </Text>
            <View style={stylesProfile.achivmentFlexGrid}>


              {/* Prestation 1 */}   
                <View style={stylesProfile.achiveImgContainer}>
                  <Image style={{width: 50, height: 50}} source={this.state.achiveIMG1}></Image>
                  <Text style={stylesProfile.achiveTextStyle}> {this.state.achiveText1} </Text>
                </View>

              {/* Prestation 2 */}   
              <View style={stylesProfile.achiveImgContainer}>
                  <Image style={{width: 50, height: 50}} source={this.state.achiveIMG2}></Image>
                  <Text style={stylesProfile.achiveTextStyle}> {this.state.achiveText2} </Text>
                </View>

              {/* Prestation 3 */}   
              <View style={stylesProfile.achiveImgContainer}>
                  <Image style={{width: 50, height: 50}} source={this.state.achiveIMG3}></Image>
                  <Text style={stylesProfile.achiveTextStyle}> {this.state.achiveText3} </Text>
                </View>

              {/* Prestation 4 */}   
              <View style={stylesProfile.achiveImgContainer}>
                  <Image style={{width: 50, height: 50}} source={this.state.achiveIMG4}></Image>
                  <Text style={stylesProfile.achiveTextStyle}> {this.state.achiveText4} </Text>
                </View>

              {/* Prestation 5 */}   
              <View style={stylesProfile.achiveImgContainer}>
                <Image style={{width: 50, height: 50}} source={this.state.achiveIMG5}></Image>
                <Text style={stylesProfile.achiveTextStyle}> {this.state.achiveText5} </Text>
              </View>

              {/* Prestation 6 */}   
              <View style={stylesProfile.achiveImgContainer}>
                <Image style={{width: 50, height: 50}} source={this.state.achiveIMG6}></Image>
                <Text style={stylesProfile.achiveTextStyle}> {this.state.achiveText6} </Text>
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
  



  
  StatsTextContainer: {
    margin: 10,
    alignItems: "center",
  },
  profileStatsText: {
    fontSize: 25,
    color: "#fff",
    textShadowColor: '#9c29b7',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 2 
  },

  characterContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    //backgroundColor: "green",
  },
  characterTitle: {
    textAlign: "center",
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
    //backgroundColor: 'rgba(81, 37, 173, 0.3)',
    backgroundColor: 'rgba(33, 4, 61, 0.3)',
    borderRadius: 10,
    margin: 5,
    width: 100,
    height: 100
},

achiveTextStyle: {
  textAlign: "center",
  fontSize: 14,
  color: "#fff",
},








  syncBtnContainer: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: "70%"
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