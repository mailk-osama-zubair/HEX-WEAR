import { View, Text, StyleSheet, ImageBackground, StatusBar, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Octicons from 'react-native-vector-icons/Octicons'
import Entypo from 'react-native-vector-icons/Entypo'
import { } from 'react-native-gesture-handler'
import { SafeAreaView, useSafeAreaFrame } from 'react-native-safe-area-context'
import { useEffect } from 'react'
const HomeD = ({ navigation }) => {
    const[weather,setWeather]=useState([

    ])
    const fetchData= async()=>{
  const Data=await fetch('https://api.openweathermap.org/data/2.5/weather?q=Lahore&appid=fa98d893333b0898f01f963d7f7f1b9c')
  const json=await Data.json();
  setWeather(json);
  console.log(json,fetchData,Data)
  console.log(fetchData,JSON.stringify(json));
    }
    useEffect(()=>{
  fetchData();
    },[])
  const [search, setSearch] = useState('')
  return (
    <ImageBackground source={require('../asset/C.N.F.jpg')}
      style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} />
      <View style={{
        height: 60,
        width: '98%',
        alignSelf: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
        <View style={{
          height: 50,
          width: 'auto',
          // borderWidth:1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          // backgroundColor:'red'
        }}>
          <Entypo name={'location-pin'} size={33} color={'white'} />

          <Text style={{ color: 'white', fontSize: 19,  }}>LOACTAION</Text>

        </View>
        <Octicons name={'bell'} size={33} color={'white'} />
      </View>
      <SafeAreaView style={{
        borderWidth: 1,
        // flex:.6,
        height: 50,
        backgroundColor: 'white',
        flexDirection: 'row',
        width: '50%',
        alignSelf: 'center',
        borderRadius: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: '10%',


      }}>


        <TextInput style={{
          // height:40,
          // width:'37%',
          // backgroundColor:'white',
          // borderRadius:50,
          // alignSelf:'center',
          padding: 10,
          fontSize: 20,
          color: 'black',
        }}
          placeholder='Search City...'
          placeholderTextColor={'#C0C0C0'}
          value={search}
          onChangeText={(text) => setSearch(text)}
        />


        <Octicons name={'search'} size={26} color={'black'} />

      </SafeAreaView>
      <View style={{
        height: '50%',
        width: '70%',
        borderWidth: 2,
        backgroundColor: '#008080',
        // opacity:.3,
        // backgroundColor:'transparent',
        alignSelf: 'center',
        borderRadius: 50,
        borderColor: 'white',
        marginVertical: '5%',
      }}>
        <Text style={{color:'white',}}>{weather.main.temp}</Text>

      </View>
      <TouchableOpacity onPress={() => navigation.navigate('LinkingData')}
        style={{
          height: 40,
          width: '40%',
          borderWidth: 1,
          marginVertical: '17%',
          alignSelf: 'center',
          backgroundColor: 'white',
          borderRadius: 50,

        }}>
        <Text style={{
          color: 'black',
          // textAlign:'center',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 22,

          fontWeight: 'bold',
        }}>Check More</Text>


      </TouchableOpacity>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  topcontainer: {
    height: 40,
    width: '98%',
    borderWidth: 1,
    alignSelf: 'center',
    backgroundColor: 'red',

  },
  icon: {
    alignSelf: 'center',
  }
})
export default HomeD