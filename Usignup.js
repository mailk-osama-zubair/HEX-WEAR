import { View, Text ,StatusBar, TextInput,CheckBox, ScrollView, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { SafeAreaView } from 'react-native-safe-area-context'

const Usignup = ({navigation}) => {
  const[fname,setFname]=useState('');
  const[lname,setLname]=useState('');
  const[dob,setDOB]=useState('');
  const[email,setEmail]=useState('');
  const[phonenumber,setPhonenumber]=useState('');
  // const[checked,setState]=useState('');



  return (
    <View style={{
      flex:1,
      backgroundColor:'white'
      }}>
        <StatusBar barStyle={'default'} backgroundColor={'transparent'} translucent={false}/>
        <View style={{
          height:45,
          width:'97%',
          marginTop:'3%',
          alignSelf:'center',
          borderRadius:22,
          flexDirection:'row',
          alignItems:'center',
          elevation:5,
          backgroundColor:'white',
        }}>
          <View style={{
            height:40,
            width:50,
            alignItems:'center',
            justifyContent:'center',
          }}>
        <AntDesign onPress={()=>navigation.navigate('Login')} name='arrowleft' size={22} color='black'/>
        </View>
        <View style={{
          height:60,
          width:120,
          alignItems:'center',
            justifyContent:'center',
        }}>
          <Text style={{
            fontSize:20,
            color:'black',
            fontWeight:'bold',
          }}>
           User SignUp
          </Text>

        </View>
        </View>
        <View style={{
          height:'80%',
          width:'90%',
          elevation:9,
          backgroundColor:'white',
          alignSelf:'center',
          marginTop:'10%',
          borderRadius:30,

        }}>
          <View style={{
            height:50,
            marginTop:'5%',
            width:'94%',
            alignSelf:'center',
            justifyContent:'center',
            alignItems:'center',
            // backgroundColor:'red',
          }}>
            <Text style={{
              color:'black',
              fontWeight:'bold',
              fontSize:25,
            }}>
              New Account
            </Text>
            

            

          </View>
          <ScrollView>
          {/* first name */}
          <SafeAreaView style={{
             height:40,
             width:'80%',
             alignSelf:'center',
             justifyContent:'center',
             alignItems:'flex-start',
             // borderWidth:1,
             marginTop:'7%',
             elevation:5,
             backgroundColor:'white',
             borderRadius:19
            // height:40,
            // width:'80%',
            // alignSelf:'center',
            // justifyContent:'center',
            // alignItems:'flex-start',
            // borderWidth:1,
            // marginTop:'7%',
            // borderRadius:10,
            // borderBlockStartColor:'white',
            // borderLeftColor:'white',
            // borderRightColor:'white',
            // borderBlockEndColor:'grey',

          }}>
            <TextInput 
            style={{
              color:'black',
            }}
            placeholder='Enter you First name'
            placeholderTextColor={'grey'}
            value={fname}
            onChangeText={(text)=>setFname(text)}
            keyboardType={'default'}
            autoCapitalize={true}
            // dataDetectorTypes={''}
            
            />

          </SafeAreaView>
          {/* Last name */}
          <SafeAreaView style={{
             height:40,
             width:'80%',
             alignSelf:'center',
             justifyContent:'center',
             alignItems:'flex-start',
             // borderWidth:1,
             marginTop:'7%',
             elevation:5,
             backgroundColor:'white',
             borderRadius:19
            // height:40,
            // width:'80%',
            // alignSelf:'center',
            // justifyContent:'center',
            // alignItems:'flex-start',
            // borderWidth:1,
            // marginTop:'7%',
            // borderRadius:10,
            // borderBlockStartColor:'white',
            // borderLeftColor:'white',
            // borderRightColor:'white',

          }}>
            <TextInput 
            style={{
              color:'black',
            }}
            placeholder='Enter you Last name'
            placeholderTextColor={'grey'}
            value={lname}
            onChangeText={(text)=>setLname(text)}
            keyboardType={'default'}
            autoCapitalize={true}
            // dataDetectorTypes={''}
            
            />

          </SafeAreaView>
          <SafeAreaView style={{
             height:40,
             width:'80%',
             alignSelf:'center',
             justifyContent:'center',
             alignItems:'flex-start',
             // borderWidth:1,
             marginTop:'7%',
             elevation:5,
             backgroundColor:'white',
             borderRadius:19

          }}>
            <TextInput 
            style={{
              color:'black',
            }}
            placeholder='MM/DD/YY'
            placeholderTextColor={'grey'}
            value={dob}
            onChangeText={(text)=>setDOB(text)}
            keyboardType={'decimal-pad'}
            autoCapitalize={true}
            // dataDetectorTypes={''}
            
            />

          </SafeAreaView>
          {/* phonnumber */}
          <SafeAreaView style={{
            height:40,
            width:'80%',
            alignSelf:'center',
            justifyContent:'center',
            alignItems:'flex-start',
            // borderWidth:1,
            marginTop:'7%',
            elevation:5,
            backgroundColor:'white',
            borderRadius:19,
            // borderBlockStartColor:'white',
            // borderLeftColor:'white',
            // borderRightColor:'white',

          }}>
            <TextInput 
            style={{
              color:'black',
            }}
            placeholder='Please enter you contact number'
            placeholderTextColor={'grey'}
            value={phonenumber}
            onChangeText={(text)=>setPhonenumber(text)}
            keyboardType={'number-pad'}
            autoCapitalize={true}
            // dataDetectorTypes={''}
            
            />

          </SafeAreaView>
          {/* email */}
          <SafeAreaView style={{
            height:40,
            width:'80%',
            alignSelf:'center',
            justifyContent:'center',
            alignItems:'flex-start',
            // borderWidth:1,
            marginTop:'7%',
            elevation:5,
            backgroundColor:'white',
            borderRadius:19,
            // borderBlockStartColor:'white',
            // borderLeftColor:'white',
            // borderRightColor:'white',

          }}>
            <TextInput 
            style={{
              color:'black',
            }}
            placeholder='Please enter you Email'
            placeholderTextColor={'grey'}
            value={email}
            onChangeText={(text)=>setEmail(text)}
            keyboardType={'email-address'}
            autoCapitalize={true}
            // dataDetectorTypes={''}
            
            />

          </SafeAreaView>
          <View style={{
            height:40,
            width:'77%',
            alignSelf:'center',
            marginTop:'7%',
            alignItems:'flex-start',
            justifyContent:'flex-start',

          }}>
            <Text style= 
            {{color:'red',
               fontSize:12,
               fontWeight:'bold',
            }}>
              Please re-check your details...!
            </Text>

          </View>
          <TouchableOpacity onPress={()=>navigation.navigate('Home')}
           style={{
            height:30,
            marginTop:'7%',
            width:'75%',
            backgroundColor:'green',
            alignSelf:'center',
            alignItems:'center',
            justifyContent:'center',
            // backgroundColor:'red',
            borderRadius:100,

          }}>
            <Text style={{
              color:'white',
              fontWeight:'500',
              fontSize:17,
            }}>
              Sign Up
            </Text>
            </TouchableOpacity>

          
          <View style={{
            height:110,
            width:'89%',
            alignSelf:'center',
            justifyContent:'center',
            alignItems:'center',

          }}>
            <TouchableOpacity onPress={()=>navigation.navigate('Login')}>

            
            <Text style={{
              color:'#1877F2',
              fontWeight:'bold',
              fontSize:13,
            }}>or Login</Text>
            </TouchableOpacity>

          </View>
           </ScrollView>
         
              {/* <View style={{ flexDirection: 'row' }}>
               <CheckBox
                value={checked}
                onValueChange={(cBox) => setState({cBox})}
                  />
                <Text style={{marginTop: 5}}> this is checkbox</Text>
                </View> */}




        </View>
      </View>
  )
}

export default Usignup