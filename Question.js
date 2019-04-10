import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity  } from 'react-native';
import CountDown from 'react-native-countdown-component';
//import CountDown to show the timer
import moment from 'moment';
//import moment to help you play with date and time



export class Question extends React.Component {
        
  
        //This is for styling the stacknavigator backgroundColor: '#56b2d8',
        static navigationOptions = {
          header: null
        };


        state = {
            data: ""
        }
  
         componentWillMount = () => {
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

         componentDidMount() {
          var that = this;
          //We are showing the coundown timer for a given expiry date-time
          //If you are making a quize type app then you need to make a simple timer
          //which can be done by using the simple like given below
          //that.setState({ totalDuration: 30 }); //which is 30 sec
          var date = moment()
            .utcOffset('+05:30')
            .format('YYYY-MM-DD hh:mm:ss');
          //Getting the current date-time with required formate and UTC   
          var expirydate = '2030-08-23 04:00:45';//You can set your own date-time
          //Let suppose we have to show the countdown for above date-time 
          var diffr = moment.duration(moment(expirydate).diff(moment(date)));
          //difference of the expiry date-time given and current date-time
          var hours = parseInt(diffr.asHours());
          var minutes = parseInt(diffr.minutes());
          var seconds = parseInt(diffr.seconds());
          var d = hours * 60 * 60 + minutes * 60 + seconds;
          //converting in seconds
          that.setState({ totalDuration: d });
          //Settign up the duration of countdown in seconds to re-render
        }

        /*
        startTimer = () => {
          var date = moment()
            .utcOffset('+05:30')
            .format('YYYY-MM-DD hh:mm:ss');

          var hours = parseInt(date.getHours());
          var minutes = parseInt(date.minutes());
          var seconds = parseInt(date.seconds());
          var d = hours * 60 * 60 + minutes * 60 + seconds;
          //converting in seconds
          that.setState({ totalDuration: d });
          //Settign up the duration of countdown in seconds to re-render

        }
      */


  render() {
    return (

      <ImageBackground source={require('../assets/blue-wallpaper.jpg')} style={{width: "100%", height: "100%"}}>
        <View style={stylesQuestion.mainContainer}>

          
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

          <CountDown
          until={this.state.totalDuration}
          //duration of countdown in seconds
          timetoShow={('H', 'M', 'S')}
          >
          </CountDown>
          
      
       
          



        <View style={stylesQuestion.titleContainer}>
          <Text style={stylesQuestion.titleStyle}>{this.state.data} </Text>
        </View>

        <View style={stylesQuestion.buttonContainer}>
          <TouchableOpacity  style={stylesQuestion.buttonStyle} onPress={this.componentWillMount}>
            <Text style={stylesQuestion.textStyle}> Välj ny fråga </Text>
          </TouchableOpacity >  

          <TouchableOpacity  style={stylesQuestion.buttonStyle} onPress={this.startTimer}>
            <Text style={stylesQuestion.textStyle}> Timer </Text>
          </TouchableOpacity >
        </View>


        


        </View>

      </ImageBackground>
    )
  }
}

const stylesQuestion = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  titleContainer: {
    position: "absolute",
    marginTop: "50%",
    alignItems: "center",
    width: "100%"
  },

  titleStyle: {
    fontSize: 30,
    padding: 10,
    textAlign: "center",
    color: "#fff",
    textShadowColor: '#0e5572',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },

  textStyle: {
    fontSize: 18,
    color: "#000",
    textAlign: "center"
  },

  backBtnContainer: {
    margin: "5%",
    marginTop: 40
  },

  buttonContainer: {
    marginTop: 250
  },

  buttonStyle: {
    margin: 10,
    marginRight: 80,
    marginLeft: 80,
    padding: 10,
    backgroundColor: "#fff",
    opacity: 0.7,
    borderRadius: 30
  }


});

export default Question