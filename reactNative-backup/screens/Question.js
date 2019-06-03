import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Alert  } from 'react-native';
//import { ifStatement } from '@babel/types';
import AsyncStorage from '@react-native-community/async-storage';





export class Question extends React.Component {

//This is for styling the stacknavigator backgroundColor: '#56b2d8', or in this case for hidning.
static navigationOptions = {
  header: null
};

  // Timer example.     
  constructor(props) {
    super(props);

    this.state = {
      myId: null, //These are for mobile memory.
      myUsername: null, //These are for mobile memory.

      myHours: 0, //These are for saving in db.
      myMinutes: 0, //These are for saving in db.
      mySeconds: 0, //These are for saving in db.
      myPoints: 0, //These are for saving in db.
    

      hour_Counter: '00', //These are for timer.
      minutes_Counter: '00', //These are for timer.
      seconds_Counter: '00', //These are for timer.
      startDisable: false //These are for timer.
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
              myId: responseJson._id,
              myUsername: responseJson.username,
              myHours: responseJson.hours,
              myMinutes: responseJson.minutes,
              mySeconds: responseJson.seconds,
              myPoints: responseJson.points,
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

  // GET request from server that send back a randomize json object. (Created in Server!)
  getQuestion = () => {
    fetch("https://samtal-server.herokuapp.com/question/random-question", {
        method: "GET"
      })
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          data: responseJson.randomObj
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }





  // Saves the time when user clicks on button.
  postTime = () => {

      this.setState((state) => ({
        myMinutes: state.minutes_Counter,
        mySeconds: state.seconds_Counter,
      }));

    /*
    var newHour = parseInt(this.state.hour_Counter);
    var newMin = parseInt(this.state.myMinutes);
    var newSec = parseInt(this.state.mySeconds);
    */
    
    fetch('https://samtal-server.herokuapp.com/post-data-to-user', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id: this.state.myId,
        hours: this.state.myHours,
        minutes: this.state.myMinutes,
        seconds: this.state.mySeconds,
        points: this.state.myPoints,
      })
    })
    .then(response => response.json())
    .then(responseJson => {
      //console.log(responseJson);
    }); 

    alert("Tid sparad");
  }
  

  //Start timer.
  startTimer = () => {

    let timer = setInterval(() => {
           
      var num = (Number(this.state.seconds_Counter) + 1).toString(),
        count = this.state.minutes_Counter;
 
      if (Number(this.state.seconds_Counter) == 59) {
        count = (Number(this.state.minutes_Counter) + 1).toString();
        num = '00';
      }
 
      this.setState({
        minutes_Counter: count.length == 1 ? '0' + count : count,
        seconds_Counter: num.length == 1 ? '0' + num : num
      });
    }, 1000);
    this.setState({ timer });
 
    this.setState({startDisable : true})

  };

  //Stop timer.
  stopTimer = () => {
    clearInterval(this.state.timer);
    this.setState((state) => ({
      startDisable: false,
      myMinutes: this.state.minutes_Counter,
      mySeconds: this.state.seconds_Counter,
      myPoints: 1
    }));
  };

  //Reset timer.
  resetTimer = () => {
    this.setState({
      timer: null,
      minutes_Counter: '00',
      seconds_Counter: '00',
    });
  };


 
  /* 
  componentWillMount is done before the INITIAL render of a component, 
  and is used to assess props and do any extra logic based upon them (usually to also update state), 
  and as such can be performed on the server in order to get the first server side rendered markup.
  */
  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  // This function is called when all the elements of the page is rendered correctly.
  componentDidMount() {
    this.getProfileData();
    this.getQuestion();
  }



  render() {
    return (

      <ImageBackground source={require('../assets/wallpaper.jpg')} style={{width: "100%", height: "100%"}}>
        <View style={stylesQuestion.mainContainer}>

          <View style={stylesQuestion.HeaderContainer}>  
              <View style={stylesQuestion.backBtnContainer}>
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

            {/* Profile Container */}
            <View style={stylesQuestion.profileContainer}>
                <TouchableOpacity  onPress={() => this.props.navigation.navigate("ProfileScreen")}>
                  <Image source={require('../assets/user.png')} 
                    style={{
                      margin: 10,
                      padding: 10,
                      height: 40,
                      width: "auto",
                      justifyContent: "center",
                      alignItems: "center",
                      resizeMode: 'contain',
                    }}></Image>
                  <Text style={stylesQuestion.profileText}> Min profil </Text>
                </TouchableOpacity>
              </View>
        </View>




        {/* Shows the result from getQuestion req. */}
        <View style={stylesQuestion.titleContainer}>
          <Text style={stylesQuestion.titleStyle}>{this.state.data} </Text>
        </View>

        {/* GetQuestion button */}
        <View style={stylesQuestion.nextBtnContainer}>
          <TouchableOpacity  style={stylesQuestion.nexBtnStyle} onPress={this.getQuestion}>
            <Text style={stylesQuestion.buttonText}> Välj ny fråga </Text>
          </TouchableOpacity >  
        </View>

      

        {/* Timer */}
        <View style={stylesQuestion.timerContainer}>
          <View style={stylesQuestion.timerView}>
            <Text style={stylesQuestion.counterText}> 
            {this.state.minutes_Counter} : {this.state.seconds_Counter} 
            </Text>
          </View>
          
          <TouchableOpacity  style={stylesQuestion.nexBtnStyle} onPress={this.startTimer}>
            <Text style={stylesQuestion.buttonText}> Start </Text>
          </TouchableOpacity >  

          <TouchableOpacity  style={stylesQuestion.nexBtnStyle} onPress={this.stopTimer}>
            <Text style={stylesQuestion.buttonText}> Stop </Text>
          </TouchableOpacity >  
          {/* 
          <TouchableOpacity  style={stylesQuestion.nexBtnStyle} onPress={this.resetTimer}>
            <Text style={stylesQuestion.buttonText}> Nollställ </Text>
          </TouchableOpacity >  
          */}
          {/* postTime button */}
          <TouchableOpacity  style={stylesQuestion.nexBtnStyle} onPress={this.postTime}>
            <Text style={stylesQuestion.buttonText}> Spara tiden </Text>
          </TouchableOpacity >
        </View>
        {/* End of Timer */}
    
        </View>
      </ImageBackground>
    )
  }
}

const stylesQuestion = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  HeaderContainer: {
    flexDirection: "row",
    //backgroundColor: "orange",
  },
  backBtnContainer: {
    //backgroundColor: "blue",
    paddingTop: 30,
    paddingLeft: 20,
  },
  profileContainer: {
    //backgroundColor: "green",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "60%"
  },
  profileText: {
    fontSize: 16,
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center"
   /* textShadowColor: '#9c29b7',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10 */
  },

  //Titlestyle
  titleContainer: {
    //backgroundColor: "green",
    position: "absolute",
    marginTop: "30%",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  titleStyle: {
    fontSize: 30,
    padding: 10,
    textAlign: "center",
    color: "#fff",
    textShadowColor: '#570682',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10 
  },

 //Buttonstyle
 nextBtnContainer: {
    //backgroundColor: "blue",
    marginTop: 160,
    width: "100%"
  },
  nexBtnStyle: {
    margin: 10,
    marginRight: 90,
    marginLeft: 90,
    padding: 10,
    backgroundColor: "#fff",
    opacity: 0.7,
    borderRadius: 30
  },
  buttonText:{
    fontSize: 18,
    color: "#000",
    textAlign: "center"
  },

  //Timer Style
  timerContainer: {
    //backgroundColor: "orange",
    marginTop: 35,
    width: "100%"
  },
  timerView:{
    alignItems: "center",
    justifyContent: "center",
  },
  counterText:{
    fontSize: 30,
    color: "#fff",
    textShadowColor: '#570682',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  timerButtons: {
    margin: 10,
    marginRight: 80,
    marginLeft: 80,
    padding: 10,
    backgroundColor: "#fff",
    opacity: 0.7,
    borderRadius: 30
  },
});

export default Question