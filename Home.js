import { View, Text, StatusBar, SafeAreaView, TextInput, Image, ScrollView, TouchableOpacity, } from 'react-native'
import React from 'react'
import { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import South from './South'


const Home = ({ navigation, route }) => {
  const [scity, setScity] = useState(route.params);
  const handleSearchquery=(text)=>{
    if(scity===""){
      return(
        <View style={{
          flex:1,
          justifyContent:'center',
          alignItems:'center',

        }}>
<Text>The City is not existing </Text>
        </View>
      )
    }
    if(scity.includes(scity)){
      <View style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center',

      }}>
<Text>{scity}</Text>
      </View>
    }
  }
  // const signupfacebook = route.params
  //   console.log(signupfacebook)
  return (
    // <View style={{
    //     flex:1,
    //     backgroundColor:'white'
    //     }}>
    //       <StatusBar barStyle={'default'} backgroundColor={'transparent'} translucent={false}/>
    //       <View style={{
    //         height:45,
    //         width:'97%',
    //         marginTop:'3%',
    //         alignSelf:'center',
    //         borderRadius:22,
    //         flexDirection:'row',
    //         alignItems:'center',
    //         elevation:5,
    //         backgroundColor:'white',
    //       }}>
    //         <View style={{
    //           height:40,
    //           width:50,
    //           alignItems:'center',
    //           justifyContent:'center',
    //           // backgroundColor:'red',
    //         }}>
    //       <AntDesign onPress={()=>navigation.navigate('Login')} name='arrowleft' size={22} color='black'/>
    //       </View>
    //       <View style={{
    //         height:60,
    //         width:121,
    //         alignItems:'center',
    //           justifyContent:'center',
    //         // backgroundColor:'black',

    //       }}>
    //         <Text style={{
    //           fontSize:20,
    //           color:'black',
    //           fontWeight:'bold',
    //         }}>
    //          Home Screen
    //         </Text>

    //       </View>
    //       </View>
    //     </View>
    <View 
    style={{
      flex: 1,
      backgroundColor: 'white',

    }}>
      {handleSearchquery}
      <StatusBar barStyle={'default'} backgroundColor={'transparent'} translucent={false} />
      <View style={{
        height: 50,
        width: '89%',
        // backgroundColor:'red',
        alignSelf: 'center',
        alignItems: 'center',
        // marginTop:'2%',
        justifyContent: 'space-between',
        flexDirection: 'row',

      }}>

        <AntDesign onPress={() => navigation.navigate('Login')} name='arrowleft' size={22} color='black' />
        
        <TouchableOpacity> 
        <Feather name='bell' size={23} color='black' />

        </TouchableOpacity>
      </View>
      {/* <Text >{route}</Text> */}
      <SafeAreaView style={{
        height: 40,
        width: '80%',
        alignSelf: 'center',
        alignItems: 'flex-statt',
        justifyContent: 'flex-start',
        // borderRadius:100,
        borderRadius: 100,
        elevation: 5,
        backgroundColor: 'white',
      }}>

        <TextInput style={{
          color: 'black',
          marginLeft: '2%',

        }}
        clearButtonMode="always"
          placeholder='Search City'
          placeholderTextColor={'#808080'}
          value={scity}
          onChangeText={(text) => setScity(text)}
        >

        </TextInput>

      </SafeAreaView>
      {/* South cites */}
      <View
        style={{
          height: 260,
          width: '80%',
          alignSelf: 'center',
          marginTop: '6%',
          borderRadius: 19,
          elevation: 5,
          backgroundColor: 'white',



        }}>
        <View style={{
          height: 30,
          width: '90',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text style={{
            color: 'black',
            fontSize: 17,
            fontWeight: 'bold',
          }}>
            South Pakistan

          </Text>
        </View>
        <ScrollView>
          {/* cityes */}
          {/* RYK */}
          <View style={{
            height: 55,
            width: '89%',
            alignSelf: 'center',
            marginTop: "3%",
            // backgroundColor:'red',
            justifyContent: 'flex-start',
            flexDirection: 'row',
            alignItems: 'flex-start',

          }}>
            {/* image */}
            <View style={{
              height: 59,
              width: 60,
              justifyContent: 'center',
              alignItems: 'flex-end',
              // backgroundColor:'red',
              // alignSelf:'center',


            }}>
              <Image source={require('../asset/ryk.jpg')}
                style={{
                  height: 59,
                  width: 60,
                  borderRadius: 10,
                }}>

              </Image>

            </View>
            {/* Text */}
            <View style={{
              height: 71,
              width: 136,
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              // backgroundColor:'red',
              marginLeft: '1.7%',

            }}>
              <Text style={{
                color: 'black',
                fontSize: 16,
                fontWeight: '600',
              }}> Rahim Yar Khan</Text>
              <EvilIcons name='location' size={21} color='#1877F2' />
              <Image source={require('../asset/rating.png')}
                style={{
                  height: 30,
                  width: 80,
                  marginTop: '1%',
                }}>

              </Image>

            </View>




          </View>

          {/* BWP */}
          <View style={{
            height: 55,
            width: '89%',
            alignSelf: 'center',
            marginTop: "6%",
            // backgroundColor:'red',
            justifyContent: 'flex-start',
            flexDirection: 'row',
            alignItems: 'flex-start',

          }}>
            {/* image */}
            <View style={{
              height: 59,
              width: 60,
              justifyContent: 'center',
              alignItems: 'flex-end',
              // backgroundColor:'red',
              // alignSelf:'center',


            }}>
              <Image source={require('../asset/bwp.jpg')}
                style={{
                  height: 59,
                  width: 60,
                  borderRadius: 10,
                }}>

              </Image>

            </View>
            {/* Text */}
            <View style={{
              height: 71,
              width: 136,
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              // backgroundColor:'red',
              marginLeft: '1.7%',

            }}>
              <Text style={{
                color: 'black',
                fontSize: 16,
                fontWeight: '600',
              }}> Bahawalpur</Text>
              <EvilIcons name='location' size={21} color='#1877F2' />
              <Image source={require('../asset/rating.png')}
                style={{
                  height: 30,
                  width: 80,
                  marginTop: '1%',
                }}>

              </Image>

            </View>




          </View>
          {/* Multan */}
          <View style={{
            height: 55,
            width: '89%',
            alignSelf: 'center',
            marginTop: "6%",
            // backgroundColor:'red',
            justifyContent: 'flex-start',
            flexDirection: 'row',
            alignItems: 'flex-start',

          }}>
            {/* image */}
            <View style={{
              height: 59,
              width: 60,
              justifyContent: 'center',
              alignItems: 'flex-end',
              // backgroundColor:'red',
              // alignSelf:'center',


            }}>
              <Image source={require('../asset/MLT.jpg')}
                style={{
                  height: 59,
                  width: 60,
                  borderRadius: 10,
                }}>

              </Image>

            </View>
            {/* Text */}
            <View style={{
              height: 71,
              width: 136,
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              // backgroundColor:'red',
              marginLeft: '1.7%',

            }}>
              <Text style={{
                color: 'black',
                fontSize: 16,
                fontWeight: '600',
              }}> Multan</Text>
              <EvilIcons name='location' size={21} color='#1877F2' />
              <Image source={require('../asset/rating.png')}
                style={{
                  height: 30,
                  width: 80,
                  marginTop: '1%',
                }}>

              </Image>

            </View>




          </View>
          {/* Lahore */}
          <View style={{
            height: 55,
            width: '89%',
            alignSelf: 'center',
            marginTop: "6%",
            // backgroundColor:'red',
            justifyContent: 'flex-start',
            flexDirection: 'row',
            alignItems: 'flex-start',

          }}>
            {/* image */}
            <View style={{
              height: 59,
              width: 60,
              justifyContent: 'center',
              alignItems: 'flex-end',
              // backgroundColor:'red',
              // alignSelf:'center',


            }}>
              <Image source={require('../asset/lahor.jpg')}
                style={{
                  height: 59,
                  width: 60,
                  borderRadius: 10,
                }}>

              </Image>

            </View>
            {/* Text */}
            <View style={{
              height: 71,
              width: 136,
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              // backgroundColor:'red',
              marginLeft: '1.7%',

            }}>
              <Text style={{
                color: 'black',
                fontSize: 16,
                fontWeight: '600',
              }}> Lahore</Text>
              <EvilIcons name='location' size={21} color='#1877F2' />
              <Image source={require('../asset/rating.png')}
                style={{
                  height: 30,
                  width: 80,
                  marginTop: '1%',
                }}>

              </Image>

            </View>




          </View>
          {/* isb */}
          <View style={{
            height: 55,
            width: '89%',
            alignSelf: 'center',
            marginTop: "6%",
            // backgroundColor:'red',
            justifyContent: 'flex-start',
            flexDirection: 'row',
            alignItems: 'flex-start',

          }}>
            {/* image */}
            <View style={{
              height: 59,
              width: 60,
              justifyContent: 'center',
              alignItems: 'flex-end',
              // backgroundColor:'red',
              // alignSelf:'center',


            }}>
              <Image source={require('../asset/isb.jpg')}
                style={{
                  height: 59,
                  width: 60,
                  borderRadius: 10,
                }}>

              </Image>

            </View>
            {/* Text */}
            <View style={{
              height: 71,
              width: 136,
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              // backgroundColor:'red',
              marginLeft: '1.7%',

            }}>
              <Text style={{
                color: 'black',
                fontSize: 16,
                fontWeight: '600',
              }}> Islambad</Text>
              <EvilIcons name='location' size={21} color='#1877F2' />
              <Image source={require('../asset/rating.png')}
                style={{
                  height: 30,
                  width: 80,
                  marginTop: '1%',
                }}>

              </Image>

            </View>




          </View>
          {/* Marry */}
          <View style={{
            height: 55,
            width: '89%',
            alignSelf: 'center',
            marginTop: "6%",
            // backgroundColor:'red',
            justifyContent: 'flex-start',
            flexDirection: 'row',
            alignItems: 'flex-start',

          }}>
            {/* image */}
            <View style={{
              height: 59,
              width: 60,
              justifyContent: 'center',
              alignItems: 'flex-end',
              // backgroundColor:'red',
              // alignSelf:'center',


            }}>
              <Image source={require('../asset/murray2.jpg')}
                style={{
                  height: 59,
                  width: 60,
                  borderRadius: 10,
                }}>

              </Image>

            </View>
            {/* Text */}
            <View style={{
              height: 71,
              width: 136,
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              // backgroundColor:'red',
              marginLeft: '1.7%',

            }}>
              <Text style={{
                color: 'black',
                fontSize: 16,
                fontWeight: '600',
              }}> Murray</Text>
              <EvilIcons name='location' size={21} color='#1877F2' />
              <Image source={require('../asset/rating.png')}
                style={{
                  height: 30,
                  width: 80,
                  marginTop: '1%',
                }}>

              </Image>

            </View>




          </View>
          {/* view more */}
          <TouchableOpacity onPress={() => navigation.navigate('South')}
            style={{
              height: 60,
              width: 'auto',
              alignSelf: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              // backgroundColor:'red'

            }}>


            <Text style={{
              color: '#1877F2',
              fontSize: 11,
              marginRight: '1%',
            }}>
              view more
            </Text>
            <AntDesign name='arrowright' size={12} color='#1877F2' />
          </TouchableOpacity>

          {/* </View> */}

        </ScrollView>


      </View>
      <View style={{
        height: '10%'
      }}>

      </View>
      {/* west cites */}
      <View
        style={{
          height: 220,
          width: '89%',
          alignSelf: 'center',
          marginTop: '6%',
          borderRadius: 19,
          elevation: 5,
          backgroundColor: 'white',



        }}>
        <View style={{
          height: 30,
          width: '90',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text style={{
            color: 'black',
            fontSize: 19,
            fontWeight: 'bold',
          }}>
            West Pakistan

          </Text>
        </View>
        <ScrollView horizontal={true}>
          {/* cityes */}
          <View
            style={{
              height: 180,
              width: 130,
              // backgroundColor:'red',
              marginTop: '2%',
              marginLeft: 10,
            }}>
            <View style={{
              height: 110,
              width: 130,
              alignSelf: 'center',
              alignItems: 'center',

              // backgroundColor:'black',
            }}>
              <Image source={require('../asset/jalandhar.jpg')}
                style={{
                  height: 110,
                  width: 110,
                  borderRadius: 10,
                }}>

              </Image>

            </View>
            <View style={{
              height: 30,
              width: 'auto',
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor:'black',
            }}>
              <Text style={{
                color: 'black',
                fontSize: 20,
                fontWeight: 'bold',
              }}> Jalandhar</Text>

            </View>
            <View style={{
              height: 30,
              width: 110,
              // backgroundColor:'black',
              justifyContent: 'space-between',
              // alignItems:'center',
              flexDirection: 'row',
              alignSelf: 'center',
            }}>

              <Image source={require('../asset/download.png')}
                style={{
                  height: 10,
                  width: 55,
                  marginTop: '6%',

                }}>

              </Image>
              <EvilIcons style={{
                marginBottom: 10,
              }} name='location' size={22} color='#1877F2' />


            </View>

          </View>
          {/* Balochistān */}
          <View
            style={{
              height: 180,
              width: 130,
              // backgroundColor:'red',
              marginTop: '2%',
              marginLeft: 10,
            }}>
            <View style={{
              height: 110,
              width: 130,
              alignSelf: 'center',
              alignItems: 'center',

              // backgroundColor:'black',
            }}>
              <Image source={require('../asset/blochistan.jpg')}
                style={{
                  height: 110,
                  width: 110,
                  borderRadius: 10,
                }}>

              </Image>

            </View>
            <View style={{
              height: 30,
              width: 'auto',
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor:'black',
            }}>
              <Text style={{
                color: 'black',
                fontSize: 20,
                fontWeight: 'bold',
              }}> Balochistan</Text>

            </View>
            <View style={{
              height: 30,
              width: 110,
              // backgroundColor:'black',
              justifyContent: 'space-between',
              // alignItems:'center',
              flexDirection: 'row',
              alignSelf: 'center',
            }}>

              <Image source={require('../asset/download.png')}
                style={{
                  height: 10,
                  width: 55,
                  marginTop: '6%',

                }}>

              </Image>
              <EvilIcons style={{
                marginBottom: 10,
              }} name='location' size={22} color='#1877F2' />


            </View>

          </View>
          {/* Faisalabad */}
          <View
            style={{
              height: 180,
              width: 130,
              // backgroundColor:'red',
              marginTop: '2%',
              marginLeft: 10,
            }}>
            <View style={{
              height: 110,
              width: 130,
              alignSelf: 'center',
              alignItems: 'center',

              // backgroundColor:'black',
            }}>
              <Image source={require('../asset/Faisalabad.jpg')}
                style={{
                  height: 110,
                  width: 110,
                  borderRadius: 10,
                }}>

              </Image>

            </View>
            <View style={{
              height: 30,
              width: 'auto',
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor:'black',
            }}>
              <Text style={{
                color: 'black',
                fontSize: 20,
                fontWeight: 'bold',
              }}> Faisalabad </Text>

            </View>
            <View style={{
              height: 30,
              width: 110,
              // backgroundColor:'black',
              justifyContent: 'space-between',
              // alignItems:'center',
              flexDirection: 'row',
              alignSelf: 'center',
            }}>

              <Image source={require('../asset/download.png')}
                style={{
                  height: 10,
                  width: 55,
                  marginTop: '6%',

                }}>

              </Image>
              <EvilIcons style={{
                marginBottom: 10,
              }} name='location' size={22} color='#1877F2' />


            </View>

          </View>
          {/* Gujrat */}
          <View
            style={{
              height: 180,
              width: 130,
              // backgroundColor:'red',
              marginTop: '2%',
              marginLeft: 10,
            }}>
            <View style={{
              height: 110,
              width: 130,
              alignSelf: 'center',
              alignItems: 'center',

              // backgroundColor:'black',
            }}>
              <Image source={require('../asset/gujrat.jpg')}
                style={{
                  height: 110,
                  width: 110,
                  borderRadius: 10,
                }}>

              </Image>

            </View>
            <View style={{
              height: 30,
              width: 'auto',
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor:'black',
            }}>
              <Text style={{
                color: 'black',
                fontSize: 20,
                fontWeight: 'bold',
              }}> Gujrat </Text>

            </View>
            <View style={{
              height: 30,
              width: 110,
              // backgroundColor:'black',
              justifyContent: 'space-between',
              // alignItems:'center',
              flexDirection: 'row',
              alignSelf: 'center',
            }}>

              <Image source={require('../asset/download.png')}
                style={{
                  height: 10,
                  width: 55,
                  marginTop: '6%',

                }}>

              </Image>
              <EvilIcons style={{
                marginBottom: 10,
              }} name='location' size={22} color='#1877F2' />


            </View>

          </View>
          {/* krachi */}
          <View
            style={{
              height: 180,
              width: 130,
              // backgroundColor:'red',
              marginTop: '2%',
              marginLeft: 10,
            }}>
            <View style={{
              height: 110,
              width: 130,
              alignSelf: 'center',
              alignItems: 'center',

              // backgroundColor:'black',
            }}>
              <Image source={require('../asset/krachii.jpg')}
                style={{
                  height: 110,
                  width: 110,
                  borderRadius: 10,
                }}>

              </Image>

            </View>
            <View style={{
              height: 30,
              width: 'auto',
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor:'black',
            }}>
              <Text style={{
                color: 'black',
                fontSize: 20,
                fontWeight: 'bold',
              }}> Krachi </Text>

            </View>
            <View style={{
              height: 30,
              width: 110,
              // backgroundColor:'black',
              justifyContent: 'space-between',
              // alignItems:'center',
              flexDirection: 'row',
              alignSelf: 'center',
            }}>

              <Image source={require('../asset/download.png')}
                style={{
                  height: 10,
                  width: 55,
                  marginTop: '6%',

                }}>

              </Image>
              <EvilIcons style={{
                marginBottom: 10,
              }} name='location' size={22} color='#1877F2' />


            </View>

          </View>
          <TouchableOpacity onPress={() => navigation.navigate('West')} style={{
            height: 60,
            width: 70,
            alignSelf: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',

          }}>
            <Text style={{
              color: '#1877F2',
              fontSize: 11,
              marginRight: '1%',
            }}>
              view more
            </Text>
            <AntDesign name='arrowright' size={12} color='#1877F2' />

          </TouchableOpacity>


        </ScrollView>


      </View>

    </View>
  )
}

export default Home