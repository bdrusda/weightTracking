import React, { useState } from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import WeightListDisplay from '../partials/weightListDisplay';
import { LineChart } from 'react-native-chart-kit';

export default function Home({ navigation }) {
	const [entries, setEntries] = useState([
		{ key: 1, weight: 169.7, date: new Date('05/21/23') },
		{ key: 2, weight: 163.9, date: new Date('05/18/23') },
		{ key: 3, weight: 167.8, date: new Date('05/29/23') },
		{ key: 4, weight: 166.2, date: new Date('05/30/23') },
	]);

	const dates = entries.map((entry) =>
		entry.date.toLocaleDateString(undefined, {
			year: 'numeric',
			month: '2-digit',
		})
	);
	const weights = entries.map((entry) => entry.weight);
	const data = {
		labels: [dates],
		datasets: [
			{
				data: weights,
				strokeWidth: 2,
			},
		],
	};

	return (
		<View>
			<LineChart
				data={data}
				width={Dimensions.get('window').width - 40} // from react-native
				height={220}
				yAxisLabel={''}
				chartConfig={{
					backgroundColor: '#69e',
					backgroundGradientFrom: '#303030',
					backgroundGradientTo: '#303030',
					decimalPlaces: 2, // optional, defaults to 2dp
					color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
					style: {
						borderRadius: 16,
					},
				}}
				bezier
				style={{
					marginVertical: 8,
					borderRadius: 16,
					paddingHorizontal: 20,
				}}
			/>
			<ScrollView>
				{entries
					.sort((a, b) => b.date - a.date)
					.map((entry) => {
						return <WeightListDisplay entry={entry} />;
					})}
			</ScrollView>
		</View>
	);
}
