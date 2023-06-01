import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Header from '../shared/header';
import React from 'react';

const screens = {
	Home: {
		screen: Home,
		navigationOptions: {
			headerTitle: () => <Header />,
		},
	},
};

const HomeStack = createStackNavigator(screens, {
	defaultNavigationOptions: {
		headerStyle: { backgroundColor: '#69e' },
		headerTintColor: '#444',
	},
});

export default createAppContainer(HomeStack);
