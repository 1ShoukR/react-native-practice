import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { fetchPokeomon } from '../../../actions/fetchPokemon';

import styles from './welcome.style';
import { icons, SIZES, COLORS, FONTS } from '../../../constants';

const Welcome = () => {
	const router = useRouter();
  const [searchPokemon, setSearchPokemon] = useState('');


	const handlePokemonSearchPress = () => {
			fetchPokeomon(searchPokemon);
	};
	return (
		<View>
			<View style={styles.container}>
				<Text style={styles.userName}>Hello Rahmin</Text>
				<Text style={styles.welcomeMessage}>Welcome to your Pokedex</Text>
			</View>
			<View style={styles.searchContainer}>
				<View style={styles.searchWrapper}>
					<TextInput onChangeText={setSearchPokemon} value={searchPokemon} placeholderTextColor="#000" placeholder="search for your pokemon" style={styles.searchInput} />
				</View>
        <View>
          <TouchableOpacity style={styles.searchBtn} onPress={handlePokemonSearchPress}>
            <Image  source={icons.search} resizeMode="contain" style={styles.searchBtnImage} />
          </TouchableOpacity>
        </View>
			</View>
		</View>
	);
};

export default Welcome;
