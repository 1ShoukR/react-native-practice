import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { handlePress } from '../../../actions/ScreenHeaderBtnActions'
import { fetchPokeomon } from '../../../actions/fetchPokemon'

import styles from './screenheader.style'
import { icons } from '../../../constants'

const ScreenHeaderBtn = ({ iconUrl, dimension }) => {
	const handleLeftSideNav = () => {

	}
	return (
		<TouchableOpacity onPress={handleLeftSideNav} style={styles.btnContainer}>
			<Image source={iconUrl} resizeMode="cover" style={styles.btnImg(dimension)}/>
		</TouchableOpacity>
	);
};

export default ScreenHeaderBtn