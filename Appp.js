// // In App.js in a new project
import *as React from 'react';
import {View,Text, Button} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './Screen/Login';
import Forgetpassword from './Screen/Forgetpassword';
import Home from './Screen/Home';
import Swapps from './Screen/Swapps';
import Usignup from './Screen/Usignup';
import Rsend from './Screen/Rsend';
import Rset from './Screen/Rset';
import Pinput from './Screen/Pinput';
import Suwg from './Screen/Suwg';
import Suwf from './Screen/Suwf';
import Suwt from './Screen/Suwt';
import Profile from './Screen/Profile';
import South from './Screen/South';
import West from './Screen/West';


const Stack= createNativeStackNavigator();
const Tab = createBottomTabNavigator(); 
function ButtomTab(){
  return(
    <Tab.Navigator screenOptions={{
      headerShown:false,
    }}> 
    <Tab.Screen name='Home' component={Home}/>
    <Tab.Screen name='Profile' component={Profile}/>
    </Tab.Navigator>

  )
}
function App() {
  return(
    <NavigationContainer> 
      <Stack.Navigator 
     screenOptions={{
      headerShown:false,
     }}
      >

        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Suwt' component={Suwt}/>
        <Stack.Screen name='Suwf' component={Suwf}/>
        <Stack.Screen name='Suwg' component={Suwg}/>
        <Stack.Screen name='Pinput' component={Pinput}/>
        <Stack.Screen name='Rsend' component={Rsend}/>
        <Stack.Screen name='Rset' component={Rset}/>
        <Stack.Screen name='Usignup' component={Usignup}/>
       <Stack.Screen name='Swapps' component={Swapps}/>
        <Stack.Screen name='Home' component={ButtomTab}/>
        <Stack.Screen name='West' component={West}/>
        <Stack.Screen name='South' component={South}/>

        <Stack.Screen name="Forgetpassword" component={Forgetpassword}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

// In App.js in a new project

// import * as React from 'react';
// import * as React from 'react';
// import { View, Text, Button} from 'react-native';
// // import { NavigationContainer } from '@react-navigation/native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Chat from './Screen/Chat';
// import Setting from './Screen/Setting';
// import Update from './Screen/Update';
// import Calls from './Screen/Calls';
// const Stack = createNativeStackNavigator();
// function App() {
  
//   return (
//     <NavigationContainer>
//       <Stack.Navigator 
//       screenOptions={{
        
//         headerShown: false,
        
//       }}
//       >
//       <Stack.Screen name="Chat" component={Chat} 
//       />
//       <Stack.Screen name='Calls' component={Calls}/>
//      <Stack.Screen name="Update" component={Update}/>
//         <Stack.Screen name="Setting" component={Setting}/>
//         </Stack.Navigator>
        
//     </NavigationContainer>
//   );
// }

// export default App;

