import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CheckBox from 'react-native-check-box'
import { } from 'react-native-gesture-handler';
import Octicons from 'react-native-vector-icons/Octicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

function ForgetPasswordDemo({ navigation }) {
  const [email, setEmial] = useState('');
  const [Password, setPassword] = useState('');
  const [mobilenbr, setMobilenbr] = useState('');
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
  return (
    <View style={styles.container}>
      <View style={styles.greedingcontainer}>
        <Text style={styles.greeding}>Password Recovery</Text>
      </View>
      <SafeAreaView style={styles.textInputcontainer}>
        <TextInput
          style={styles.txtinput}
          placeholder='Email Adress*'
          placeholderTextColor={'black'}
          value={email}
          onChangeText={(text) => setEmial(text)}
        />
      </SafeAreaView>
      <SafeAreaView style={styles.textInputcontainer}>
        <TextInput
          style={styles.txtinput}
          placeholder='Your Reg. Mobile*'
          placeholderTextColor={'black'}
          value={mobilenbr}
          onChangeText={(text) => setMobilenbr(text)}
        />
      </SafeAreaView>
      
      <SafeAreaView style={styles.textInputcontainer}>
        <TextInput
          style={styles.txtinput}
          placeholder='Password'
          placeholderTextColor={'black'}
          value={Password}
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
          placeholder='Confirm Password'
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
          onClick={() => setChecked(email==''||Password==''||confirmpassword==''||mobilenbr==''? (!{isChecked:false}):({isChecked}))}
          rightTextStyle={{ color: 'black', fontSize: 15.7, }}
          checkedCheckBoxColor="green"
          uncheckedCheckBoxColor="red"
        />
        <Text style={styles.checkboxcolor}>I Agree with all the fields</Text>
      </View>
      <TouchableOpacity style={{
        height: 47,
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
        marginVertical: '8%',
        borderRadius: 4,
        backgroundColor: email==''&& Password==''&&  mobilenbr==''&& confirmpassword==''  ? 'red':'green',
        backgroundColor: email==''|| Password==''||  mobilenbr==''|| confirmpassword=='' || !isChecked? 'red':'green',

      }}
        disabled={(!isChecked&& email==''&& Password=='' && mobilenbr==''&& confirmpassword=='' )}>
        <Text style={{
          color: 'white', fontSize: 22,
          fontWeight: 'bold', textAlign: 'center'
        }}>
          Reset My Password
        </Text>
      </TouchableOpacity>
      <View style={styles.textViewContainer}>
                <Text style={styles.text}>
                    For security reasons we don't store your password. 
                Your password will be reset and a new one will be send. </Text>
            </View>
            <TouchableOpacity style={styles.backbutton} onPress={()=>navigation.navigate('LoginDemo')} >
                    <AntDesign name='doubleleft' size={15} color={'red'}/>
                    <Text style={styles.backbuttontext}>
                        Back to Login
                    </Text>
                </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  greedingcontainer: {
    marginVertical: '7%',
    height: '10%',
    width: '100%',
    alignSelf: 'center',
  },
  greeding: {
    fontSize: 35,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontFamily:'Lato-Bold.ttf',
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
    justifyContent:'center'
},
backbuttontext: {
    color: 'red',
    fontSize: 16.5,
    fontWeight: '500',
    // marginHorizontal: '2%',
    
},
text: {
  color: 'black',
  fontSize: 14,
  opacity:.5
},
backbutton:{
    alignSelf:'center',
    marginVertical:'5%',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
}
})
export default ForgetPasswordDemo