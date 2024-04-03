import { View, Text ,StatusBar , Image,SafeAreaView,TouchableOpacity, TextInput} from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import  { useState } from 'react'
const Rsend = ({navigation}) => {
  const[code,setCode]=useState('');
  return (
    
      <View style={{
      flex:1,
      backgroundColor:'white'
      }}>
        <StatusBar barStyle={'default'} backgroundColor={'transparent'} translucent={false}/>
        <View style={{
          height:45,
          width:'97%',
          marginTop:'3%',
          // backgroundColor:'red',
          // justifyContent:'center',
          alignSelf:'center',
          borderRadius:22,
          flexDirection:'row',
          alignItems:'center',
          elevation:5,
          backgroundColor:'white',
        }}>
          <View style={{
            height:40,
            width:50,
            // alignSelf:'center',
            alignItems:'center',
            justifyContent:'center',
            // backgroundColor:'red',
          }}>
        <AntDesign onPress={()=>navigation.navigate('Login')} name='arrowleft' size={22} color='black'/>
        </View>
        <View style={{
          height:60,
          width:160,
          alignItems:'center',
            justifyContent:'center',
          // backgroundColor:'black',

        }}>
          <Text style={{
            fontSize:20,
            color:'black',
            fontWeight:'bold',
          }}>
            Forget Password
          </Text>

        </View>
        </View>
        <View style={{
          height:'45%',
          width:'80%',
          alignSelf:'center',
          marginTop:'30%',
          elevation:5,
          backgroundColor:'white',
          borderRadius:20,
        }}>
          <View style={{
            height:55,
            marginTop:'3.5%',
            width:'99%',
            alignSelf:'center',
            justifyContent:'center',
            alignItems:'center',
          }}>
             <Image source={require('../asset/hackerc.png')}
             style={{
              height:55,
              width:55,
             }}>

             </Image>
          </View>
          <SafeAreaView style={{
            height:40,
            width:'90%',
            marginTop:'10%',
            alignSelf:'center',
            borderWidth:1,
            borderRadius:19,
            borderStartColor:'white',
            borderLeftColor:'white',
            borderRightColor:'white',
            borderBlockColor:'white',
           borderBlockEndColor:'grey',
          }}>
            <TextInput style={{
            color:'black',
            marginLeft:'3%',
            }}
            
            placeholder='Please enter your 6 digit code'
            placeholderTextColor={'grey'}
            value={code}
            // secureTextEntry
            maxLength={6}
          
            textContentType={Number}
          //  dataDetectorTypes={'phoneNumber'}
          //  inputMode='numaric'
           keyboardType={'number-pad'}
            onChangeText={(text)=> setCode(text)}
            />
          </SafeAreaView>
          <TouchableOpacity onPress={()=> navigation.navigate ('Rset')}
          style={{
            height:27,
            width:'80%',
            alignSelf:'center',
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'green',
            borderRadius:100,
            marginTop:'20%',
          }}>
            <Text style={{
              color:'white',
              fontWeight:'500',
              fontSize:19,
            }}>
              Verify code
            </Text>

            </TouchableOpacity>

        </View>
        </View>

    
  )
}

export default Rsend