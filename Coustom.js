import { View, Text, FlatList, StyleSheet, Image, ScrollView, Dimensions, ImageBackground } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { } from 'react-native-gesture-handler'
import { event, log } from 'react-native-reanimated'
const Coustom = () => {
  const screenWidth=Dimensions.get("window").width;
  // console.log(screenWidth)
  const flatListRef=useRef();
  useEffect(()=>{
    let interval= setInterval(()=>{
      // if(activeIndex===Slider.length+1){
      //   flatListRef.current.scrollToIndex({
      //     index:0,
      //     animation:true,
      //   })
      // }
      // else {
      //   flatListRef.current.scrollToIndex({
      //     index:activeIndex+1,
      //     animation:true,
      //   })
      // }
      do{
      
      if(activeIndex===Slider.length+1){
        flatListRef.current.scrollToIndex({
          index:0,
          animation:true,
        })
      }
        else if( Slider.length>0.02) {
        flatListRef.current.scrollToIndex({
          // index:activeIndex+1,
          index:0.47,
          // activeIndex:-0,
          animation:true,
        })
      }
       else if(Slider.length>=0.47) {
        flatListRef.current.scrollToIndex({
          // index:activeIndex+1,
          index:0.98,
          // activeIndex:-0,
          animation:true,
        })

      }
       else if(Slider.length>=0.99) {
        flatListRef.current.scrollToIndex({
          // index:activeIndex+1,
          index:0,
          // activeIndex:-0,
          animation:true,
        })
        
      }
      // else{
      //   flatListRef.current.scrollToIndex({
      //     // index:activeIndex+1,
      //     index:0,
      //     // activeIndex:-0,
      //     animation:true,
      //   })
      // }
     } while(Slider.length>1.22)
    },3000);
    return()=>clearInterval(interval);
  })
  const getItemLayo=(data,index)=>({
length:screenWidth,
offset:screenWidth*index,
index:index,


  } 
  // ,console.log( getItemLay)
  )
const Slider = [
  {
    backImage:require('../asset/dark4.jpeg')
  },
  {
    backImage:require('../asset/dark4.jpeg')
  },
  
  
]
const action = ({ item, index }) => {
  return (
    <View >
      <View
        style={styles.container}
      >
        <ImageBackground style={styles.backImage}
        source={item.backImage}>
<View style={{
  height:40,
  width:40,
  borderWidth:2,
}}>

</View>
<View style={{
  height:70,
  width:80,
  borderWidth:2,
}}>

</View>
        </ImageBackground>
        <ImageBackground style={styles.backImage}
        source={item.backImage}>
<View style={{
  height:40,
  width:40,
  borderWidth:2,
}}>

</View>
<View style={{
  height:70,
  width:80,
  borderWidth:2,
}}>

</View>
        </ImageBackground>
        {/* <Image style={styles.images} source={item.image} ></Image> */}
        {/* <Text style={styles.idText}>{item.id}</Text> */}
      </View>
    </View>
  )
}
const slideDot = () => {
  return (
    Slider.map((dot, index) => {

      if ( activeIndex===index ) {
      return (
          <View 
      key={index}

          style={{
            height: 10,
            width: 10,
            borderRadius: 50,
            backgroundColor: 'green',
            marginHorizontal: '2%'
          }}>

          </View>
        )
      }
else 
  {
    return ( 
    <View
    key={index}

      style={{
        height: 10,
        width: 10,
        borderRadius: 50,
        backgroundColor: 'grey',
        // borderWidth: .5,
        marginHorizontal: '2%'
      }}
    >
    </View>
  )
}
 
   
    }
    ))
}
const handleScroll = (event) => {
  const ScrollPosition = event.nativeEvent.contentOffset.x;
  console.log(ScrollPosition);
  const index = ScrollPosition / screenWidth;
  console.log(index);
  setactiveIndex(index)
};
const [activeIndex, setactiveIndex] = useState(0);


  return (
    <View >
      <FlatList
        data={Slider}
        horizontal
        getItemLayout={getItemLayo}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        ref={flatListRef}
        onScroll={handleScroll}
        renderItem={action} />
      <View style={styles.dotstyle}>
        {
          slideDot()
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 392.3,
    height: 200,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent:'space-around',
    flexDirection:'row',
    // marginLeft:17,
  },
  images: {
    width: 105,
    borderRadius: 10,
    height: 130,
    // marginRight:30,
    // justifyContent:'space-between'

  },
  idText: {
    fontSize:40,
    color:'white'
  },
  dotstyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: '-5%',

  },
  backImage:{
    borderWidth:2,
    backgroundColor:'white',
    width: 139,
    borderRadius: 10,
    height: 90,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
  }
})
export default Coustom