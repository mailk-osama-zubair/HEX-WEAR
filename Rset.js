import { View, Text,StatusBar,SafeAreaView,ScrollView,Image ,TextInput,TouchableOpacity} from 'react-native'
import React from 'react'
import {useState} from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
const Rset = ({navigation}) => {
    const[renter,setRenter]=useState('');
    const[epassword,setEpassword]=useState('');

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
            backgroundColor:'red',
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
            height:'55%',
            width:'80%',
            marginTop:'15%',
            alignSelf:'center',
            borderRadius:19,
            elevation:5,
            backgroundColor:'white',
  
          }}>
            {/* hacker image */}
            <View style={{
              height:73,
              width:'99%',
              // backgroundColor:'red',
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
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{
                width:'100%',
                // backgroundColor:'red',
                    }}>

  
            
            <SafeAreaView style={{
            height:40,
            width:'89%',
            alignSelf:'center',
            borderWidth:1,
            borderRadius:10,
            marginTop:'10%',
            borderBlockStartColor:'white',
            borderLeftColor:'white',
            borderRightColor:'white',
            borderBlockEndColor:'grey',
           
            
          }}>
            <TextInput style={{
              color:'black',
              marginLeft:'3%',
            }}
            placeholder='Enter your new password'
            placeholderTextColor={'grey'}
            value={epassword}
            autoCorrect={true}
            maxLength={13}
            // dataDetectorTypes={'phoneNumber'}
            
  
            onChangeText={(text)=> setEpassword(text)}
            
            />
  
          </SafeAreaView>
  
          <SafeAreaView style={{
            height:40,
            width:'89%',
            alignSelf:'center',
            borderWidth:1,
            borderRadius:10,
            marginTop:'10%',
            borderBlockStartColor:'white',
            borderLeftColor:'white',
            borderRightColor:'white',
            borderBlockEndColor:'grey',
           
            
          }}>
            <TextInput style={{
              color:'black',
              marginLeft:'3%',
            }}
            placeholder='Re-enter your new password'
            placeholderTextColor={'grey'}
            value={renter}
            maxLength={13}
            // autoCorrect={true}
            dataDetectorTypes={'all'}
            keyboardType={'email-address'}
            onChangeText={(text)=> setRenter(text)}
            
            />
  
          </SafeAreaView>
          <TouchableOpacity onPress={()=>navigation.navigate('Login')}
          style={{
            height:33,
            width:'80%',
            alignItems:'center',
            justifyContent:'center',
            alignSelf:'center',
            marginTop:'10%',
            backgroundColor:'green',
            borderRadius:25,
          }}>
            <Text style={{
              color:'white',
              fontWeight:'500',
              fontSize:18,
  
            }}>
              Rest password
            </Text>
  
            </TouchableOpacity> 
          <View  
          style={{
            height:110,
            width:'96%',
           alignSelf:'center',
           alignItems:'center',
           justifyContent:'center',
  
  
          }}>
            <Text style={{
              color:'blue',
              fontSize:11,
              fontWeight:'400',
            }}>
              You password will be reset
            </Text>
  
            </View>
            </View>
          </ScrollView>
          </View>
          
        </View>
  )
}

export default Rset