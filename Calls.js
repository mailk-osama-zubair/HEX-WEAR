import { View, Text,Image,TouchableOpacity,StatusBar } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'

const Calls = ({navigation}) => {
  return (
    <View style={{
        flex:1,
        backgroundColor:'black',

    }}> 
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
    color:'#fff',
   }}>
   Update
   </Text>
   <Text  onPress={()=>navigation.navigate('Calls')} style={{
     fontSize:15,
     fontWeight:'600',
     color:'green',
   }}>
   Calls
   </Text>
     </View>
     </View>
      
      
    </View>
  )
}

export default Calls