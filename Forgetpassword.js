import { View, Text, StatusBar, Image, TextInput, ScrollView, TouchableOpacity, Alert, } from 'react-native'
import React from 'react'
import { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { SafeAreaView } from 'react-native-safe-area-context'
const Forgetpassword = ({route,navigation}) => {
  const [fpassword, setfpassword] = useState('');
  const [Eemail, setEmail] = useState('');

  // const Display = () => {
  //    Alert.alert('This is', fpassword && Eemail);
  //   }
   

    // setEmail(),
    //   setfpassword()
// const {email,password}=props.route.params;
  const email=route.params
  // const email = route.params
  // setEmail(email);
  const password=route.params
  // // setfpassword(password)
  console.log(email,password,'kjfjksjdfijs')
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'white'
    }}>
      <StatusBar barStyle={'default'} backgroundColor={'transparent'} translucent={false} />
      <View style={{
        height: 45,
        width: '97%',
        marginTop: '3%',
        // backgroundColor:'red',
        // justifyContent:'center',
        alignSelf: 'center',
        borderRadius: 22,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 5,
        backgroundColor: 'white',
      }}>
        <View style={{
          height: 40,
          width: 50,
          // alignSelf:'center',
          alignItems: 'center',
          justifyContent: 'center',
          // backgroundColor:'red',
        }}>
          <AntDesign onPress={() => navigation.navigate('Login')} name='arrowleft' size={22} color='black' />
        </View>
        <View style={{
          height: 60,
          width: 160,
          alignItems: 'center',
          justifyContent: 'center',
          // backgroundColor:'black',

        }}>

          <Text style={{
            fontSize: 20,
            color: 'black',
            fontWeight: 'bold',
          }}>
            Forget Password
          </Text>

        </View>
      </View>
      <View style={{
        height: '55%',
        width: '80%',
        marginTop: '15%',
        alignSelf: 'center',
        borderRadius: 19,
        elevation: 5,
        backgroundColor: 'white',

      }}>
        {/* hacker image */}
        <View style={{
          height: 73,
          width: '99%',
          // backgroundColor:'red',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Image source={require('../asset/hackerc.png')}
            style={{
              height: 55,
              width: 55,

            }}>

          </Image>
          {/* <Text>name:{email}</Text>
<Text>name:{password}</Text> */}
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>



          <SafeAreaView style={{
            height: 40,
            width: '89%',
            alignSelf: 'center',
            borderWidth: 1,
            borderRadius: 10,
            marginTop: '10%',
            borderBlockStartColor: 'white',
            borderLeftColor: 'white',
            borderRightColor: 'white',
            borderBlockEndColor: 'grey',


          }}>

            <TextInput style={{
              color: 'black',
              marginLeft: '3%',
              // fontSize:22,
            }}
              placeholder='Enter your phone number'
              placeholderTextColor={'grey'}
             value={password.password}
              autoCorrect={true}
              maxLength={13}
              // dataDetectorTypes={'phoneNumber'}
              keyboardType={'number-pad'}

              onChangeText={(text) => setfpassword(text)}

            />

          </SafeAreaView>
          <SafeAreaView style={{
            height: 40,
            width: '89%',
            alignSelf: 'center',
            borderWidth: 1,
            borderRadius: 10,
            marginTop: '10%',
            borderBlockStartColor: 'white',
            borderLeftColor: 'white',
            borderRightColor: 'white',
            borderBlockEndColor: 'grey',


          }}>
            <TextInput style={{
              color: 'black',
              marginLeft: '3%',
            }}
              placeholder='Enter your email'
              placeholderTextColor={'grey'}
             value={email.email}
              // autoCorrect={true}
              dataDetectorTypes={'all'}
              keyboardType={'email-address'}
              onChangeText={(text) => setEmail(text)}

            />

          </SafeAreaView>
          <TouchableOpacity 
          // onPress={() =>Display()}
            style={{
              height: 33,
              width: '80%',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: '10%',
              backgroundColor: 'green',
              borderRadius: 25,
            }}>
              
            <Text style={{
              color: 'white',
              fontWeight: '500',
              fontSize: 18,

            }}>
              Send code
            </Text>

          </TouchableOpacity>
          <View
            style={{
              height: 110,
              width: '96%',
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',


            }}>
            <Text style={{
              color: 'blue',
              fontSize: 11,
              fontWeight: '400',
            }}>
              You will receive verification code in one minute
            </Text>

          </View>
        </ScrollView>
      </View>

    </View>
  )
}

export default Forgetpassword