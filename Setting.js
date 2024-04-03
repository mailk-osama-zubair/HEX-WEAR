import { View, Text,Button,Image ,StatusBar,ScrollView, RefreshControl,TurboModuleRegistry, FlatList} from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from'react-native-vector-icons/AntDesign'
import FontAwesome6Brands from 'react-native-vector-icons/FontAwesome6'
const Setting = ({navigation}) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  const Data=[
    {
       Image:require('../asset/keys.png'),
      
    },
  ]
  return (
    <View style={{
      flex:1,
      backgroundColor:'black',
    }}>
      <StatusBar barStyle={'default'} backgroundColor={'transparent'} translucent={true}/>
      <View style={{
        height:'12%',
        width:'100%',
     
        elevation:5,
        backgroundColor:'#36454F',
        
      }}>
        {/* top bar */}
        <View style={{
         height:'47%',
         width:'96%',
         marginTop:'9%',
        //  marginLeft:'3%',
         justifyContent:'space-between',
         alignSelf:'center',
         alignItems:'center',
           flexDirection:'row',

        //  backgroundColor:'white',
        }}>
          <View style={{
            height:40,
            width:120,
            justifyContent:'space-between',
            alignSelf:'center',
            alignItems:'center',
          
            flexDirection:'row',

          }}>

            <Feather onPress={()=>navigation.navigate('Chat')} name="arrow-left" size={19} color="white"/>
   
          
          <Text style={{
            fontSize:23,
            color:'white',
            fontWeight:'500',

          }}>
            Settings
          </Text>

          </View>
          <AntDesign  name="search1" size={19} color="white" />
        </View>
      </View>
      <View style={{
        height:697,
        width:'100%',
        // backgroundColor:'red',
      }}> 
      <ScrollView 
      style={{
        height:'auto',
        width:'100%',
      }}
      showsVerticalScrollIndicator={false}>
        {/* Profile */}
        <View style={{
          height:80,
          width:350,
          alignSelf:'center',
          alignItems:'center',
          justifyContent:'space-between',
          // backgroundColor:'red',
          flexDirection:'row',
          borderWidth:.3,
          borderBlockEndColor:'grey',

        }}>
          <View  
          style={{
            height:67,
            width:260,
            flexDirection:'row',
            // backgroundColor:'blue',
            justifyContent:'space-between',
             alignSelf:'center',
             marginRight:10,
          }}>

          
          <View style={{
            height:75,
            width:85,
            justifyContent:'center',
            alignItems:'center',
            alignSelf:'center',
            // backgroundColor:'yellow',
          }}>

          
          <Image source={require('../asset/hackerc.png')}
          style={{
            height:65,
            width:65,
            borderRadius:100,
          
          }}>

          </Image>
          </View>
         <View style={{
          height:70,
          width:180,
          // backgroundColor:'white',
           alignSelf:'center',
           justifyContent:'space-around',
          
         }} >
          <Text style={{
            fontSize:22,
            fontWeight:'500',
            color:'white',
          }}>
            Malik
          </Text>
          <Text style={{
            fontSize:16,
            fontWeight:'400',
            color:'white',
          }}>
            Battey about to die.
          </Text>

         </View>
          
         </View>
         <AntDesign name="qrcode" size={24} color='green'/>
        </View>
        {/* setting options */}
        {/* accounts */}
      <View style={{
        height:88,
        width:'98%',
       flexDirection:'row',
      //  backgroundColor:'white',
         alignSelf:'center',
        //  marginTop:'4%',
      }}>
        {/* key view */}
        <View style={{
          height:65,
          width:60,
          justifyContent:'center',
          alignItems:'center',
        }}> 
        <Image source={require('../asset/keys.png')}
        style={{
          height:24,
          width:24,
        }}>
        </Image>

        </View>
        {/* text view */}
        <View
        style={{
          height:58,
          width:'59%',
          alignSelf:'center',
          marginLeft:'3%',

          justifyContent:'space-between',
        }}>
          <Text style={{
            fontSize:17,
            fontWeight:'400',
            color:'white',
          }}>
            Accounts
          </Text>
          <Text style={{
            fontSize:14,
            color:'grey',
          }}>
            Security notification, chnage number
          </Text>
        </View>
        
      </View>
      {/* privacy  */}
      <View style={{
        height:80,
        width:'98%',
       flexDirection:'row',
         alignSelf:'center',
        //  marginTop:'2%',
      }}>
        {/* key view */}
        <View style={{
          height:65,
          width:60,
          justifyContent:'center',
          alignItems:'center',
        }}> 
        <Image source={require('../asset/security.png')}
        style={{
          height:23,
          width:23,
        }}>
        </Image>

        </View>
        {/* text view */}
        <View
        style={{
          height:58,
          width:'59%',
          alignSelf:'center',
          marginLeft:'3%',

          justifyContent:'space-between',
        }}>
          <Text style={{
            fontSize:17,
            fontWeight:'400',
            color:'white',
          }}>
            Privacy
          </Text>
          <Text style={{
            fontSize:14,
            color:'grey',
          }}>
            Block contact,disappearing, message
          </Text>
        </View>
        
      </View>
      {/* avtar */}
      <View 
      style={{
        height:80,
        width:'98%',
       flexDirection:'row',
         alignSelf:'center',
        //  marginTop:'2%',
      }}>
        {/* key view */}
        <View style={{
          height:65,
          width:60,
          justifyContent:'center',
          alignItems:'center',
        }}> 
        <Image source={require('../asset/user.png')}
        style={{
          height:23,
          width:23,
        }}>
        </Image>

        </View>
        {/* text view */}
        <View
        style={{
          height:45,
          width:'59%',
          alignSelf:'center',
          marginLeft:'3%',

          justifyContent:'space-between',
        }}>
          <Text style={{
            fontSize:17,
            fontWeight:'400',
            color:'white',
          }}>
            Avatar
          </Text>
          <Text style={{
            fontSize:14,
            color:'grey',
          }}>
            Create,edit,profile photo
          </Text>
        </View>
        
      </View>
      {/* chats */}
      <View
       style={{
        height:80,
        width:'98%',
       flexDirection:'row',
         alignSelf:'center',
        //  marginTop:'2%',
      }}>
        {/* key view */}
        <View style={{
          height:65,
          width:60,
          justifyContent:'center',
          alignItems:'center',
        }}> 
        <Image source={require('../asset/chat.png')}
        style={{
          height:23,
          width:23,
        }}>
        </Image>

        </View>
        {/* text view */}
        <View
        style={{
          height:45,
          width:'61%',
          alignSelf:'center',
          marginLeft:'3%',

          justifyContent:'space-between',
        }}>
          <Text style={{
            fontSize:17,
            fontWeight:'400',
            color:'white',
          }}>
           Chats
          </Text>
          <Text style={{
            fontSize:14,
            color:'grey',
          }}>
           Thems,wallpapers,chat history
          </Text>
        </View>
        
      </View>
      {/* notification */}
      <View 
      style={{
       height:80,
        width:'98%',
       flexDirection:'row',
         alignSelf:'center',
        //  marginTop:'2%',
      }}>
        {/* key view */}
        <View style={{
          height:65,
          width:60,
          justifyContent:'center',
          alignItems:'center',
        }}> 
        <Image source={require('../asset/notification.png')}
        style={{
          height:23,
          width:23,
        }}>
        </Image>

        </View>
        {/* text view */}
        <View
        style={{
          height:45,
          width:'59%',
          alignSelf:'center',
          marginLeft:'3%',

          justifyContent:'space-between',
        }}>
          <Text style={{
            fontSize:17,
            fontWeight:'400',
            color:'white',
          }}>
            Notification
          </Text>
          <Text style={{
            fontSize:14,
            color:'grey',
          }}>
            Message,group&call tones
          </Text>
        </View>
        
      </View>
      {/* storage */}
      <View 
      style={{
        height:80,
        width:'98%',
       flexDirection:'row',
         alignSelf:'center',
        //  marginTop:'2%',
      }}>
        {/* key view */}
        <View style={{
          height:65,
          width:60,
          justifyContent:'center',
          alignItems:'center',
        }}> 
        <Image source={require('../asset/storage.png')}
        style={{
          height:23,
          width:23,
        }}>
        </Image>

        </View>
        {/* text view */}
        <View
        style={{
          height:45,
          width:'60%',
          alignSelf:'center',
          marginLeft:'3%',

          justifyContent:'space-between',
        }}>
          <Text style={{
            fontSize:17,
            fontWeight:'400',
            color:'white',
          }}>
            Storage
          </Text>
          <Text style={{
            fontSize:14,
            color:'grey',
          }}>
            Network usage,auto-download
          </Text>
        </View>
        
      </View>
      {/* app language */}
      <View 
      style={{
        height:80,
        width:'98%',
       flexDirection:'row',
         alignSelf:'center',
        //  marginTop:'2%',
      }}>
        {/* key view */}
        <View style={{
          height:65,
          width:60,
          justifyContent:'center',
          alignItems:'center',
        }}> 
        <Image source={require('../asset/languages.png')}
        style={{
          height:23,
          width:23,
        }}>
        </Image>

        </View>
        {/* text view */}
        <View
        style={{
          height:60,
          width:'59%',
          alignSelf:'center',
          marginLeft:'2%',

          justifyContent:'space-between',
        }}>
          <Text style={{
            fontSize:17,
            fontWeight:'400',
            color:'white',
          }}>
            App language
          </Text>
          <Text style={{
            fontSize:14,
            color:'grey',
          }}>
            Security notification, chnage number
          </Text>
        </View>
        
      </View>
      {/* help */}
      <View
       style={{
        height:80,
        width:'98%',
       flexDirection:'row',
         alignSelf:'center',
        // marginTop:'2%',
      }}>
        {/* key view */}
        <View style={{
          height:65,
          width:60,
          justifyContent:'center',
          alignItems:'center',
        }}> 
        <Image source={require('../asset/help.png')}
        style={{
          height:23,
          width:23,
        }}>
        </Image>

        </View>
        {/* text view */}
        <View
        style={{
          height:45,
          width:'69%',
          alignSelf:'center',
          marginLeft:'3%',

          justifyContent:'space-between',
        }}>
          <Text style={{
            fontSize:17,
            fontWeight:'400',
            color:'white',
          }}>
            Help
          </Text>
          <Text style={{
            fontSize:14,
            color:'grey',
          }}>
            Help center, contact us, privacy policy
          </Text>
        </View>
        
      </View>
      {/* invite friend */}
      <View 
      style={{
        height:80,
        width:'98%',
       flexDirection:'row',
         alignSelf:'center',
        marginTop:'2%',
      }}>
        {/* key view */}
        <View style={{
          height:65,
          width:60,
          justifyContent:'center',
          alignItems:'center',
        }}> 
        <Image source={require('../asset/link.png')}
        style={{
          height:20,
          width:20,
        }}>
        </Image>

        </View>
        {/* text view */}
        <View
        style={{
          height:58,
          width:'59%',
          alignSelf:'center',
          marginLeft:'3%',

          justifyContent:'space-between',
        }}>
          <Text style={{
            fontSize:17,
            fontWeight:'400',
            color:'white',
          }}>
            Invite friends
          </Text>
          {/* <Text style={{
            fontSize:14,
            color:'grey',
          }}>
            Security notification, chnage number
          </Text> */}
        </View>
        
      </View>
      <View style={{
        height:50,
        width:'90%',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'white',
      }}>
       <Text style={{
        color:'grey',
       }}>
        from
       </Text>
       <View style={{
        flexDirection:'row',
        // justifyContent:'center',
        alignItems:'center',
       }}>
        <FontAwesome6Brands name='meta' size={12} color='white' />
         <Text style={{
        color:'white',
        marginLeft:'1%',
       }}>
        Meta
       </Text>
       

       </View>

      </View>
      <RefreshControl style={{
        
      }} refreshing={refreshing} onRefresh={onRefresh} />
      </ScrollView>
      </View>
      {/* <Text>Setting</Text> */}
    </View>
  )
}

export default Setting