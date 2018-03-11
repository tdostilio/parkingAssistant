import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Card, ListItem, Button, CheckBox } from 'react-native-elements'




export default class App extends React.Component {


  renderPerson = (personArray) => {
    return personArray.map((x, i) => {
      return (
        <View style={styles.personContainer}>
          <CheckBox 
            title={x.name}
            checked={this.state.checked[i]}
          />
        </View>
      )
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text h2>Parcheggio</Text>
        <Text>Who are you registering?</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: '35%'
  },
});
