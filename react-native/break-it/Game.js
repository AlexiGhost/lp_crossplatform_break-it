import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Text, Image } from 'react-native';

class Game extends Component {
	
  render() {
    return (
	<Image source={require('./game.png')} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
   alignItems: 'center',
  },
  title: {
	color: 'black',  
  }
});
export default Game;