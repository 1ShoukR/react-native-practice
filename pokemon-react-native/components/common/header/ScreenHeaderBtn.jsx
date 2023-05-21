import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'
import { icons } from '../../../constants'

const ScreenHeaderBtn = ({ iconUrl, dimension }) => {
  const handlePress = () => {
    console.log('handlePress')
  }
	return (
		<TouchableOpacity onPress={handlePress} style={styles.btnContainer}>
			<Image source={iconUrl} resizeMode="cover" style={styles.btnImg(dimension)}/>
		</TouchableOpacity>
	);
};

export default ScreenHeaderBtn