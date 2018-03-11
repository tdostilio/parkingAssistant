import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Card, ListItem, Button, CheckBox } from 'react-native-elements'

const friends = [
  {"name": "Tom",
  "license": "1234ABC"},
  {"name": "Jim Bob",
  "license": "1234ABC"},
]

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
    };
  }

  componentWillMount() {
    let statusArray = friends.map((x, i) => {
      return false
    })
    this.setState({checked: statusArray})
    console.log( `Status arraey ${statusArray}`)
  }

  checkBool = (value) => {
    if (value === "false") {
      return false
    }
    return true
  }

  toggleChecked = (index) => {
    let stateCopy = this.state.checked;
    console.log(`stateCopy: ${stateCopy}`)
    let toggler = (value) => {
      if (value === false) {
        return true
      }
      else return false
    }
    stateCopy[index] = toggler(this.state.checked[index])
    console.log(index)
    console.log(stateCopy)
    this.setState({checked: stateCopy})
  }


  renderPerson = (personArray) => {
    return personArray.map((x, i) => {
      return (
        <View style={styles.personContainer}>
          <CheckBox 
            title={x.name}
            checked={this.state.checked[i]}
            key={i}
            onPress={() => this.toggleChecked(i)}
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
        {this.renderPerson(friends)}
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
