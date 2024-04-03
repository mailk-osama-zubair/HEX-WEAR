import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import CreateContactInput from './Component/CreateContactInput'
import DropDownPicker from 'react-native-dropdown-picker'
import { useState } from 'react'
import { useEffect } from 'react'
import { } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'
let contact = [];
const CreateContact = ({ navigation}) => {
  const [enterfirstname, setEnterfirstname] = useState('');
  const [enterlastname, setEnterlastname] = useState('');
  const [enterphonenbr, setEnterphonenbr] = useState('');

  const setData = async () => {
    await AsyncStorage.setItem('CONTACT', JSON.stringify(contact))
    contact.push({ Fname: enterfirstname, Lname: enterlastname, phonnbr: enterphonenbr })
    let tempcontact  =[]
    let x = JSON.parse(await AsyncStorage.getItem('CONTACT',))
    tempcontact = x;
    tempcontact.map(item => {
      contact.push(item);
    });
    // navigation.navigate('HomeD');
    console.log(contact);
  }
  useEffect(() => {
    setData()
  }, [])
  return (
    <View style={styles.Container}>
      <Text style={styles.TopText}>Create Contact</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.TopText}>New Contact</Text>
        <TextInput style={styles.Input}
         placeholder={'Enter First Name'}
         placeholderTextColor={'white'}
          autoCorrect={false}
          autoFocus={true}
         value={enterfirstname}
          onChangeText={(text) => setEnterfirstname(text)}
        />
        <TextInput style={styles.Input}
         placeholder={'Enter Last Name'}
         placeholderTextColor={'white'}
          autoCorrect={false}
          autoFocus={true}
          value={enterlastname}
          onChangeText={(text) => setEnterlastname(text)}
        />
        <TextInput style={styles.Input}
        placeholder={'03*********'}
         placeholderTextColor={'white'}
         autoCorrect={false}
          autoFocus={true}
          value={enterphonenbr}
          onChangeText={(text) => setEnterphonenbr(text)} />

        <TouchableOpacity style={styles.touchableOpcity}
    // navigation.navigate('HomeD');
          onPress={()=>{setData,navigation.navigate('HomeD')}}>
          <Text style={styles.enterText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#2F4F4F',
  },
  Input: {
    borderRadius: 10,
    borderWidth: 1,
    height: 40,
    width: '90%',
    backgroundColor: 'black',
    alignSelf: 'center',
    marginVertical: '5%',
    fontSize: 18,
    borderColor: 'white',
    color: 'white',

},
  TopText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginVertical: '3%',
  },
  inputContainer: {
    height: '70%',
    width: '90%',
    borderWidth: 2,
    backgroundColor: 'black',
    opacity: .4,
    borderColor: 'white',
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: '13%',

  },
  touchableOpcity: {
    alignSelf: 'center',
    marginVertical: '5%',
    height: 35,
    backgroundColor: 'black',
    borderRadius: 50,
    width: '50%',
  },
  enterText:
  {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',


  },
})
export default CreateContact