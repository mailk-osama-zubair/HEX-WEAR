import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
// import {  } from 'react-native-gesture-handler'
import AntDesign from 'react-native-vector-icons/AntDesign'
import RenderIcon from './Component/RenderIcon';
import { sin } from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';
const FrontD = ({ navigation }) => {
    const [user, setUser] = useState('');
    const handelValue = (text) => {
        setUser(text);
    }
    const handleSubmit = async () => {
        const store = { user: user };
        await AsyncStorage.setItem('name', JSON.stringify(store))
        console.log(store)

    }
    const getData = async () => {
        const result = await AsyncStorage.getItem('name', JSON.parse(store));
        console.log(result);
    }
    useEffect(() => {
        getData();
       
    }, []);
return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
    }}>
        <Text style={{
            paddingLeft: 17,
        }}>Continue with your good Name
        </Text>
        <TextInput style={styles.input}
            placeholder='Ener Name'
            placeholderTextColor={'gry'}
            value={user}
            onChangeText={handelValue}
        />
        {user.trim().length >= 3 ?
            <RenderIcon IconeName={'arrowright'} color={'black'} size={49} onPress={() => { handleSubmit, navigation.navigate('HomeD') }} /> : null}

    </View>
)
}
const styles = StyleSheet.create({
    input: {
        // maxWidth:.5,
        borderWidth: .5,
        padding: 9,
        marginTop: '3%',
        fontSize: 15,
        width: '90%',
        justifyContent: 'center',
        alignSelf: 'center'
    }
})

export default FrontD