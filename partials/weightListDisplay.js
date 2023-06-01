import Card from '../shared/card';
import { styles } from '../styles/global';
import { Text, TouchableOpacity } from 'react-native';

export default function WeightListDisplay(props) {
	const entry = props.entry;
	return (
		<Card key={entry.key}>
			<TouchableOpacity>
				<Text>{entry.weight}</Text>
				<Text value={entry.date.toString()}>
					{entry.date.toLocaleDateString()}
				</Text>
			</TouchableOpacity>
		</Card>
	);
}
