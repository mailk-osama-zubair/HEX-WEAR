import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CheckBox from 'react-native-check-box'
import { } from 'react-native-gesture-handler';
import Octicons from 'react-native-vector-icons/Octicons'
import AsyncStorage from '@react-native-async-storage/async-storage';
function SignUpDemo({ navigation }) {
  const [Email, setEmial] = useState('');
  const [password, setPassword] = useState('');
  const [mobilenbr, setMobilenbr] = useState('');
  const [name, setName] = useState('');
  const [isChecked, setChecked] = useState(false);
  const [confirmpassword, setconfirmPassword] = useState('');
  const [show, setshow] = useState(false);
  const [showconfrim, setshowconfirm] = useState(false);

  const visible = () => {
    setshow(!show)
  }
  const confrimVisible = () => {
    setshowconfirm(!showconfrim)

  }

const Validation=()=>{
  if(Email==''&& password==''&& name=='' && mobilenbr==''&& confirmpassword=='' ){
      Alert.alert('Alert!', 'Incorrect submision', [
        
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
    
  }
  else if(Email==''|| password==''|| name=='' || mobilenbr==''|| confirmpassword=='' ){
      Alert.alert('Alert!', 'Incorrect submision', [
        
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
  }
  else{
  }
   navigation.navigate('HomeDemo');

}
// const SaveData=async()=>{
//   const Stored= {Email,password}
//   console.log(Stored);
//  }
  return (
    <View style={styles.container}>
      <View style={styles.greedingcontainer}>
        <Text style={styles.greeding}>SignUp</Text>
      </View>
      <SafeAreaView style={styles.textInputcontainer}>
        <TextInput
          style={styles.txtinput}
          placeholder='Full Name'
          placeholderTextColor={'black'}
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </SafeAreaView>
      <SafeAreaView style={styles.textInputcontainer}>
        <TextInput
          style={styles.txtinput}
          placeholder='Mobile Number'
          placeholderTextColor={'black'}
          value={mobilenbr}
          onChangeText={(text) => setMobilenbr(text)}
        />
      </SafeAreaView>
      <SafeAreaView style={styles.textInputcontainer}>
        <TextInput
          style={styles.txtinput}
          placeholder='Email Adress'
          placeholderTextColor={'black'}
          value={Email}
          onChangeText={(text) => setEmial(text)}
        />
      </SafeAreaView>
      <SafeAreaView style={styles.textInputcontainer}>
        <TextInput
          style={styles.txtinput}
          placeholder='Password'
          placeholderTextColor={'black'}
          value={password}
          secureTextEntry={!show}

          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity onPress={visible}>
          {show ?
            <Octicons style={styles.icon} name='eye' size={19} color={'black'} />
            :
            <Octicons style={styles.icon} name='eye-closed' size={19} color={'black'} />
          }
        </TouchableOpacity>
      </SafeAreaView>
      <SafeAreaView style={styles.textInputcontainer}>
        <TextInput
          style={styles.txtinput}
          placeholder='Confrim Password'
          placeholderTextColor={'black'}
          value={confirmpassword}
          secureTextEntry={!showconfrim}

          onChangeText={(text) => setconfirmPassword(text)}
        />
        <TouchableOpacity onPress={confrimVisible}>
          {showconfrim ?
            <Octicons style={styles.icon} name='eye' size={19} color={'black'} />
            :
            <Octicons style={styles.icon} name='eye-closed' size={19} color={'black'} />
          }
        </TouchableOpacity>
      </SafeAreaView>
      <View style={styles.checkboxContainer}>

        <CheckBox
          isChecked={isChecked}
          onClick={() => setChecked(Email==''|| password==''|| name=='' || mobilenbr==''|| confirmpassword==''? (!{isChecked:false}):({isChecked}), )}

          rightTextStyle={{ color: 'black', fontSize: 15.7, }}
          checkedCheckBoxColor="green"
          uncheckedCheckBoxColor="red"
        />
        <Text style={styles.checkboxcolor}>I Agree with</Text>

        <TouchableOpacity>
          <Text style={styles.conditon}>Term and Condition</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity  onPress={(Validation)}
      style={{
        height: 47,
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
        marginVertical: '8%',
        borderRadius: 4,
        backgroundColor: Email==''&& password==''&& name=='' && mobilenbr==''&& confirmpassword==''  ? 'red':'green',
        backgroundColor: Email==''|| password==''|| name=='' || mobilenbr==''|| confirmpassword=='' || !isChecked? 'red':'green',
      }}
      disabled={(!isChecked||Email==''||password=='')}
      >
        <Text style={{
          color: 'white', fontSize: 22,
          fontWeight: 'bold', textAlign: 'center'
        }}>
          Sign Up
        </Text>
      </TouchableOpacity>
      <View style={styles.textViewContainer}>
                <Text style={styles.text}>Already got an account? </Text>
                <TouchableOpacity  onPress={()=>navigation.navigate('LoginDemo')} >
                    <Text style={styles.signuptext}>
                        Login Here
                    </Text>
                </TouchableOpacity>
            </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  greedingcontainer: {
    marginVertical: '6%',
    height: '10%',
    width: '100%',
    alignSelf: 'center',
  },
  greeding: {
    fontSize: 43,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  textInputcontainer: {
    height: 45,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#C0C0C0',
    borderRadius: 5,
    marginVertical: '3%',
    opacity: .5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 15,
  },
  icon: {
    marginRight: '3%'
  },
  txtinput: {
    color: 'black',
    padding: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    height: 'auto',
    width: '100%',
    marginVertical: '4%',
    marginLeft: '5.5%'

  },
  conditon: {
    color: 'red',
    fontSize: 16,
  },
  checkboxcolor: {
    color: 'black',
    fontSize: 15.7,
    marginHorizontal: '1%'
  }, 
  textViewContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
},
signuptext: {
    color: 'red',
    fontSize: 16.5,
    fontWeight: '500',
    marginHorizontal: '2%',
    
},
text: {
  color: 'black',
  fontSize: 14,
},
})
export default SignUpDemo