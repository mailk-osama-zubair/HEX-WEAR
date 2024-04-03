import { View, Text,Button, TouchableOpacity,StatusBar,Image, ImageBackground } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'

const Update = ({navigation}) => {
  return (
    <View
    style={{
      flex:1,
      backgroundColor:'black',
     
    }}
    >
      <StatusBar barStyle={'default'} backgroundColor={'transparent'} translucent={true}/>
      <View style={{
      height:'13%',
      width:'100%',
      backgroundColor:'#36454F',
    }}>
     <View style={{
      height:'40%',
      width:'96%',
      justifyContent:'space-between',
      alignSelf:'center',
      flexDirection:'row',
       marginTop:'8%',
       alignItems:'center',
      
     }}>
      <Text style={{
        fontSize:24,
        fontWeight:'500',
        color:'white',
      }}>
      Malik
      </Text>
      <View
      style={{
        height:20,
        width:'30%',
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
            }}>
  
      
      <Image source={require('../asset/cameraf.png')}
      style={{
        height:20,
        width:20,
  
      }}>
  
      </Image>
      <Image source={require('../asset/searchf.png')}
      style={{
        height:20,
        width:20,
  
      }}>
  
      </Image>
      <TouchableOpacity>
      {/* <Button title='Update' onPress={()=>navigation.navigate('Update')}/> */}
      {/* <Image  source={require('../asset/dots.png')}
      style={{
        height:20,
        width:20,
      }} onPress={()=>navigation.navigate('Update')}/> */}
  
  <Entypo onPress={()=>navigation.navigate('Setting')} name="dots-three-vertical" size={18} color="white"/>
      </TouchableOpacity>
      </View>
      
        
      
     </View>
     <View style={{
      height:'30%',
      width:'96%',
      justifyContent:'space-between',
      alignItems:'flex-end',
       alignSelf:'center',
       flexDirection:'row',
      
     }}>
   <Text onPress={()=> navigation.navigate('Chat')} style={{
     fontSize:15,
     fontWeight:'600',
     color:'#fff',
   }}>
   Chats
   </Text>
   <Text  onPress={()=> navigation.navigate('Update') } style={{
    fontSize:15,
    fontWeight:'600',
    color:'green',
   }}>
   Update
   </Text>
   <Text onPress={()=> navigation.navigate('Calls') } style={{
     fontSize:15,
     fontWeight:'600',
     color:'#fff',
   }}>
   Calls
   </Text>
     </View>
     </View>
     <View style={{
      height:56,
      width:'90%',
      // backgroundColor:'white',
      marginTop:'2%',
      alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        alignSelf:'center',
     }}>
      

      
      <Text style={{
        fontSize:18,
        // alignItems:'center',
        // justifyContent:'center',
        fontWeight:'500',
        color:'white',
      }}> Status
      </Text>
      <Entypo name='dots-three-vertical' size={17} color='grey' />
      

     </View>
     <View
      style={{

      height:'7%',
      width:'99%',
      alignSelf:'center',
      // marginTop:'3%',
      // backgroundColor: 'white',
      flexDirection:'row',
     }}>
      <View
      style={{
        height:55,
        width:75,
        // alignSelf:'center',
        justifyContent:'center',

        alignItems:'center',
        marginTop:'2%',
        // backgroundColor:'yellow',
        flexDirection:'row',

      }}>
        <ImageBackground source={require('../asset/hackerc.png')}
        style={{
          height:50,
          width:50,
          borderRadius:6,
          // borderWidth:1,
        }}>
          <View style={{
          height:50,
          width:50,
          alignItems:'flex-end',
          justifyContent:'flex-end',

        }}>

        
        <Image source={require('../asset/plus.png')}
        style={{
          height:20,
          width:20,

        }}>

        </Image>
        </View>
          
           
        </ImageBackground>
        

      </View>
      <View style={{
        height:70,
        width:'50%',
        // alignItems:'center',
        justifyContent:'center',
        // backgroundColor:'red',

      }}>
       <Text style={{

        fontSize:18,
        fontWeight:'500',
        color:'white',
       }}>
        My status
       </Text>
       <Text style={{
        color:'grey',
        }}>
        Tap to add status update
       </Text>

        </View>

     </View>
     
    </View>
  )
}

export default Update