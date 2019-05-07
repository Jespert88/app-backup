import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity  } from 'react-native';



export class Question extends React.Component {
        
  
        //This is for styling the stacknavigator backgroundColor: '#56b2d8', or in this case for hidning.
        static navigationOptions = {
          header: null
        };


        state = {
            data: ""
        }
  
        componentDidMount = () => {
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


          // Timer example.     
          constructor(props) {
              super(props);
          
              this.state = {
                timer: null,
                minutes_Counter: '00',
                seconds_Counter: '00',
                startDisable: false
              }
            }

            componentWillUnmount() {
              clearInterval(this.state.timer);
            }
         
            //Start timer.
            onButtonStart = () => {
 
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
            }

            //Stop timer.
            onButtonStop = () => {
                clearInterval(this.state.timer);
                this.setState({startDisable : false})
              }


            //Clear timer.
            onButtonClear = () => {
              this.setState({
                timer: null,
                minutes_Counter: '00',
                seconds_Counter: '00',
              });
            }


          //End of timer example.



  render() {
    return (

      <ImageBackground source={require('../assets/wallpaper.jpg')} style={{width: "100%", height: "100%"}}>
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


              
        <View style={stylesQuestion.titleContainer}>
          <Text style={stylesQuestion.titleStyle}>{this.state.data} </Text>
        </View>

        <View style={stylesQuestion.nextBtnContainer}>
          <TouchableOpacity  style={stylesQuestion.nexBtnStyle} onPress={this.componentDidMount}>
            <Text style={stylesQuestion.buttonText}> Välj ny fråga </Text>
          </TouchableOpacity >  
        </View>



            {/* This is for show buttons and timer */}
            <View style={stylesQuestion.timerContainer}>

              <View style={stylesQuestion.timerView}>
                <Text style={stylesQuestion.counterText}>{this.state.minutes_Counter} : {this.state.seconds_Counter}</Text>
              </View>
            
              <TouchableOpacity
              onPress={this.onButtonStart}
              activeOpacity={0.6}
              style={[stylesQuestion.timerButtons, { backgroundColor: this.state.startDisable ? '#FFFFFF' : '#FFFFFF' }]} 
              disabled={this.state.startDisable} >

              <Text style={stylesQuestion.buttonText}>START</Text>

              </TouchableOpacity>

              <TouchableOpacity
              onPress={this.onButtonStop}
              activeOpacity={0.6}
              style={[stylesQuestion.timerButtons, { backgroundColor:  '#FFFFFF'}]} >

              <Text style={stylesQuestion.buttonText}>STOP</Text>

              </TouchableOpacity>

              <TouchableOpacity
              onPress={this.onButtonClear}
              activeOpacity={0.6}
              style={stylesQuestion.timerButtons} 
              disabled={this.state.startDisable} >

              <Text style={stylesQuestion.buttonText}> CLEAR </Text>

              </TouchableOpacity>
            </View>
            {/* End */}
    
        </View>
      </ImageBackground>
    )
  }
}

const stylesQuestion = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  //Titlestyle
  titleContainer: {
    //backgroundColor: "green",
    position: "absolute",
    marginTop: "30%",
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
    color: '#000',
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

export default Question