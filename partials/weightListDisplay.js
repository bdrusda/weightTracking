import Card from '../shared/card';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function WeightListDisplay(props) {
	const entry = props.entry;
	return (
		<Card key={entry.key} styles={styles.weightListDisplay}>
			<TouchableOpacity>
				<Text>{entry.weight}</Text>
				<Text value={entry.date.toString()}>
					{entry.date.toLocaleDateString()}
				</Text>
			</TouchableOpacity>
		</Card>
	);
}

const styles = StyleSheet.create({
	gridRweightListDisplay: {
		width: '100%',
		margin: 'auto',
	},
});
