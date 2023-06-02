import React, { useState } from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import WeightListDisplay from '../partials/weightListDisplay';

import {
	Chart as ChartJS,
	LineElement,
	CategoryScale,
	LinearScale,
	TimeScale,
	PointElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import 'chartjs-adapter-date-fns';
import { Line } from 'react-chartjs-2';

ChartJS.register(
	LineElement,
	CategoryScale,
	LinearScale,
	TimeScale,
	PointElement,
	Title,
	Tooltip,
	Legend
);

export default function Home({ navigation }) {
	const [entries, setEntries] = useState([
		{ key: 1, weight: 169.7, date: new Date('05/21/23') },
		{ key: 2, weight: 163.9, date: new Date('05/18/23') },
		{ key: 3, weight: 167.8, date: new Date('05/29/23') },
		{ key: 4, weight: 166.2, date: new Date('05/30/23') },
	]);

	entries.sort((a, b) => b.date - a.date);
	const labels = entries.map((entry) => entry.date);
	const values = entries.map((entry) => entry.weight);

	const data = {
		labels: labels,
		datasets: [
			{
				label: 'Weight',
				data: values,
				borderColor: '#69e',
				backgroundColor: '#4785eb',
			},
		],
	};

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top',
			},
			title: {
				display: true,
				text: 'Chart.js Line Chart',
			},
		},
		scales: {
			x: {
				type: 'time',
				time: {
					unit: 'day',
				},
			},

			y: {
				beginAtZero: false,
			},
		},
	};

	return (
		<View>
			<Line options={options} data={data} />;
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
