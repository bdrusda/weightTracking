import { StyleSheet } from 'react-native';

export const yellow = '#ffd35c';
export const blue = '#69e';

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
	weightInputSection: {
		alignItems: 'center',
		alignSelf: 'center',
		width: '30%',
	},
	weightInput: {
		borderColor: '#000',
		borderWidth: 1,
		backgroundColor: '#fff',
		borderRadius: 3,
		width: '100%',
		fontSize: 20,
		padding: 2,
		textAlign: 'center',
	},
	submitButton: {
		backgroundColor: blue,
		paddingHorizontal: 20,
		paddingVertical: 10,
		margin: 10,
		borderRadius: 3,
		width: '100%',
	},
	submitButtonLabel: {
		textAlign: 'center',
		color: '#fff',
	},
	weightGraph: {
		backgroundColor: '#eee',
		padding: 5,
		margin: 10,
	},
});
