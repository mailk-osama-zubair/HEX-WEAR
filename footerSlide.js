import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'
const footerSlide = () => {
  const image = [
    require('../asset/revo.png'),
    require('../asset/land.png'),
    require('../asset/bmw.png'),
    // require('../asset/yarise.png'),
    require('../asset/27.png'),
    // require('../asset/civic.png'),
    // require('../asset/revo.png'),




  ]
  return (
    <View>


    <SliderBox style={{
      height: 210,
      width: 365,
      justifyContent: 'center',
      alignSelf: 'center',
      alignItems: 'center',
      borderRadius: 20,
      // backgroundColor:'red',
      // marginTop:'2%'
     
    }}
      images={image}
      dotColor={'transparent'}
      autoplay
      circleLoop
      // paginationBoxVerticalPadding={10}
      inactiveDotColor={'transparent'}
      // dotStyle={{
      //   width: 15,
      //   height: 15,
      //   borderRadius: 15,
      //   padding: 0,
      //   margin: 0
      // }}
      resizeMode={'cover'}
      resizeMethod={'resize'}
      // paginationBoxStyle={{
      //   // paddingVertical: 10
      // }}
      imageLoadingColor="#2196F3"

    >


    </SliderBox>
   
    </View>

  )
}
const styles = StyleSheet.create({

})

export default footerSlide