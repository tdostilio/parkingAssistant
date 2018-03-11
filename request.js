//POST
exampleUrl = "https://api.parkiq.io/v1/permits/temporary?ts=2018-03-11T04:40:35.129Z&send=false&location=lSQS_KvqoUGCPHRWgCftBQ&attendant=lSQS_KvqoUGCPHRWgCftBQ&vehicle=aef123&tenant=5212&token=2405&startDate=&duration=PT6H&email=&tel="



baseUrl = "https://api.parkiq.io/v1/permits/temporary?"
timeStamp = "2018-03-11T04:40:29.646Z"
license = "aef123"
apartment = "5212"
passcode = "2405"
duration = "PT6H"


requestUrl = `${baseUrl}ts=${timeStamp}&send=false&location=lSQS_KvqoUGCPHRWgCftBQ&attendant=lSQS_KvqoUGCPHRWgCftBQ&vehicle=${license}&tenant=${apartment}&token=${passcode}&startDate=&duration=${duration}&email=&tel=`

console.log(requestUrl)



//https://api.parkiq.io/v1/permits/temporary?ts=2018-03-11T04:40:35.129Z&send=false&location=lSQS_KvqoUGCPHRWgCftBQ&attendant=lSQS_KvqoUGCPHRWgCftBQ&vehicle=aef123&tenant=5212&token=2405&startDate=&duration=PT6H&email=&tel=
