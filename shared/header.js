import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from '../styles/global';

export default function Header() {
	return (
		<View style={styles.header}>
			<Text style={styles.headerText}>AMRAPP Lite</Text>
		</View>
	);
}
