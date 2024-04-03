import { View, Text } from 'react-native'
import React from 'react'

const Ling = ({navigation}) => {
  return (
    <View>
      <Text onPress={()=>navigation.navigate('Sngup')}>SignUp</Text>
    </View>
  )
}

export default Ling