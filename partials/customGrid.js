import { StyleSheet, View } from 'react-native';

import WeightListDisplay from './weightListDisplay';

export default function CustomGrid(props) {
	const entries = props.entries;
	const numColumns = props.columns || 4;

	entries.sort((a, b) => b.date - a.date);
	const rows = [];
	let i = 0;
	while (entries.length > 0) {
		rows.push(entries.splice(0, numColumns));
	}
	return (
		<View style={styles.grid}>
			{rows.map((row) => {
				return <GridRow gridItems={row} />;
			})}
		</View>
	);
}

function GridRow(props) {
	const gridItems = props.gridItems;
	return (
		<View style={styles.gridRow}>
			{gridItems
				.sort((a, b) => b.date - a.date)
				.map((entry) => {
					return <WeightListDisplay entry={entry} />;
				})}
		</View>
	);
}

const styles = StyleSheet.create({
	// TODO clean up formatting here
	gridRow: {
		display: 'flex',
		flexDirection: 'row',
		width: '100%',
		margin: 'auto',
		// alignItems: 'center',
		// justifyContent: 'center',
		padding: 10,
	},
});
