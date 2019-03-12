import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Text, Slider } from 'react-native';
import { StackNavigator } from "react-navigation";
import Game from './Game';
import MenuNiveaux from './MenuNiveaux';

class Options extends Component {

  render() {
    return (
	<View style={styles.container}>
	  <Text style={styles.title}>OPTIONS</Text>
	  <Text style={styles.subtitle}>Volume</Text>
      <View>
        <View style={styles.slider}>
		<Text style={styles.textSlider}>Général</Text>
          <Slider
         step={1}
         minimumValue={0}
         maximumValue={10}
         value={5}
        />
        </View>
        <View style={styles.slider}>
          <Text style={styles.textSlider}>Musique</Text>
          <Slider
         step={1}
         minimumValue={0}
         maximumValue={10}
         value={5}
        />
        </View>
		<View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('Home')}
            title="ANNULER"
            color="#ffffff"
          />
		  <Button
            onPress={() => this.props.navigation.navigate('Home')}
            title="APPLIQUER"
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
  },
  slider: {
	width: 300,
  },
  textSlider: {
	textAlign: 'center',
  },
  subtitle: {
	color: 'black',
	fontSize: 20,
  }
});
export default Options;