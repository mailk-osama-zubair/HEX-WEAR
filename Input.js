import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Input = (props) => {
  const onChnageText = (text) => {
    props.onInputChange(props.id, text)
  }
  // const[value,setValue]=useState('')
  return (
    <View style={styles.container}>
        <View style={styles.InputContainer}>
          <TextInput
            placeholder={props.placeholder}
            placeholderTextColor={props.placeholderTextColor}
            style={styles.InputText}
            // value={value}
            onChangeText={onChnageText}
            // onChangeText={(text)=>setValue(text)}
             />
        </View>
       
        {
          props.errorText && (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{props.errorText[0]}</Text>
            </View>
          )
        }
     
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    // height:'50%',
    // flex:1,
    // backgroundColor:'black',
    // justifyContent:'space-between',
  },
  InputContainer: {
    width: '96%',
    // backgroundColor:'black',
    // height:'30%',
    alignSelf: 'center',
    borderBottomWidth:1,
    marginTop: '5%',
  },
  errorContainer: {
    // padding: 10,
    height: 200,
    // borderWidth:1,
    marginVertical:4,
    backgroundColor:'black',
    alignSelf: 'center',
  },
  errorText: {
    color: 'red',
    // fontWeight: 'bold',
    fontSize: 12,

  },
  InputText:{
    color:'black',
    fontSize:13,
  }

})
export default Input