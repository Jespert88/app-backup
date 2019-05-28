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

      jsonData: null,
      myId: null,
      myUsername: null,
      myHours: null,
      myMinutes: null,
      mySeconds: null,
      myPoints: null,


      //Question Mark.
      questionMark: require('../assets/question.png'),
      emptyText: "",


      //Prestation 1
      achiveIMG1: require('../assets/chat.png'),
      achiveText1: "Första samtalet",

     


      //Prestation 2

      //Prestation 3

      //Prestation 4

      //Prestation 5

      //Prestation 6






      //Avatas with colors.
      imageURI: require('../assets/baby.png'),
      avatarText: "Karaktär 1",

      imageURI2: require('../assets/student.png'),
      avatarText2: "Karaktär 2",

      imageURI3: require('../assets/buddha.png'),
      avatarText3: "Karaktär 3",

      //Avatars without colors.
      imageURIBlack: require('../assets/baby-black.png'),
     
      imageURI2Black: require('../assets/student-black.png'),

      imageURI3Black: require('../assets/buddha-black.png'),

    }
  }




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
        .then(jsonData => {
          
          this.setState({
            myUsername: jsonData.username,
            myHours: jsonData.hours,
            myMinutes: jsonData.minutes,
            mySeconds: jsonData.seconds,
            myPoints: jsonData.points
          });

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

            {/* Avatar container */}
            <Text style={stylesProfile.characterTitle}> Samtalskaraktär </Text>
            <View style={stylesProfile.characterContainer}>
              
              {/* 1 avatar container */}
              <View style={stylesProfile.characterContainer1}>
                <Image style={{width: 80, height: 80}} source={this.state.imageURI}></Image>
                <Text style={stylesProfile.textStyle}> {this.state.avatarText} </Text>
              </View>

              {/* 2 avatar container */}
              <View style={stylesProfile.characterContainer2}>
                <Image style={{width: 80, height: 80}} source={this.state.imageURI2Black}></Image>
                <Text style={stylesProfile.textStyle}> {this.state.avatarText2} </Text>
              </View>

              {/* 3 avatar container */}
              <View style={stylesProfile.characterContainer3}>
                <Image style={{width: 80, height: 80}} source={this.state.imageURI3Black}></Image>
                <Text style={stylesProfile.textStyle}> {this.state.avatarText3} </Text>
              </View>

            

            </View><Text>{"\n"}</Text>


            {/* Achievements container */}
            <Text style={stylesProfile.titleStyle}> Prestationer </Text>
            <View style={stylesProfile.achivmentFlexGrid}>


              {/* Prestationer 1 */}   
                <View style={stylesProfile.achiveImgContainer}>
                  <Image style={{width: 50, height: 50}} source={this.state.questionMark}></Image>
                  <Text style={stylesProfile.textStyle}> {this.state.emptyText} </Text>
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

  characterContainer1: {
    alignItems: "center",
    padding: 10
    //backgroundColor: "red"
  },
  characterContainer2: {
    alignItems: "center",
    padding: 10
   // backgroundColor: "blue"
  },
  characterContainer3: {
    alignItems: "center",
    padding: 10
    //backgroundColor: "yellow"
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