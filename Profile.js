import { View, Text, TouchableOpacity, Image, TextInput, ActivityIndicator } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'


const Profile = ({route,navigation}) => {

  // const {email}=route.params
  // console.log(email,'profile')
  // // const password=route.params
  return (
    <View style={{
      flex:1,
      backgroundColor:'white',

    }}>
      <ActivityIndicator size={'large'} color={'blue'} style={{alignSelf:'center'}}/>
      <View style={{
        height:50,
        width:'89%',
        elevation:5,
        borderRadius:100,
        marginTop:'5%',
        backgroundColor:'white',
        alignSelf:'center',
        justifyContent:'center',
        // alignItems:'center'
      }}>
        <View style={{
          height:50,
          width:'80%',
          // backgroundColor:'red',
         flexDirection:'row',

        }}>
          <View style={{
            height:50,
            width:40,
            justifyContent:'center',
            alignItems:'center'
            // backgroundColor:'black',
          }}>
          <AntDesign onPress={()=>navigation.navigate('Home')} name='arrowleft' size={22} color='black'/>


          </View>
          <View style={{
            height:50,
            width:'50%',
            // backgroundColor:'yellow',
            justifyContent:'center',
            alignItems:'center'

          }}>
            <Text style={{
              color:'black',
              fontSize:22,
              fontWeight:'500'
            }}>My Profile</Text>

          </View>


        </View >

      </View>
      <View style={{
        height:'13%',
        width:'90%',
        borderWidth:1,
        alignSelf:'center',
        marginTop:'10%',
        justifyContent:'center',
      }}>
        <View style={{
          height:'auto',
          width:'80%',
          // backgroundColor:'red',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'

        }}>

        
        <Image source={require('../asset/hackerc.png')}
        style={{
          height: 65,
          width:65,
        }}>

        </Image>
        <View style={{
          height:55,
          width:'55%',
          // backgroundColor:'yellow'
        }}>
         
{/* <Text style={{
  color:'black',
  fontSize:17
}}>name:{email} </Text> */}
        </View>
        </View>

      </View>

    </View>
  )
}

export default Profile