import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Card(props) {
	return (
		<View style={styles.card}>
			<View style={styles.cardContent}>{props.children}</View>
		</View>
	);
}
const styles = StyleSheet.create({
	card: {
		borderRadius: 6,
		elevation: 3,
		backgroundColor: '#fff',
		shadowOffset: {
			width: 1,
			height: 1,
		},
		shadowColor: '#333',
		shadowOpacity: 0.3,
		shadowRadius: 2,
		marginHorizontal: 5,
		marginTop: 5,
		display: 'inline',
		flex: 1,
	},
	cardContent: {
		marginHorizontal: 20,
		marginVertical: 20,
		textAlign: 'center',
	},
});
