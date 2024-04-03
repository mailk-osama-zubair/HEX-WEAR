import { View, Text, ImageBackground,StatusBar,Image, SafeAreaView,TextInput, TouchableOpacity, ScrollView, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import Entypo from '@react-native-vector-icons/Entypo'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Profile from './Profile'
// import from 'react-native-vector-icons/Entypo'

const Login = ({navigation}) => {
    const[email, setEmail]=useState('');

    const[password, setPassword]=useState('');
    
    const ShowToast=()=>{
      ToastAndroid.show('Login is successfully ',
      ToastAndroid.LONG)
    }
  return (
    // Login Page
    <ImageBackground source={require('../asset/CNF.jpg')}
     style={{
        flex:1,
      //  alignSelf:'center',
    }}>
        <StatusBar barStyle={'default'} backgroundColor={'transparent'} translucent={true}/>
        
          {/* <Profile Email={email} Password={password} /> */}
        
       <View style={{
        height:'54%',
        width:'76%',
        backgroundColor:'white',
        borderRadius:22,
          // alignItems:'center',
        //   justifyContent:'space-around',
          alignSelf:'center',
          marginTop:'63%',

       }}>

       

       
       <View style={{
        height:60,
        width:150,
        alignItems:'center',
        alignSelf:'center',
        justifyContent:'center',
        // backgroundColor:'red',
       }}>

       
       <Text  
       
       style={{
        // baseText: {
        //     fontFamily: 'Cochin',
        //   },
        // fontFamily:'Serif',
        fontSize:21,
        fontWeight:'500',
        color:'black',
       }}> Login Here</Text>
       </View>
       <ScrollView>
       <View
        style={{
        // height:178,
        width:'100%',
        justifyContent:'center',
        alignSelf:'center',
        // backgroundColor:'black',
               }}>
       
       <SafeAreaView style={{
        height:40,
        width:'89%',
        borderWidth:1,
        borderBlockColor:'white',
        borderBlockEndColor:'black',
        borderRightColor:'white',
        borderLeftColor:'white',
        alignSelf:'center',
        borderRadius:11,
       }}>
        <TextInput style={{
            color:'black',
            marginLeft:'3%',
        }}
        autoCorrect={true}
        placeholder='Enter username or email'
        placeholderTextColor={'grey'}
        value={email}
        keyboardType={'email-address'}
        // dataDetectorTypes={'address'}
        spellCheck={true}
        onChangeText={(text)=>setEmail(text)}
        />

       </SafeAreaView>
        
       <SafeAreaView style={{
        height:40,
        width:'89%',
        marginTop:'10%',
        borderWidth:1,
        borderBlockColor:'white',
        borderBlockEndColor:'black',
        borderRightColor:'white',
        borderLeftColor:'white',
        borderRadius:11,
        alignSelf:'center',
       }}>
        <TextInput style={{
            color:'black',
            marginLeft:'3%',
        }}
        placeholder='Enter your password'
        placeholderTextColor={'grey'}
        value={password}
        // dataDetectorTypes={'phoneNumber'}
        // keyboardType={'all'}
        secureTextEntry
        onChangeText={(text)=>setPassword(text)}
        />

       </SafeAreaView>

       </View>
       {/* Forget password */}
       <TouchableOpacity
       style={{
        height:30,
        width:'89%',
        alignItems:'flex-end',
        justifyContent:'center',
        // backgroundColor:'black',
       }}>
        <Text onPress={()=>navigation.navigate('Forgetpassword')}
        style={{
            color:'blue',
            fontSize:13,
            fontWeight:'500',
        }}>forget password</Text>

       </TouchableOpacity>
       {/* Login button */}
       <View
        style={{
        height:50,
        width:'80%',
        // backgroundColor:'red',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
       }}>

       
       <TouchableOpacity 
        onPress={()=>navigation.navigate('Home',{password,email},ShowToast())}
       style={{
        height:30,
        width:'98%',
        borderRadius:19,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'black',
       }}>
        <Text style={{
            fontSize:20,
            color:'white',
            fontWeight:'bold',
        }}> Login</Text>

       </TouchableOpacity>
       </View>
       {/* SignUp text */}
       <View
        style={{
        height:30,
        width:'89%',
        alignItems:'center',
        alignSelf:'center',
        justifyContent:'center',
        // backgroundColor:'black',

       }}>
        <Text style={{
          fontSize:13,
          color:'black',
        }}>
         or Sign Up Usign
        </Text>
      

       </View>
       {/* signup with apps */}
       <View
         
        style={{
        height:99,
        width:'96%',
        // alignItems:'center',
        alignSelf:'center',
        justifyContent:'center',
        flexDirection:'row',
        // backgroundColor:'red'
       }} >
        <TouchableOpacity 
        onPress={()=>navigation.navigate('Suwg')}
        >

        
        <Image 
         source={require('../asset/google.png')}
        style={{
          height:17,
          width:17,
          borderRadius:100,
          marginLeft:'3%',

        }}>

        </Image>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>navigation.navigate('Suwf')} 
        >

        
        <Entypo style={{marginLeft:'3%',}} name='facebook' size={18} color='#1877F2'/>
        </TouchableOpacity>
        {/* <AntDesign name='google' size={24} color='##4285F4'/> */}
        <TouchableOpacity 
        onPress={()=>navigation.navigate('Suwt')} 
        >

       
        <AntDesign  style={{marginLeft:'3%',}}  name='twitter' size={18} color='rgb(29, 161, 242)'/>
        </TouchableOpacity>
            </View>
            {/* signUp */}
        <View 
        style={{
        height:40,
        width:'80%',
        alignSelf:'center',
        justifyContent:'space-around',
        alignItems:'center',

        }}>
        <Text  style={{
          fontSize:13,
          color:'black',
        }}>
          or Sing Up Using
        </Text>
        <TouchableOpacity 
         onPress={()=>navigation.navigate('Usignup')}>

        <Text  style={{
          fontSize:13,
          fontWeight:'bold',
          color:'blue',
        }}>
          Sing Up
        </Text>
        </TouchableOpacity>

        

        </View>
       </ScrollView>
       </View>
      
    </ImageBackground>
  )
}

export default Login