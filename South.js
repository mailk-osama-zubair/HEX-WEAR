import { View, Text, StatusBar, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'


const South = ({navigation}) => {
  const City=[
    { 
        image:require('../asset/ryk.jpg'),
        ryk:'Rahim Yar Khan',
        rating:require('../asset/rating.png'),
        location:require('../asset/location.png')

    },
    {
        image:require('../asset/bwp.jpg'),
        ryk:'Bahawalpur',
        rating:require('../asset/rating.png'),
        location:require('../asset/location.png')

    },
    {
        image:require('../asset/MLT.jpg'),
        ryk:'Multan',
        rating:require('../asset/rating.png'),
        location:require('../asset/location.png')

    },
    {
        image:require('../asset/lahor.jpg'),
        ryk:'Lahore',
        rating:require('../asset/rating.png'),
        location:require('../asset/location.png')

    },
    {
        image:require('../asset/isb.jpg'),
        ryk:'IslamaBad',
        rating:require('../asset/rating.png'),
        location:require('../asset/location.png')

    },
    {
        image:require('../asset/murray2.jpg'),
        ryk:'Murray',
        rating:require('../asset/rating.png'),
        location:require('../asset/location.png')

    },
    {
        image:require('../asset/kaghanvalley.jpg'),
        ryk:'Kaghan-Valley',
        rating:require('../asset/rating.png'),
        location:require('../asset/location.png')

    },
    {
        image:require('../asset/Bhakkar.jpg'),
        ryk:'Bhakar',
        rating:require('../asset/rating.png'),
        location:require('../asset/location.png')

    },
    {
        image:require('../asset/blochistan.jpg'),
        ryk:'Blochis-Tan',
        rating:require('../asset/rating.png'),
        location:require('../asset/location.png')

    },
    {
        image:require('../asset/bhngr.jpg'),
        ryk:'Bhangar',
        rating:require('../asset/rating.png'),
        location:require('../asset/location.png')

    },
    {
        image:require('../asset/burewala.jpg'),
        ryk:'Bhrewala',
        rating:require('../asset/rating.png'),
        location:require('../asset/location.png')

    },
    {
        image:require('../asset/dgkhan.jpg'),
        ryk:'DG-Khan',
        rating:require('../asset/rating.png'),
        location:require('../asset/location.png')

    },
    {
        image:require('../asset/changamanga.jpg'),
        ryk:'Chaga-Manga',
        rating:require('../asset/rating.png'),
        location:require('../asset/location.png')

    },
    {
        image:require('../asset/layyah.jpg'),
        ryk:'Layyah',
        rating:require('../asset/rating.png'),
        location:require('../asset/location.png')

    },
    {
        image:require('../asset/muzaffarghar.jpg'),
        ryk:'Muzaffarghar',
        rating:require('../asset/rating.png'),
        location:require('../asset/location.png')

    },
    {
        image:require('../asset/naran.jpg'),
        ryk:'Naran-Valley',
        rating:require('../asset/rating.png'),
        location:require('../asset/location.png')

    },
    {
        image:require('../asset/sawat.jpg'),
        ryk:'Sawat',
        rating:require('../asset/rating.png'),
        location:require('../asset/location.png')

    },
    {
        image:require('../asset/kaghanvalley.jpg'),
        ryk:'Kaghan-Valley',
        rating:require('../asset/rating.png'),
        location:require('../asset/location.png')

    },
    {
        image:require('../asset/Bhakkar.jpg'),
        ryk:'Bhakar',
        rating:require('../asset/rating.png'),
        location:require('../asset/location.png')

    },
    {
        image:require('../asset/blochistan.jpg'),
        ryk:'Blochis-Tan',
        rating:require('../asset/rating.png'),
        location:require('../asset/location.png')

    },
    {
        image:require('../asset/bhngr.jpg'),
        ryk:'Bhangar',
        rating:require('../asset/rating.png'),
        location:require('../asset/location.png')

    },
    {
        image:require('../asset/burewala.jpg'),
        ryk:'Bhrewala',
        rating:require('../asset/rating.png'),
        location:require('../asset/location.png')

    },
    {
        image:require('../asset/dgkhan.jpg'),
        ryk:'DG-Khan',
        rating:require('../asset/rating.png'),
        location:require('../asset/location.png')

    },
    {
        image:require('../asset/changamanga.jpg'),
        ryk:'Chaga-Manga',
        rating:require('../asset/rating.png'),
        location:require('../asset/location.png')

    },
    {
        image:require('../asset/layyah.jpg'),
        ryk:'Layyah',
        rating:require('../asset/rating.png'),
        location:require('../asset/location.png')

    },
    {
        image:require('../asset/muzaffarghar.jpg'),
        ryk:'Muzaffarghar',
        rating:require('../asset/rating.png'),
        location:require('../asset/location.png')

    },
    {
        image:require('../asset/naran.jpg'),
        ryk:'Naran-Valley',
        rating:require('../asset/rating.png'),
        location:require('../asset/location.png')

    },
    {
        image:require('../asset/sawat.jpg'),
        ryk:'Sawat',
        rating:require('../asset/rating.png'),
        location:require('../asset/location.png')

    },
    {
        image:require('../asset/sawat.jpg'),
        ryk:'ISB',
        rating:require('../asset/rating.png'),
        location:require('../asset/location.png')

    },




  ]

  
  return (
    <View style={{
        flex:1,
        borderColor:'white',
    }}>
        <StatusBar barStyle={'default'} backgroundColor={'transparent'} translucent={false}/>
        <View style={{
            height:50,
            width:'96%',
            backgroundColor:'white',
            elevation:3,
            marginTop:'2%',
            borderRadius:100,
            alignSelf:'center',
        
        }}>
            <View style={{
                height:50,
                width:'48%',
                justifyContent:'space-around',
                flexDirection:'row',
                // backgroundColor:'red',
                alignItems:'center'

            }}>

        <TouchableOpacity> 
         <AntDesign onPress={()=>navigation.navigate('Home')} name='arrowleft' size={22} color='black'/>
         </TouchableOpacity>   
        <Text style={{
            fontSize:18,
            fontWeight:'bold',
            color:'black',
        }}>
            South Pakistan
        </Text>
        </View>
    

        </View>
       
       <FlatList 
       data={City}
       contentContainerStyle={{
        // flexWrap: 'wrap'
        flexDirection: 'column',

        
    }}
       numColumns={4}
    
       renderItem={({item}) =>(
        <View style={{
            // width:'98%',
            // marginRight:'.5%',
            // marginLeft:'.5%',
            marginTop:'3%',
            alignSelf:'center',

            // backgroundColor:'red',
            
        }}>
            <View style={{
                height:150,
                width:90,
                elevation:5,
                // borderWidth:1,
                backgroundColor:'white',
                // alignSelf:'center',
                justifyContent:'space-around',
                alignItems:'center',
            }}>
                <Image source={item.image} style={{
                  height:110,
                     width:80,

                }}>
  
                    </Image>
                    <Text style={{
                        fontSize:11,
                        fontWeight:'500',
                        color:'black',
                    }}>{item.ryk}</Text>
                    <View style={{
                        height:11,
                        width:80,
                        // backgroundColor:'red',
                        justifyContent:'space-between',
                        alignItems:'center',
                        flexDirection:'row',
                    }}>
                        <Image source={item.rating} style={{
                            height:13,
                            width:29,                       
                             }}>

                        </Image>
                        <Image source={item.location} style={{
                            height:16,
                            width:16,
                        }}>

                        </Image>

                    </View>
                </View>

            </View>
       )}/>
      
    </View>
  )
}

export default South