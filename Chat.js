import { View, Text ,Button,StatusBar,Image,FlatList,TouchableOpacity} from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
const Chat= ({navigation}) => {
 
    const Data=[
      { 
        image:require('../asset/user.png'),
        name:'Family',
        time:'12:13 am'
      },
      { 
        image:require('../asset/user.png'),
        name:'Malik Zubair',
        time:'12:13 am'
      },
      { 
        image:require('../asset/user.png'),
        name:'Usama',
        time:'12:01 am'
      },
      { 
        image:require('../asset/user.png'),
        name:'kamran',
        time:'12:01 am'
      },
      { 
        image:require('../asset/user.png'),
        name:'Rizwan',
        time:'12:01 am'
      },
      { 
        image:require('../asset/user.png'),
        name:'Mazari',
        time:'12:01 am'
      },
      { 
        image:require('../asset/user.png'),
        name:'Kashif',
        time:'12:01 am'
      },
      { 
        image:require('../asset/user.png'),
        name:'Crush',
        time:'12:01 am'
      },
      { 
        image:require('../asset/user.png'),
        name:'Deadline',
        time:'12:01 am'
      },
      { 
        image:require('../asset/user.png'),
        name:'Papa G',
        time:'12:01 am'
      },
      { 
        image:require('../asset/user.png'),
        name:'Jannat',
        time:'12:01 am'
      },
      { 
        image:require('../asset/user.png'),
        name:'Api',
        time:'12:01 am'
      },
      { 
        image:require('../asset/user.png'),
        name:'Rehab Api',
        time:'12:01 am'
      },
      { 
        image:require('../asset/user.png'),
        name:'Malik',
        time:'12:13 am'
      },
      { 
        image:require('../asset/user.png'),
        name:'Usama',
        time:'12:01 am'
      },
      { 
        image:require('../asset/user.png'),
        name:'kamran',
        time:'12:01 am'
      },
      { 
        image:require('../asset/user.png'),
        name:'Rizwan',
        time:'12:01 am'
      },
      { 
        image:require('../asset/user.png'),
        name:'Mazari',
        time:'12:01 am'
      },
      { 
        image:require('../asset/user.png'),
        name:'Kashif',
        time:'12:01 am'
      },
      { 
        image:require('../asset/user.png'),
        name:'Crush',
        time:'12:01 am'
      },
      { 
        image:require('../asset/user.png'),
        name:'Deadline',
        time:'12:01 am'
      },
      { 
        image:require('../asset/user.png'),
        name:'Papa G',
        time:'12:01 am'
      },
      { 
        image:require('../asset/user.png'),
        name:'Jannat',
        time:'12:01 am'
      },
      { 
        image:require('../asset/user.png'),
        name:'Api',
        time:'12:01 am'
      },
      { 
        image:require('../asset/user.png'),
        name:'Rehab Api',
        time:'12:01 am'
      },
    ]
    return (
      <View style={{
        flex:1,
        backgroundColor:'#050301',
      }}>
      <StatusBar barStyle={'default'} backgroundColor={'transparent'} translucent={true}/>
    <View style={{
      height:'13%',
      width:'100%',
      backgroundColor:'#36454F',
    }}>
  
   
     <View style={{
      height:'40%',
      width:'96%',
      justifyContent:'space-between',
      alignSelf:'center',
      flexDirection:'row',
       marginTop:'8%',
       alignItems:'center',
      
     }}>
      <Text style={{
        fontSize:24,
        fontWeight:'500',
        color:'white',
      }}>
      Malik
      </Text>
      <View
      style={{
        height:20,
        width:'30%',
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
            }}>
  
      
      <Image source={require('../asset/cameraf.png')}
      style={{
        height:20,
        width:20,
  
      }}>
  
      </Image>
      <Image source={require('../asset/searchf.png')}
      style={{
        height:20,
        width:20,
  
      }}>
  
      </Image>
      <TouchableOpacity>
      {/* <Button title='Update' onPress={()=>navigation.navigate('Update')}/> */}
      {/* <Image  source={require('../asset/dots.png')}
      style={{
        height:20,
        width:20,
      }} onPress={()=>navigation.navigate('Update')}/> */}
  
  <Entypo onPress={()=>navigation.navigate('Setting')} name="dots-three-vertical" size={18} color="white"/>
      </TouchableOpacity>
      </View>
      
        
      
     </View>
     <View style={{
      height:'30%',
      width:'96%',
      justifyContent:'space-between',
      alignItems:'flex-end',
       alignSelf:'center',
       flexDirection:'row',
      
     }}>
   <Text onPress={()=> navigation.navigate('Chats') } style={{
     fontSize:15,
     fontWeight:'600',
     color:'green',
   }}>
   Chats
   </Text>
   <Text  onPress={()=> navigation.navigate('Update') } style={{
    fontSize:15,
    fontWeight:'600',
    color:'#fff',
   }}>
   Update
   </Text>
   <Text onPress={()=> navigation.navigate('Calls') } style={{
     fontSize:15,
     fontWeight:'600',
     color:'#fff',
   }}>
   Calls
   </Text>
     </View>
     </View>
     <FlatList 
     data={Data}
    //  onRefresh={() => this.onRefresh()}
    showsVerticalScrollIndicator={false}
     renderItem={({item}) =>(
  <View>
    <View style={{
      width:'94%',
      alignSelf:'center',
      justifyContent:'space-between',
      flexDirection:'row',
      alignItems:'center',
      marginTop:'3%',
      // borderWidth:.1,
      borderColor:'#808080',
      borderRadius:7,  }}>
    <View
    style={{
      justifyContent:'space-between',
      height:50,
      width:'auto',
      alignItems:'center',
      flexDirection:'row',
    
    }}>
      
   <Image source={item.image} style={{
    height:40,
    width:40,

   }}>
  
   </Image>
   <Text style={{
    fontSize:19,
    marginLeft:'7%',
    color:'white',
    fontWeight:'bold',
   }}>{item.name}</Text>
   </View>
   <Text style={{
  
   }}> {item.time}</Text>
   </View>
   </View>
     )
    }
    />
    {/* <Button title='Update' onPress={()=>navigation.navigate('Update')}/> */}
         </View> 
    )
  }

export default Chat