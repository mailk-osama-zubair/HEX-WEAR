import React from 'react';
import { ImageBackground, StyleSheet,Text } from 'react-native';
import { View } from 'react-native-animatable';
import AppIntroSlider from 'react-native-app-intro-slider';
import HomeDemo from './HomeDemo';
import * as Animatable from 'react-native-animatable';


const slides = [
  {
    Title:'THIS IS MY INTRO PAGE',
    text:'THIS IS MY INTRO PAGE',
    image:require('../asset/intor1.jpeg'),

},
{
    Title:'THIS IS MY INTRO PAGE',
    text:'THIS IS MY INTRO PAGE',
    image:require('../asset/intro4.jpeg'),

},
{
    Title:'THIS IS MY INTRO PAGE',
    text:'THIS IS MY INTRO PAGE',
    image:require('../asset/intro2.jpeg'),

},
{
    Title:'THIS IS MY INTRO PAGE',
    text:'THIS IS MY INTRO PAGE',
    image:require('../asset/intro3.jpeg'),

},
];

export default class Intro extends React.Component {
state = {
    showRealApp: false
  }
  _renderItem = ({ item }) => {
    return (
      <ImageBackground  source={item.image} 
      style={styles.imageBackground}>
        <View style={styles.textBox}>

        
        <Animatable.Text animation={'slideInUp'} duration={2500} style={styles.title}>{item.Title}</Animatable.Text>
        {/* <Image source={item.image} /> */}
        <Animatable.Text animation={'slideInUp'} duration={3300} style={styles.ABOUTtext}>{item.text}</Animatable.Text>

        </View>
        </ImageBackground>
    );
  }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }
  render() {
    if (this.state.showRealApp) {
      return <HomeDemo />;
    } else {
      return <AppIntroSlider bounces={false} showNextButton showSkipButton renderItem={this._renderItem} data={slides} onDone={this._onDone}/>;
    }
  }
}
const styles=StyleSheet.create({
imageBackground:{
  flex:1,
  // alignSelf:'center',

},
textBox:{
  marginTop:'67%',
  // alignSelf:'center',
  marginHorizontal:'3%',

},
title:{
fontSize:29,
fontWeight:'bold',
color:'white',
},
ABOUTtext :{
  fontSize:20,
  fontWeight:'700',
  color:'white',
}

})