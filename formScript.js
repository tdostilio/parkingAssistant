

const friends = {
  "Henri": "abcd",
  "Joe": "abcd",
  "Moose": "abcd",
  "Brian": "abcd",
  "Alex": "abcd",
  "Eli": "abcd",
  "Jake": "abcd",
}
//License Plate 

let friend = confirm('Who are you registering? ')
let license = friends.friend
console.log(friend + license)

//Apartment
var apartment = document.getElementsByName('tenant')[0];
apartment.value = 5212;

//Passcode
var passcode = document.getElementsByName('token')[0];
passcode.value = 2405;

//Duration
var duration = document.getElementsByName('duration')[0];
duration.value = "PT12H";

//Contact Email
var email = document.getElementsByName('email')[0];


//Contact Phone 
var phone = document.getElementsByName('tel')[0];
// phone.value = process.env.PHONE;

//Button / Submission
var button = document.getElementsByClassName('control')[0].childNodes[1];
button.click()

//Form was getting a 403 on form.submit 
// var form = document.getElementsByClassName("new permit ready")[0];
// form.submit()
`https://api.parkiq.io/v1/permits/temporary?ts=${new Date()}&send=false&location=lSQS_KvqoUGCPHRWgCftBQ&attendant=lSQS_KvqoUGCPHRWgCftBQ&vehicle=${license}&tenant=5212&token=2405&startDate=&duration=PT12H&email=&tel=`