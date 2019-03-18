import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Text } from 'react-native';
import { StackNavigator } from "react-navigation";
import Game from './Game';
import MenuNiveaux from './MenuNiveaux';

class MenuHome extends Component {
  _onPressButtonNiveaux() {
    Alert.alert('niveaux')
  }
  _onPressButtonOptions() {
    Alert.alert('options')
  }
  _onPressButtonQuitter() {
    Alert.alert('quitter')
  }

  render() {
    return (
	<View style={styles.container}>
	  <Text style={styles.title}>Break It</Text>
      <View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('Game')}
            title="JOUER"
			color="#ffffff"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('Niveaux')}
            title="NIVEAUX"
            color="#ffffff"
          />
        </View>
		<View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('Options')}
            title="OPTIONS"
            color="#ffffff"
          />
        </View>
		<View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButtonQuitter}
            title="QUITTER"
            color="#ffffff"
          />
        </View>
        
      </View>
	</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
	flex: 1, 
	flexDirection: 'column',
	justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    margin: 10,
	alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  title: {
	color: 'black',
	fontSize: 30,
  }
});
export default MenuHome;