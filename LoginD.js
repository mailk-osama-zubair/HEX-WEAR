import { View, Text, SafeAreaView,TextInput,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
// import {  } from 'react-native-gesture-handler'
// import { } from 'react-native-safe-area-context'

const LoginD = ({navigation}) => {
  const [email, setEmial] = useState('');
const [password, setPassword] = useState('')
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'green',

    }}>
      <View
        style={{
          height: '60%',
          width: '100%',
          alignSelf: 'center',
          justifyContent:'center',

        }}>
        <SafeAreaView style={{
          height: 40,
          width: '90%',
          justifyContent: 'center',
          // alignItems: 'center',
          alignSelf:'center',
          backgroundColor:'white',
          borderRadius:100,


        }}>
          <TextInput
            placeholder='Enter your email'
            placeholderTextColor={'gry'}
            value={email}
            onChangeText={(text)=>setEmial(text)}
          />
        </SafeAreaView>
        <SafeAreaView style={{
          height: 40,
          width: '90%',
          justifyContent: 'center',
          // alignItems: 'center',
          alignSelf:'center',
marginTop:'5%',
          borderRadius:100,
          borderWidth:.4,
          
          backgroundColor:'white',
          borderRadius:100,



        }}>
          <TextInput
            placeholder='Enter your password'
            placeholderTextColor={'gry'}
            value={password}
            onChangeText={(text)=> setPassword(text)}
          />
        </SafeAreaView>
        <TouchableOpacity onPress={() => navigation.navigate('HomeD')}
          style={{
            height: 40,
            width: 110,
            borderRadius: 100,
            alignSelf: 'center',
            marginTop: '10%',
            backgroundColor: 'black',

          }}>
          <Text style={{
            textAlign: 'center',
            color: 'white',
            fontSize: 25,
            fontWeight: 'bold',
          }}>
            Loging
          </Text>

        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginD