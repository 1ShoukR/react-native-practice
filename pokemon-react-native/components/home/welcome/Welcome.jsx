import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router'


import styles from './welcome.style'
import {icons, SIZES, COLORS, FONTS} from '../../../constants'

const Welcome = () => {
  const router = useRouter()
  return (
    <View>
      <View styles={styles.container}>
        <Text style={styles.userName}>Hello Rahmin</Text>
        <Text style={styles.welcomeMessage}>Welcome to your Pokedex</Text>
      </View>
    </View>
  )
}

export default Welcome