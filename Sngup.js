import { View, Text, StatusBar, StyleSheet, ScrollView, Button , ToastAndroid } from 'react-native'
import React, { useCallback, useReducer, useState } from 'react'
import Input from './Input'
import { reducer } from '../Reducers/formReducers';
import { validateInput } from '../actions/formActions';
import { validation} from '../utilies/Validations'
 const isTestNode =true;

 const intialState = { 
  inputValue:{
   fullName : isTestNode? "Malik Osama ": "",
   email: isTestNode ? "example@gmail.come":"",
   password: isTestNode ? "********": "",
  },
  inputValidations:{
   fullName:false,
   email:false,
   password:false,
  },
  formIsValid:false,
}
const Sngup = ({navigation}) => {
  const buttonTost=()=>{
    ToastAndroid.show('Signup successfully !', ToastAndroid.SHORT);
  }
  const[store, setStore]=useState(false);
  const [fromState, dispatchFormState]=useReducer(reducer, intialState)
  const inputChangeHandler = useCallback((inputId, inputValue)=>{
    const result =validateInput(inputId,inputValue);
    dispatchFormState({ inputId, validateReuslt: result, inputValue});

  },[dispatchFormState])
  return (
    <View style={{
      flex:1,
      backgroundColor:'white',
    }}>
      <StatusBar style='auto'/>
      <View style={styles.main}
      > 
      <Text style={styles.text}>
        SignUp
      </Text>

      </View>
      

      
      <View style={{ height:'45%',  justifyContent:'space-between'}} >
      <Input 
       id="fullName"
       placeholder='Enter your name'
       placeholderTextColor='grey'
       errorText={fromState.inputValidations["fullName"]}
       onInputChanged={inputChangeHandler}
       
    />
    <Input 
       id="Email"
       placeholder='Enter your email'
       placeholderTextColor='grey'
      //  onChangeText={store}
    />
    <Input 
       id="Password"
       placeholder='Enter your password'
       placeholderTextColor='grey'
    />
    
    <Button style={styles.button} title='Sign Up' onPress={()=>navigation.navigate('Ling')} 
    store={store}/>

    
    </View>
   

    </View>
  )
}
const styles=StyleSheet.create({
main:{
  padding:10,
  elevation:5,
  backgroundColor:'white',
  borderRadius:100,
  alignItems:'center',
  marginTop:'10%',

},
text:{
     color:'black',
     fontWeight:'bold',
     fontSize:22,

},
button:{
  padding:'10%',
  marginTop:'10%',
  backgroundColor:'green',

},

})
export default Sngup