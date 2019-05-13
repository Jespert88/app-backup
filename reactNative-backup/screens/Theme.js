import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity  } from 'react-native';





export class Theme extends React.Component {

        //This is for styling the stacknavigator backgroundColor: '#56b2d8', or in this case for hidning.
        static navigationOptions = {
          header: null
        };


         // Timer example.     
         constructor(props) {
          super(props);
      
          this.state = {
            data: "",
            timer: null,
           // myHours: '00',
            myMinutes: '00', //These varibles are for saving in the database.
            mySeconds: '00', // Same here.

            hour_Counter: '00',
            minutes_Counter: '00', //Change back to '00'
            seconds_Counter: '00', //Change back to '00'
            startDisable: false
          }
        }



        // GET request from server that send back a randomize json object. (Created in Server!)
         getTheme = () => {
            fetch("https://samtal-server.herokuapp.com/theme/random-theme", {
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


       

          componentWillUnmount() {
            clearInterval(this.state.timer);
          }
       
          //Start timer.
          onButtonStart = () => {

            var timer = setInterval(() => {
         
              var num = (Number(this.state.seconds_Counter) + 1).toString(),
                count = this.state.minutes_Counter;
         
              if (Number(this.state.seconds_Counter) == 59) {
                count = (Number(this.state.minutes_Counter) + 1).toString();
                num = '00';
              }
         
              this.setState({
               // hour_Counter: How to count hours?,

                minutes_Counter: count.length == 1 ? '0' + count : count,
                seconds_Counter: num.length == 1 ? '0' + num : num,
              });
            }, 1000);
            this.setState({ timer });
         
            this.setState({startDisable : true})
          }

          //Stop timer.
          onButtonStop = () => {
              clearInterval(this.state.timer);
              this.setState({
                startDisable : false,
                
               // myHours: this.state.hour_Counter,
                myMinutes: this.state.minutes_Counter,
                mySeconds: this.state.seconds_Counter
              })

              //postTime() Will execute the post function.
            }

         
          //Clear timer.
          onButtonClear = () => {
            this.setState({
              timer: null,
              minutes_Counter: '00',
              seconds_Counter: '00'
            });
          }
        //End of timer example.
        
      

        // Sends a POST request to server with new time varibles.
        /* 
        postTime = () => {
          fetch('http://samtal-server.herokuapp.com/login', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },

            // Should i send strings or Ints to server? Must specify in the server and mongoDB User colletion. (Create first!)
            body: JSON.stringify({
              minutes: this.state.minutes_Counter,
              seconds: this.state.seconds_Counter
            })
          })
            .then((response) => response.json())
            .then((responseJson) => {
              
              
            })
            .catch((error) => {
              console.log(error);
            })
        };
        */

           // This function is called when all the elements of the page is rendered correctly.
           componentDidMount(){
            this.getTheme()
          }



  render() {
    return (

      <ImageBackground source={require('../assets/wallpaper.jpg')} style={{width: "100%", height: "100%"}}>
        <View style={stylesTheme.mainContainer}>

        <View style={stylesTheme.backBtnContainer}>
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

          {/* This is just for checking! 
          <Text style={{marginLeft: "40%", fontSize: 20}}> Minuter: {this.state.myMinutes} </Text>
          <Text style={{marginLeft: "40%", fontSize: 20}}> Sekunder: {this.state.mySeconds} </Text>
          */}
      
        <View style={stylesTheme.titleContainer}>
          <Text style={stylesTheme.titleStyle}>{this.state.data} </Text>
        </View>


        <View style={stylesTheme.nextBtnContainer}>
          <TouchableOpacity  style={stylesTheme.nexBtnStyle} onPress={this.getTheme}>
            <Text style={stylesTheme.buttonText}> Välj nytt tema </Text>
          </TouchableOpacity >  
        </View>

       
     
            {/* This is for show buttons and timer */}
            <View style={stylesTheme.timerContainer}>

              <View style={stylesTheme.timerView}>
                <Text style={stylesTheme.counterText}>{this.state.minutes_Counter} : {this.state.seconds_Counter}</Text>
              </View>
            
              <TouchableOpacity
              onPress={this.onButtonStart}
              activeOpacity={0.6}
              style={[stylesTheme.timerButtons, { backgroundColor: this.state.startDisable ? '#FFFFFF' : '#FFFFFF' }]} 
              disabled={this.state.startDisable} >

              <Text style={stylesTheme.buttonText}>START</Text>
              </TouchableOpacity>


              <TouchableOpacity
              onPress={this.onButtonStop}
              activeOpacity={0.6}
              style={[stylesTheme.timerButtons, { backgroundColor:  '#FFFFFF'}]} >

              <Text style={stylesTheme.buttonText}>STOP</Text>
              </TouchableOpacity>

        
              <TouchableOpacity
              onPress={this.onButtonClear}
              activeOpacity={0.6}
              style={stylesTheme.timerButtons} 
              disabled={this.state.startDisable} >

              <Text style={stylesTheme.buttonText}> RENSA </Text>
              </TouchableOpacity>
             
            </View>
            {/* End */}

            <View>
          
        </View>
            
    
        </View>
      </ImageBackground>
    )
  }
}

const stylesTheme = StyleSheet.create({
  mainContainer: {
    flex: 1,
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
    fontSize: 50,
    padding: 10,
    textAlign: "center",
    color: "#fff",
    textShadowColor: '#570682',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10 
  },

  
 //Buttonstyle
 nextBtnContainer: {
   // backgroundColor: "blue",
    marginTop: 145,
    width: "100%"
  },
  nexBtnStyle: {
    margin: 10,
    marginRight: 80,
    marginLeft: 80,
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
   // backgroundColor: "orange",
    marginTop: 70,
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

  backBtnContainer: {
    margin: "5%",
    marginTop: 40
  }


});

export default Theme