import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import Homeanimated from './Homeanimated'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'
import Octicons from 'react-native-vector-icons/Octicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { Image } from 'react-native-animatable'
import * as Animatable from 'react-native-animatable';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { } from 'react-native-gesture-handler'
import Coustom from './Coustom'

const HomeDemo = ({ navigation }) => {
  const [showbell, setShowbell] = useState(true);
  const [search, setSearch] = useState('');
  const carlist = [
    {
      carImage: require('../asset/30.png'),
      // carIcon:[],
      carTitle: 'CNG',
      // dateIcone:[],
      date: '2021',
      // personIcon:[],
      person: '4',

      caption: 'Toyata BWM',
      price: '$439',
      about: 'Hy is my car about and i want to run on this rent , if any one is interseted im willing for this if any one is interseted im willing for this if any one is interseted im willing for this'
    }, {
      carImage: require('../asset/bmw.png'),
      // carIcon:[],
      carTitle: 'CNG',
      // dateIcone:[],
      date: '2021',
      // personIcon:[],
      person: '4',

      caption: 'Toyata BWM honda',
      price: '$439',
      about: ' any one is interseted im willing for this if any one is interseted im willing for this'
    },
    {
      carImage: require('../asset/gli.png'),
      // carIcon:[],
      carTitle: 'pertrol',
      // dateIcone:[],
      date: '2023',
      // personIcon:[],
      person: '4',

      caption: 'Toyata',
      price: '$439',
      about: 'Hy is my car about and i want to run on this rent , if any one is interseted im willing for this if any one is interseted im willing for this if any one is interseted im willing for this'
    }, {
      carImage: require('../asset/civic.png'),
      // carIcon:[],
      carTitle: 'CNG',
      // dateIcone:[],
      date: '2021',
      // personIcon:[],
      person: '4',

      caption: 'Toyata BWM honda',
      price: '$439',
      about: 'Hy is my car about and i want to run on this rent , if any one is interseted im willing for this if any one is interseted im willing for this if any one is interseted im willing for this'
    },

  ]
  const setVisble = () => {
    setShowbell(!showbell);
    console.log('calling');
  }
  const serchInput = () => {
    setSearchAnime(!searchAnime);

  }
  const [searchAnime, setSearchAnime] = useState(true);
  return (
    <ImageBackground
      source={require('../asset/intro4.jpeg')}
      style={styles.container}>
      {/* <AnimationRote/> */}
      <View style={styles.container1}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'transparent'
        }}>
          <Entypo name={'menu'} size={33} color={'white'} />

          <TouchableOpacity
            style={styles.serachanimation}
            onPress={serchInput}>

            <Feather style={{
              marginRight: '10%',
            }} name={'search'} size={28} color={'white'} />
            {
              !searchAnime ?
                <TextInput
                  style={styles.inputBox}
                  placeholder='Search...'
                  placeholderTextColor={'grey'}
                  value={search}
                  onChangeText={(text) => setSearch(text)} /> : null
            }

          </TouchableOpacity>
          <TouchableOpacity style={styles.bellView} onPress={() => setVisble()} >
            {
              !showbell ?

                <Entypo name={'bell'} size={33} color={'white'} />
                :
                <FontAwesome name={'bell'} size={33} color={'white'} />

            }
          </TouchableOpacity>
        </View>

      </View>
      <ScrollView>
        <View
          // source={require('../asset/dark5.jpg')}
          style={{
            height: 300,
            width: 393,
            // marginTop:'-10%',
            backgroundColor: '#C46200',
            alignSelf: 'center',
            // borderRadius: 100,
            borderTopEndRadius: 19,
            borderTopLeftRadius: 19,


          }}>


          <View style={styles.slider}>
            <Homeanimated />
          </View>
        </View>



        <Animatable.View style={{
          height: 400,
          // width:'100%',
          // borderWidth:2,
          alignSelf: 'center',
          elevation: 5,
          //  borderRadius:30,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,

          backgroundColor: 'white',
          marginTop: '-15%',
        }} animation={'slideInUp'} duration={6000}>


          <FlatList
            data={carlist}
            // horizontal
            numColumns={2}
            renderItem={({ item, index }) => {
              return (
                <View >
                  <View style={styles.carContainer}>
                    <View
                      style={styles.carImagecontainer}
                    >
                      <ImageBackground
                        style={styles.carimage} source={item.carImage}>

                      </ImageBackground>
                      <ImageBackground
                        source={require('../asset/black-transparent.png')}
                        style={styles.iconeContainer}>
                        <View style={styles.caricon}>
                          <FontAwesome5 name='car-alt' size={13} color={'white'} />
                          <Text style={styles.cartext}>{item.carTitle}</Text>
                        </View>
                        <View style={styles.caricon}>
                          <Fontisto name='date' size={13} color={'white'} />
                          <Text style={styles.cartext}>{item.date}</Text>
                        </View>
                        <View style={styles.profileIcon}>
                          <Octicons name='person-fill' size={13} color={'white'} />
                          <Text style={styles.cartext}>{item.person}</Text>
                        </View>

                      </ImageBackground>
                    </View >
                    <View
                      style={styles.titleContainer}>
                      <View style={styles.captionContainer}>
                        <Text style={styles.captionsty}>{item.caption}</Text>
                      </View>
                      <View style={styles.pricebox}>
                        <Text style={styles.captionsty}>{item.price}</Text>
                      </View>

                    </View>
                    <View style={styles.aboutBox}>
                      <Text style={styles.aboutsty}>{item.about}</Text>
                    </View>

                  </View>

                </View>
              )
            }}
          />
          {/* <TouchableOpacity onPress={()=>navigation.navigate('Registeration')}
            style={styles.RegisterCar}>
            <AntDesign name='plus' size={45} color={'green'} />

          </TouchableOpacity> */}
        </Animatable.View>
        <ImageBackground
          source={require('../asset/BLUR-trafic.jpg')}
          style={styles.carPillers}>
          <View style={styles.box}>
            <Fontisto name='date' size={27} color={'white'} />
            <Text style={styles.expert}>50+</Text>
            <Text style={styles.discrpt}>Year of Work</Text>
          </View>
          <View style={styles.box}>
            <FontAwesome5 name='car-alt' size={27} color={'white'} />

            <Text style={styles.expert}>1300+</Text>
            <Text style={styles.discrpt}>Car for sale</Text>
          </View><View style={styles.box}>
            <Octicons name='person-fill' size={27} color={'white'} />

            <Text style={styles.expert}>1550+</Text>
            <Text style={styles.discrpt}>Client Satify</Text>
          </View>
        </ImageBackground>
        <View style={{
          height: 400,
          backgroundColor: 'transparent'
        }}>
<Coustom/>
        </View>
        <View style={styles.footer}>

        </View>
      </ScrollView>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    backgroundColor: 'transparent'
  },
  container1:
  {
    height: 50,
    width: "97%",
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'transparent'
  },
  slider:
  {
    height: 200,
    width: 392,
    marginVertical: '2%',
  },
  serachanimation:
  {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  inputBox:
  {
    height: 40,
    alignSelf: 'center',
    width: '80%',
    marginRight: '9%',
    borderRadius: 10,
    backgroundColor: 'white',
    fontSize: 19,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  textBox: {
    width: 59.7,
    marginTop: 19,
    backgroundColor: 'red',
    opacity: .7,
    borderRadius: 100,
  },
  carContainer: {
    marginTop: '10%',
    height: 160,
    width: 150,
    marginHorizontal: '8%',
    borderWidth: .2,
    borderRadius: 7,
    elevation: 5,
    backgroundColor: 'white'

  },
  carImagecontainer: {
    height: 100,
    width: 147,
    // backgroundColor:'red',
    alignSelf: 'center',
    alignItems: 'center',
    // borderWidth:2,
    marginTop: '1%',
    // justifyContent:'space-around',
  },
  carimage: {
    height: 70,
    width: 117,
  },
  iconeContainer: {
    height: 24,
    width: 146,
    // alignSelf:'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    // borderWidth:2,
    // backgroundColor:'black',
    alignItems: 'center',
    opacity: 1,
  },
  caricon: {
    height: 19,
    width: 49,
    // backgroundColor:'red',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    height: 19,
    width: 39,
    // backgroundColor:'red',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartext:
  {
    color: 'white',
    fontSize: 11,
    fontWeight: '800'
  },
  titleContainer:
  {
    height: 'auto',
    width: 148,
    // borderWidth:2,
    // alignSelf:'center',
    // alignItems:'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginRight: '5%',
    marginTop: '-3%'
  },
  captionContainer: {
    height: 'auto',
    width: 110,
    // backgroundColor:'red',
    flexWrap: 'nowrap',
    // alignSelf:'center',
    // alignItems: 'center',
    justifyContent: 'center',
    // borderWidth:1,
  },
  pricebox: {
    // height: ,
    width: 30,
    // backgroundColor:'red',
    flexWrap: 'nowrap',
    // alignSelf:'center',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth:1,
  },
  captionsty: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black'
  },
  aboutBox: {
    // borderWidth:1,
    height: 40,
    width: 140,
    alignSelf: 'center',
    // justifyContent:'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  aboutsty: {
    fontSize: 8,
    color: 'grey',
    fontWeight: 'bold',
    textAlign: 'justify',
    // textDecorationLine:'line-through'
  },
  RegisterCar: {
    marginTop: '10%',
    height: 160,
    width: 150,
    marginHorizontal: '5%',
    borderWidth: .9,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  carPillers: {
    height: 200,
    width: 392,
    opacity: .7,
    justifyContent: 'space-around',
    // alignItems:'center',
    flexDirection: 'row',
    alignItems: 'center',

  },
  box: {
    height: 92,
    width: 90,
    backgroundColor: '#ff0000',
    borderRadius: 50,
    // alignSelf:'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  discrpt:
  {
    fontSize: 11,
    color: 'white',
    fontWeight: 'bold',
    flexWrap: 'wrap'
  },
  expert:
  {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
  },
  footer:{
    height:300,
    backgroundColor:'black',
    opacity:.3,
  }
})
export default HomeDemo