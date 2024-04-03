import { View, Text } from 'react-native'
import React from 'react'

const Pinput = ({navigation}) => {
  return (
    <View>
      <Text onPress={()=> navigation.navigate('Login')}>Passwordi</Text>
    </View>
  )
}

export default Pinput