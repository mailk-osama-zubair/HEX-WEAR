import { View, Text,StatusBar, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'

import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { SafeAreaView } from 'react-native-safe-area-context'

const Suwt = ({navigation}) => {
  const[name,setName] = useState('')
  const[scity,setScity] = useState('')

    const[signupfacebook,setSignupfacebook]=useState('');
  return (
    <View
     style={{
        flex:1,
        backgroundColor:'white'
        }}>
          <StatusBar barStyle={'default'} backgroundColor={'transparent'} translucent={false}/>
          <View style={{
            height:45,
            width:'97%',
            marginTop:'3%',
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
            width:'auto',
            alignItems:'center',
              justifyContent:'center',
            // backgroundColor:'black',
  
          }}>
            <Text style={{
              fontSize:18,
              color:'black',
              fontWeight:'bold',
            }}>
              SignUp with Twitter
            </Text>
  
          </View>
          </View>
          <View style={{
            height:'49%',
            width:'80%',
            elevation:5,
            backgroundColor:'white',
            alignSelf:'center',
            borderRadius:22,
            // justifyContent:'center',
            marginTop:'10%',
          }}>
            {/*hacker image  */}
            <View style={{
  
              height:65,
              width:'90%',
              alignItems:'center',
              justifyContent:'center',
              // backgroundColor:'red',
              alignSelf:'center',
              marginTop:'5%',
            }}>
  
            <AntDesign name='twitter' size={66} color='rgb(29, 161, 242)'/>
            {/* <Image source={require('../asset/google.png')}style={{
  
              height:55,
              width:55,
  
            }}>
  
            </Image> */}
            </View>
            <ScrollView>
                <View style={{
                    // height:'auto',
                    // backgroundColor:'red',
                    width:'100%',
                }}>

                
            <SafeAreaView style={{
                height:40,
                width:'80%',
                marginTop:'10%',
                borderWidth:1,
                alignSelf:'center',
                // backgroundColor:'red',
                // justifyContents:'center',
                // alignItems:'center',
                borderRadius:11,
                borderBlockColor:'white',
                 borderBlockEndColor:'black',
                  borderRightColor:'white',
                 borderLeftColor:'white',
            }}>
                <TextInput  style={{
                    color:'black',
                }}
                placeholder='Please enter your password'
                placeholderTextColor={'grey'}
                value={signupfacebook}
                dataDetectorTypes={'phoneNumber'}
                onChangeText={(text)=>setSignupfacebook(text)}
                />

            </SafeAreaView>
            <TouchableOpacity onPress={()=>navigation.navigate('Home',{signupfacebook})}
            
            style={{
                height:26,
                width:'75%',
                marginTop:'14%',
                backgroundColor:'green',
                justifyContent:'center',
                alignSelf:'center',
                alignItems:'center',
                borderRadius:100,

            }}>
                <Text style={{
                    color:'white',
                    fontWeight:'500',
                    fontSize:17,
                }}>SignUp</Text>

            </TouchableOpacity>
            {/* SignUp with google */}
            {/* <TouchableOpacity onPress={()=>navigation.navigate('Pinput')}
            style={{
              height:40,
              width:'80%',
              justifyContent:'space-around',
              alignItems:'center',
              alignSelf:'center',
              borderWidth:1,
              borderRadius:100,
              marginTop:'10%',
              
              
  
            }}>
              <View style={{
                height:36,
                width:'80%',
                // backgroundColor:'red',
                flexDirection:'row',
                alignItems:'center',
              alignSelf:'center',
              justifyContent:'space-between',
              }}>
  
              
              <Image source={require('../asset/google.png')}
              style={{
                height:30,
                width:30,
              }}>
  
              </Image>
              <Text style={{
                fontSize:17,
                fontWeight:'400',
                color:'black',
              }}>
                SignUp with Google
              </Text>
              </View>
  
              </TouchableOpacity> */}
            <View 
            style={{
  
              height:70,
              width:'90%',
              // backgroundColor:'red',
              alignSelf:'center',
              justifyContent:'center',
              alignItems:'center',
            }}>
              <TouchableOpacity onPress={()=> navigation.navigate('Usignup')}>
  
  
              
              <Text 
               style={{
                color:'blue',
                fontWeight:'bold',
                fontSize:12,
              }}>
                SignUp another way
              </Text>
              </TouchableOpacity>
  
            </View>
            </View>
            </ScrollView>
          </View>
        </View>
  )
}

export default Suwt