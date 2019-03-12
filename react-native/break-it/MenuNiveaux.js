import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Text } from 'react-native';

class MenuNiveaux extends Component {
  
  render() {
    return (
	<View>
	  <Text style={styles.title}>Sélectionnez un niveaux</Text>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('Game')}
            title="1"
			color="#ffffff"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('Game')}
            title="2"
            color="#ffffff"
          />
        </View>
		<View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('Game')}
            title="3"
			color="#ffffff"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('Game')}
            title="4"
            color="#ffffff"
          />
        </View>
		<View style={styles.buttonContainerDisable}>
          <Button
            onPress={() => this.props.navigation.navigate('Game')}
            title="5"
			color="#ffffff"
          />
        </View>
        <View style={styles.buttonContainerDisable}>
          <Button
            onPress={() => this.props.navigation.navigate('Game')}
            title="6"
            color="#ffffff"
          />
        </View>
		<View style={styles.buttonContainerDisable}>
          <Button
            onPress={() => this.props.navigation.navigate('Game')}
            title="7"
			color="#ffffff"
          />
        </View>
        <View style={styles.buttonContainerDisable}>
          <Button
            onPress={() => this.props.navigation.navigate('Game')}
            title="8"
            color="#ffffff"
          />
        </View>
		<View style={styles.buttonContainerDisable}>
          <Button
            onPress={() => this.props.navigation.navigate('Game')}
            title="9"
			color="#ffffff"
          />
        </View>
        <View style={styles.buttonContainerDisable}>
          <Button
            onPress={() => this.props.navigation.navigate('Game')}
            title="10"
            color="#ffffff"
          />
        </View>
		<View style={styles.buttonContainerDisable}>
          <Button
            onPress={() => this.props.navigation.navigate('Game')}
            title="11"
			color="#ffffff"
          />
        </View>
        <View style={styles.buttonContainerDisable}>
          <Button
            onPress={() => this.props.navigation.navigate('Game')}
            title="12"
            color="#ffffff"
          />
        </View>
		<View style={styles.buttonContainerDisable}>
          <Button
            onPress={() => this.props.navigation.navigate('Game')}
            title="13"
			color="#ffffff"
          />
        </View>
        <View style={styles.buttonContainerDisable}>
          <Button
            onPress={() => this.props.navigation.navigate('Game')}
            title="14"
            color="#ffffff"
          />
        </View>
		<View style={styles.buttonContainerDisable}>
          <Button
            onPress={() => this.props.navigation.navigate('Game')}
            title="15"
			color="#ffffff"
          />
        </View>
        <View style={styles.buttonContainerDisable}>
          <Button
            onPress={() => this.props.navigation.navigate('Game')}
            title="16"
            color="#ffffff"
          />
        </View>
		<View style={styles.buttonContainerDisable}>
          <Button
            onPress={() => this.props.navigation.navigate('Game')}
            title="17"
			color="#ffffff"
          />
        </View>
        <View style={styles.buttonContainerDisable}>
          <Button
            onPress={() => this.props.navigation.navigate('Game')}
            title="18"
            color="#ffffff"
          />
        </View>
		<View style={styles.buttonMenu}>
          <Button
            onPress={() => this.props.navigation.navigate('Home')}
            title="MENU PRINCIPAL"
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
	flexDirection: 'row',
	justifyContent: 'center',
	flexWrap: 'wrap',
	alignItems: 'center',
  },
  buttonContainerDisable: {
    margin: 10,
	padding: 10,
	alignItems: 'center',
    backgroundColor: 'grey',
	width: 50,
	height: 50,
  },
  buttonContainer: {
    margin: 10,
	padding: 10,
	alignItems: 'center',
    backgroundColor: '#2196F3',
	width: 50,
	height: 50,
  },
  buttonMenu: {
    margin: 10,
	padding: 10,
	alignItems: 'center',
    backgroundColor: '#2196F3',
	width: 200,
	height: 50,
  },
  title: {
	color: 'black',
	fontSize: 30,
	textAlign: 'center',
  }
});
export default MenuNiveaux;