import { View, Text, TextInput, TouchableOpacity, Image, FlatList, Alert } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { fetchPokemon } from '../../../actions/fetchPokemon';

import styles from './welcome.style';
import { icons, SIZES, COLORS, FONTS } from '../../../constants';
import {ContentLoader, Bullets} from 'react-native-easy-content-loader';

const Welcome = () => {
	const router = useRouter();
	const [searchPokemon, setSearchPokemon] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const handlePokemonSearchPress = async () => {
		const lowercaseSearchPokemon = searchPokemon.toLowerCase();
		setIsLoading(true);

		try {
			console.log('Before await');
			const data = await fetchPokemon(lowercaseSearchPokemon);
			console.log('After await');
			setIsLoading(false);
			console.log('data', data);
		} catch (error) {
			setIsLoading(false);
			console.log(error);
			Alert.alert('Error', 'Pokemon not found', [
				{
					text: 'OK',
					onPress: () => console.log('OK Pressed'),
				},
			]);
		}
	};

	return (
		<View>
			<View style={styles.container}>
				<Text style={styles.userName}>Hello Rahmin</Text>
				<Text style={styles.welcomeMessage}>Welcome to your Pokedex</Text>
			</View>
			<View style={styles.searchContainer}>
				<View style={styles.searchWrapper}>
					<TextInput onChangeText={setSearchPokemon} value={searchPokemon} placeholderTextColor={COLORS.gray} placeholder="search for your pokemon" style={styles.searchInput} />
				</View>
				<View>
					<TouchableOpacity style={styles.searchBtn} onPress={handlePokemonSearchPress}>
						<Image source={icons.search} resizeMode="contain" style={styles.searchBtnImage} />
					</TouchableOpacity>
				</View>
			</View>
			{isLoading ? <Bullets active listSize={3} /> : null}
		</View>
	);
};

export default Welcome;
