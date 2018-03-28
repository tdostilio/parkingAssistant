import React from 'react'
import { StyleSheet, View, TouchableOpacity, Button } from 'react-native'
import { Text, Card, ListItem, CheckBox } from 'react-native-elements'
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
    };
  }

  componentWillMount() {
    let statusArray = friends.map((x, i) => {
      return false
    })
    this.setState({checked: statusArray})
    console.log( `Status array ${statusArray}`)
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
            const secondUrl = `https://api.parkiq.io/v1/send?ts=${newDate}&container=${container}&to=tdostilio%40gmail.com`
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
              }
              console.log(`Sent second request`)
              console.log(res.status)
              console.log(res)
            })
            // alert(`Successful reservation of ${friends[index].name}`)
        
            // return fetch("https://api.parkiq.io/v1/send?ts=2018-03-11T18:22:26.162Z&container=rFg8QZ1J1UGT5l2dvsBOKA&to=tdostilio%40gmail.com&to=2032410416",  {
            //   method: "POST"
            // })
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
            style={{width: '50%'}}
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
        {this.renderPerson(friends)}        
        <TouchableOpacity style={styles.registerButton}>
        <Button
          onPress={this.sendRequest}
          title='Register'
        />
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
    marginTop: '35%'
  },
  registerButton: {
    marginTop: '25%',

  }
});

//https://api.parkiq.io/v1/send?ts=2018-03-27T23:40:35.313Z&container=JUCvQ8cYxUqojchXEuLb2g&to=tdostilio%40gmail.com
//https://api.parkiq.io/v1/send?ts=Tue%20Mar%2027%202018%2023:44:49%20GMT-0400%20(EDT)&container=mXrni3ujske7Pw1ZC3d4TQ&to=tdostilio%2540gmail.com