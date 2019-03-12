import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import MenuHome from './MenuHome';
import MenuNiveaux from './MenuNiveaux';
import Game from './Game';
import Options from './Options';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: MenuHome,
    },
    Game: {
      screen: Game,
    },
	Niveaux: {
      screen: MenuNiveaux,
    },
	Options: {
      screen: Options,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return (
	  <AppContainer/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
