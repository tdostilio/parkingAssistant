require('dotenv').config()
var opn = require('opn');

window = opn("https://uptownbuckhead.parkingattendant.com/lSQS_KvqoUGCPHRWgCftBQ/permits/temporary/new")

//License Plate 
var license = document.getElementsByName('vehicle')[0];
license.value = "ABCD";

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
