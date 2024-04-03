import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { } from 'react-native-gesture-handler'

const LinkingData = () => {

    const [weather, setWeather] = useState([])
    const fetchData = async () => {
        const Data = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=lahore&appid=fa98d893333b0898f01f963d7f7f1b9c&units=metric')
        const json = await Data.json();
        setWeather(json);
        console.log(fetchData, JSON.stringify(json));
    }
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#008080',

        }}>

            <View
                // onPress={console.log(setWeather,DatA)}
                style={{
                    height: '7%',
                    width: '50%',
                    elevation: 5,
                    backgroundColor: '#008080',
                    alignSelf: 'center',
                    marginVertical: '10%',
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Text style={{
                    color: 'white',
                    fontSize: 20,
                    fontWeight: 'bold',
                }}>
                    LOACTAION
                </Text>

            </View>
            <FlatList
                data={weather.list}
                renderItem={({ item,  }) => (
                    <View>
                        <View style={{
                            height: 450,
                            // padding:190,
                            borderWidth: 5,
                            width: 330,
                            borderRadius: 24,
                            alignSelf: 'center',
                            borderColor: 'white',
                            // backgroundColor:'red'

                        }}>
                            <View style={{
                                height: 60,
                                width: 'auto',
                                alignSelf: 'center',
                                justifyContent: 'center',
                                alignItems: 'center',
                                // backgroundColor:'green'
                            }}>

                                <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'white' }} >{item.weather[0].discription} </Text>
                            </View>
                            <View style={{
                                height: 220,
                                width: 220,
                                alignSelf: 'center',
                                justifyContent: 'center',
                                alignItems: 'center',
                                // backgroundColor:'red'
                            }}>

                                <Text style={{ fontSize: 84, fontWeight: 'bold', color: 'white' }} >{item.main.temp} </Text>
                            </View>
                            <View style={{
                                height: 60,
                                width: 'auto',
                                alignSelf: 'center',
                                justifyContent: 'center',
                                alignItems: 'center',
                                // backgroundColor:'green'
                            }}>

                                <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'white' }} >{item.weather[0].discription}  </Text>
                            </View>

                        </View>
                    </View>
                )} />


        </View>
    )
}

export default LinkingData