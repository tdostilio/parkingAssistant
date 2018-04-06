import React from 'react'
import { StyleSheet, View, TouchableOpacity, Button, TextInput } from 'react-native'
import { Text, Card, ListItem, CheckBox } from 'react-native-elements'
import { AppLoading, Font } from 'expo'
import friends from './friendsList'


const baseUrl = "https://api.parkiq.io/v1/permits/temporary?"
const apartment = "5212"
const passcode = "2405"
const duration = "PT12H"


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
      isReady: false,
      text: ''
    };
  }

  componentDidMount() {
    this.loadFonts()
    let statusArray = friends.map((x, i) => {
      return false
    })
    this.setState({checked: statusArray})
    console.log( `Status array ${statusArray}`)
  }

  loadFonts = async () => {
    await Font.loadAsync({'Satisfy': require('./assets/Satisfy/Satisfy-Regular.ttf')})
    this.setState({isReady: true})
  }
  checkBool = (value) => {
    if (value === "false") {
      return false
    }
    return true
  }

  toggleChecked = (index) => {
    console.log(index)
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

  filterTrues = (arrayOfBooleans) => {
    let arrayOfTrues = arrayOfBooleans.map((x, i) => {
        if (x === true) {
          return i
        }
        else {
          return 
        }
    })
    return arrayOfTrues.filter(value => value !== undefined)
  }

  sendRequest = () => {
    let trueIndexes = this.filterTrues(this.state.checked)
    console.log(trueIndexes)
      trueIndexes.forEach((index) => {
        let license = friends[index].license
        let requestUrl = `${baseUrl}ts=${new Date()}&send=false&location=lSQS_KvqoUGCPHRWgCftBQ&attendant=lSQS_KvqoUGCPHRWgCftBQ&vehicle=${license}&tenant=${apartment}&token=${passcode}&startDate=&duration=${duration}&email=tdostilio@gmail.com&tel=2032410416`
          return fetch(requestUrl, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            }
          }).then((res, error) => {
            if (error) {
              alert(error)
              console.log(error)
              return
            }
            if (res.status !== 201) {
              alert(`Reservation failed: ${res.status}`)
              return
            }
            let olderUrl = res.headers.map.location[0]
            let container = olderUrl.substring(olderUrl.indexOf("/p/") + 3);
            let newDate = new Date()
            console.log(newDate)
            const secondUrl = `https://api.parkiq.io/v1/send?ts=${newDate}&container=${container}&to=tdostilio@gmail.com`
            console.log(`container=${container}`)
            console.log(secondUrl)
            return fetch(secondUrl, {
              method: 'POST',
              headers: {
                Accept: 
                'application/json',
                'Content-Type': 'application/json',
              }
            }).then((res, error) => {
              if (error) {
                console.error(error)
                return
              }
              alert(`Successful reservation of ${friends[index].name}`)
            })
            
          })
      })
  }


  renderPerson = (personArray) => {
    return personArray.map((x, i) => {
      return (
        <View key={i} style={styles.personContainer}>
          <CheckBox 
            title={x.name}
            checked={this.state.checked[i]}
            key={i}
            value={x.license}
            onPress={() => this.toggleChecked(i)}
            containerStyle={styles.checkBox}
            textStyle={styles.checkBoxText}
          />
        </View>
      )
    })
  }

  render() {
    if (!this.state.isReady) {
      return ( <AppLoading/>)
    }
    return (
      <View style={styles.container}>
        <Text h1 style={styles.title}>Parcheggio</Text>
        <Text style={styles.subtitle}>Who are you registering?</Text>
        {this.renderPerson(friends)} 
        <TouchableOpacity onPress={this.sendRequest} style={styles.buttonContainer}>
            <Text style={styles.registerButton} >
              Register
            </Text>
        </TouchableOpacity>
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
    backgroundColor: '#96939B',
  },
  title: {
    marginTop: '20%',
    color: '#F9DC5C',
    fontFamily: 'Satisfy',
  },
  subtitle: {
    marginTop: '5%',
    fontSize: 20,
    color: '#F9DC5C',
    fontFamily: 'Satisfy',
  },
  checkBox: {
    width: '75%',
    alignItems: 'flex-start',
    // backgroundColor: '#96939B',
  },
  checkBoxText: {
    color: 'black',
  },
  personContainer: {
    width: '60%',
    alignItems: 'center',
  },
  textInput: {
    height: 40, 
    width: 200, 
    backgroundColor: 'white', 
  },
  buttonContainer: {
    marginTop: '10%',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '10%',
    width: '50%',
    // padding: 5,
    // marginBottom: '20%',
  },
  registerButton: {
    marginTop: '10%',
    // height: '100%',
    fontSize: 30,
    color: '#F9DC5C',
    height: 60,
    fontFamily: 'Satisfy',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

