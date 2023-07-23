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
		{ key: 5, weight: 168.5, date: new Date('06/01/23') },
		{ key: 6, weight: 168.1, date: new Date('06/02/23') },
		{ key: 7, weight: 169.0, date: new Date('06/03/23') },
		{ key: 8, weight: 166.6, date: new Date('06/03/23') },
		{ key: 9, weight: 166.3, date: new Date('06/05/23') },
		{ key: 10, weight: 165.7, date: new Date('06/06/23') },
		{ key: 11, weight: 167.1, date: new Date('06/07/23') },
		{ key: 12, weight: 166.9, date: new Date('06/09/23') },
		{ key: 13, weight: 166.7, date: new Date('06/10/23') },
		{ key: 14, weight: 170.5, date: new Date('06/20/23') },
		{ key: 15, weight: 168.6, date: new Date('06/21/23') },
		{ key: 16, weight: 167.5, date: new Date('06/23/23') },
		{ key: 17, weight: 168.2, date: new Date('06/24/23') },
		{ key: 18, weight: 167.8, date: new Date('06/26/23') },
		{ key: 19, weight: 169.8, date: new Date('06/28/23') },
		{ key: 20, weight: 168.1, date: new Date('06/29/23') },
		{ key: 21, weight: 167.8, date: new Date('06/30/23') },
		{ key: 22, weight: 171.5, date: new Date('07/02/23') },
		{ key: 23, weight: 169.9, date: new Date('07/05/23') },
		{ key: 24, weight: 171.4, date: new Date('07/22/23') },
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
