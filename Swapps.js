import { View, Text,StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Swapps = ({navigation}) => {
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
          // backgroundColor:'red',
          // justifyContent:'center',
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
            // alignSelf:'center',
            alignItems:'center',
            justifyContent:'center',
            // backgroundColor:'red',
          }}>
        <AntDesign onPress={()=>navigation.navigate('Login')} name='arrowleft' size={22} color='black'/>
        </View>
        <View style={{
          height:60,
          width:142,
          alignItems:'center',
            justifyContent:'center',
          // backgroundColor:'black',

        }}>
          <Text style={{
            fontSize:18,
            color:'black',
            fontWeight:'bold',
          }}>
            SignUp with Apps
          </Text>

        </View>
        </View>
        <View style={{
          height:'49%',
          width:'80%',
          elevation:5,
          backgroundColor:'white',
          alignSelf:'center',
          // justifyContent:'center',
          marginTop:'10%',
        }}>
          {/*hacker image  */}
          <View style={{

            height:65,
            width:'90%',
            alignItems:'center',
            justifyContent:'center',
            // backgroundColor:'red',
            alignSelf:'center',
          }}>

          
          <Image source={require('../asset/hackerc.png')}style={{

            height:55,
            width:55,

          }}>

          </Image>
          </View>
          {/* SignUp with google */}
          <TouchableOpacity onPress={()=>navigation.navigate('Pinput')}
          style={{
            height:40,
            width:'80%',
            justifyContent:'space-around',
            alignItems:'center',
            alignSelf:'center',
            borderWidth:1,
            borderRadius:100,
            marginTop:'10%',
            
            

          }}>
            <View style={{
              height:36,
              width:'80%',
              // backgroundColor:'red',
              flexDirection:'row',
              alignItems:'center',
            alignSelf:'center',
            justifyContent:'space-between',
            }}>

            
            <Image source={require('../asset/google.png')}
            style={{
              height:30,
              width:30,
            }}>

            </Image>
            <Text style={{
              fontSize:17,
              fontWeight:'400',
              color:'black',
            }}>
              SignUp with Google
            </Text>
            </View>

            </TouchableOpacity>

          {/* SignUp with twitte */}
          <TouchableOpacity onPress={()=>navigation.navigate('Pinput')}
          style={{
            height:40,
            width:'80%',
            justifyContent:'space-around',
            alignItems:'center',
            alignSelf:'center',
            borderWidth:1,
            borderRadius:100,
            marginTop:'10%',
            
            

          }}>
            <View style={{
              height:36,
              width:'80%',
              // backgroundColor:'red',
              flexDirection:'row',
              alignItems:'center',
            alignSelf:'center',
            justifyContent:'space-between',
            }}>

            <AntDesign name='twitter' size={30} color='#1D9BF0'/>
            {/* <Image source={require('../asset/google.png')}
            style={{
              height:30,
              width:30,
            }}>

            </Image> */}
            <Text style={{
              fontSize:17.5,
              fontWeight:'400',
              color:'black',
            }}>
              SignUp with twitter
            </Text>
            </View>

            </TouchableOpacity>
          {/* SignUp with Facebook */}
          <TouchableOpacity onPress={()=>navigation.navigate('Pinput')}
          style={{
            height:40,
            width:'80%',
            justifyContent:'space-around',
            alignItems:'center',
            alignSelf:'center',
            borderWidth:1,
            borderRadius:100,
            marginTop:'10%',
            
            

          }}>
            <View style={{
              height:36,
              width:'89%',
              // backgroundColor:'red',
              flexDirection:'row',
              alignItems:'center',
            alignSelf:'center',
            justifyContent:'space-between',
            }}>

            <AntDesign name='facebook-square' size={30} color='#4267B2'/>
            {/* <Image source={require('../asset/google.png')}
            style={{
              height:30,
              width:30,
            }}>

            </Image> */}
            <Text style={{
              fontSize:17,
              fontWeight:'400',
              color:'black',
            }}>
              SignUp with Facebook
            </Text>
            </View>

            </TouchableOpacity>
          <View 
          style={{

            height:'20%',
            width:'90%',
            // backgroundColor:'red',
            alignSelf:'center',
            justifyContent:'center',
            alignItems:'center',
          }}>
            <TouchableOpacity onPress={()=> navigation.navigate('Usignup')}>


            
            <Text 
             style={{
              color:'blue',
              fontWeight:'bold',
              fontSize:12,
            }}>
              SignUp another way
            </Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>
  )
}

export default Swapps