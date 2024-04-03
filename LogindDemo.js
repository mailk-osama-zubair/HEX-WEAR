import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CheckBox from 'react-native-check-box'
import Octicons from 'react-native-vector-icons/Octicons'
import AsyncStorage from '@react-native-async-storage/async-storage'
const LogindDemo = ({navigation}) => {
    const [email, setEmial] = useState('');
    const [Password, setPassword] = useState('');
    const [show, setshow] = useState(false)
    const visible = () => {
        setshow(!show);
    };
    const [isChecked, setCheck] = useState(false);
   
    const Validation=()=>{
        if(email!==email&& Password!==Password ){
            Alert.alert('Alert!', 'Incorrect submision', [
              
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]);
          
        }
        else if( email!==email ||Password!==Password){
            Alert.alert('Alert!', 'Incorrect submision', [
              
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]);
        }
        else{
            
        }
    }
    const SaveData=async()=>{
        const Stored= {email,Password}
        console.log(Stored);
       }
       const ValidationCheck=()=>{
if (!isChecked||email==''||Password==''==false){
   
        ToastAndroid.showWithGravity(
            'lOGIN Succefull',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
          );
    navigation.navigate('HomeDemo'),[200]
     
    
}
else{
    Alert.alert('Alert!', 'Sorry you fill all fields'),[
       { text: 'OK',}
    ]
}
       }
    // const getData=async()=>{
    //     const GetData=await AsyncStorage.getItem('DATA')
    //     const convert=JSON.parse(GetData);
    //     console.log(convert)
    // }
    return (
        <View style={styles.container}>
            <View style={styles.greedingcontainer}>
                <Text style={styles.greeding}>Login</Text>
            </View>
            <SafeAreaView style={styles.textInputcontainer}>
                <TextInput
                    style={styles.txtinput}
                    placeholder='Email address*'
                    placeholderTextColor={'black'}
                    value={email}
                    onChangeText={(text) => setEmial(text)}
                />
            </SafeAreaView>
            <SafeAreaView style={styles.textInputcontainer}>
                <TextInput
                    style={styles.txtinput}
                    placeholder='Password*'
                    placeholderTextColor={'black'}
                    value={Password}
                    secureTextEntry={!show}
                    onChangeText={(text) => setPassword(text)}
                />
                <TouchableOpacity onPress={visible}>
                    {show ?
                        <Octicons style={styles.icon} name='eye' size={19} color={'black'} /> :
                        <Octicons style={styles.icon} name='eye-closed' size={19} color={'black'} />
                    }
                </TouchableOpacity>
            </SafeAreaView>
            <CheckBox style={{
                marginVertical: '3%',
                marginLeft: '4.9%',

            }}
                isChecked={isChecked}
                onClick={() => setCheck(email=='' || Password==''? (!{isChecked:false}):({isChecked}),
                )}
                rightText="I read all the input field"
                rightTextStyle={{ fontSize: 14, color: isChecked ? 'black' : 'black' }}
                checkedCheckBoxColor="green"
                uncheckedCheckBoxColor="red"
                
               

            />


            <TouchableOpacity onPress={(SaveData,ValidationCheck)}
            style={{
                height: 47,
                width: '90%',
                alignSelf: 'center',
                justifyContent: 'center',
                marginVertical: '10%',
                borderRadius: 4,
                // backgroundColor:  ? 'green' : '#FF0000',
                backgroundColor: email=='' && Password=='' ? 'red':'green',
                backgroundColor: email=='' || Password==''||!isChecked ? 'red':'green',
                // backgroundColor: 

            }}
                disabled={(!isChecked||email==''||Password=='')}
                >
                <Text style={{
                    color: 'white', fontSize: 22,
                    fontWeight: 'bold', textAlign: 'center'
                }}>
                    Login
                </Text>
            </TouchableOpacity>

            <View style={styles.textViewContainer}>
                <Text style={styles.text}>Don't have an account?</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('SignUpDemo')}>
                    <Text style={styles.signuptext}>
                        SignUp Here
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.textViewContainer}>
                <TouchableOpacity onPress={()=>navigation.navigate('ForgetPasswordDemo')}>
                    <Text style={styles.forgetpasswordtext}>
                        Forget Password?
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
        marginVertical: '10%',
        height: '22%',
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
        alignItems: 'center'
    },
    txtinput: {
        color: 'black',
        padding: 10,
    },
    icon: {
        marginRight: '3%'
    },
    loginContainer: {
        height: 47,
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#FF0000',
        marginVertical: '10%',
        borderRadius: 4,
    },
    text: {
        color: 'black',
        fontSize: 14,
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
        marginHorizontal: '2%'
    },
    forgetpasswordtext: {
        color: 'red',
        fontSize: 16.5,
        fontWeight: '500',
        marginHorizontal: '2%'
    }
})
export default LogindDemo