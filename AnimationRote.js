// import { View, Text, StyleSheet,TouchableHighlight } from 'react-native'
// import React from 'react'
// import Animated, { Easing } from 'react-native-reanimated'
// import {  } from 'react-native-gesture-handler'
// const AnimationRote = () => {
//     const rotateHandler=new Animated.Value(0);
//     const startRotation=()=>{
//         rotateHandler.setValue(0);
//         Animated.timing(rotateHandler,{
//             toValue:1,
//             duration:2000,
//             easing: Easing.linear()
//         }).start(()=>startRotation())
//     }
//     const RotateAble=()=>{rotateValuHolder.interpolate({
//         inputRange:[0,1],
//         outputRange:['0deg', '360deg']
//        })
    
//        }
//   return (
//    <Animated.Image style={[styles.animation,{transform:[{rotate:RotateAble}]}]}
//    source={require('../asset/heart.png')}
//    >
// <TouchableHighlight onPress={startRotation}>
//     <Text style={{
//         fontSize:34,
//         fontWeight:'bold',
//         color:'black',
//     }}>
//         ROTATE IT
//     </Text>
// </TouchableHighlight>
//    </Animated.Image>
//   )
// }
// const styles=StyleSheet.create({
// animation:{
//     height:50,
//     width: 50,
//     backgroundColor:'red',
// }
// })
// export default AnimationRote