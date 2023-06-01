import React, { useState } from 'react';
import {
	View,
	Text,
	Button,
	FlatList,
	Modal,
	TouchableOpacity,
	ScrollView,
} from 'react-native';
import { styles } from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';

export default function Home({ navigation }) {
	const [entries, setEntries] = useState([
		{ key: 1, weight: 169.7, date: new Date('05/21/23') },
		{ key: 2, weight: 163.9, date: new Date('05/18/23') },
		{ key: 3, weight: 167.8, date: new Date('05/29/23') },
		{ key: 4, weight: 166.2, date: new Date('05/30/23') },
	]);

	return (
		<View>
			<ScrollView>
				{entries
					// TODO figure out this sorting by date
					.sort((a, b) => b.date - a.date)
					.map((entry) => {
						return (
							<Card key={entry.key}>
								<TouchableOpacity>
									<Text style={styles.titleText}>{entry.weight}</Text>
									<Text style={styles.titleText}>
										{entry.date.toLocaleDateString()}
									</Text>
								</TouchableOpacity>
							</Card>
						);
					})}
			</ScrollView>
		</View>
	);
}
