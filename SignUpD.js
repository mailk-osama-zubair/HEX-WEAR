import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React, {  } from 'react'
import { useState,useEffect } from 'react';

import AsyncStroge from '@react-native-async-storage/async-storage'
const SignUpD = ({ navigation }) => {
// useEffect=()=>{
//   getData()
//   (),[]
// }
const [email, setEmial] = useState();
  const [password, setPassword] = useState('');
  const setData = async () => {
    const data={email:email}
    await AsyncStroge.setItem('email', JSON.stringify(data));
    console.log('saved')
  }
  const getData = async () => {
    const name = await AsyncStroge.getItem('data',JSON.parse());
    console.log('name' + name)
  }
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
          justifyContent: 'center',

        }}>


        <SafeAreaView style={{
          height: 40,
          width: '90%',
          justifyContent: 'center',
          // alignItems: 'center',
          alignSelf: 'center',
          borderWidth: .5,
          backgroundColor: 'white',



        }}>
          <TextInput
            placeholder='Enter your email'
            placeholderTextColor={'gry'}
            value={email}
            onChangeText={(text) => setEmial(text)}
          />
        </SafeAreaView>
        <SafeAreaView style={{
          height: 40,
          width: '90%',
          marginTop: '5%',
          backgroundColor: 'white',
          justifyContent: 'center',
          // alignItems: 'center',
          alignSelf: 'center',
          borderWidth: .5,



        }}>
          <TextInput
            placeholder='Enter your password'
            placeholderTextColor={'gry'}
            value={password}
            onChangeText={(text) => setPassword(text)}


          />
        </SafeAreaView>
        <TouchableOpacity onPress={() => setData()}
          style={{
            height: 40,
            width: 110,
            borderRadius: 100,
            alignSelf: 'center',
            marginTop: '10%',
            backgroundColor: 'black',

          }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 25,
              fontWeight: 'bold',
            }}>
            SignUP
          </Text>

        </TouchableOpacity>
        <TouchableOpacity onPress={() => { getData(); }}
          style={{
            height: 40,
            width: 150,
            borderRadius: 100,
            alignSelf: 'center',
            marginTop: '10%',
            backgroundColor: 'black',

          }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 25,
              fontWeight: 'bold',
            }}>
            Show Data
          </Text>

        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SignUpD