import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import { useRouter } from 'expo-router';

import styles from './welcome.style';
import { icons, SIZES, COLORS, FONTS } from '../../../constants';

const Welcome = () => {
	const router = useRouter();
	return (
		<View>
			<View style={styles.container}>
				<Text style={styles.userName}>Hello Rahmin</Text>
				<Text style={styles.welcomeMessage}>Welcome to your Pokedex</Text>
			</View>
			<View style={styles.searchContainer}>
				<View style={styles.searchWrapper}>
					<TextInput placeholderTextColor="#000" placeholder="search for your pokemon" style={styles.searchInput} />
				</View>
			</View>
		</View>
	);
};

export default Welcome;
