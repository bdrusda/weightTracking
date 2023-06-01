import { StyleSheet } from 'react-native';

const yellow = '#ffd35c';

export const styles = StyleSheet.create({
	container: {
		padding: 24,
	},

	header: {
		width: '100%',
		height: '100%',
	},
	headerText: {
		fontWeight: 'bold',
		fontSize: 25,
		color: yellow,
		letterSpacing: 1,
		textAlign: 'center',
		paddingRight: 40,
	},
});
