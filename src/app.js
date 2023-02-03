const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)

while(true) {
    console.log(2);
}

// adding one more bug,security issue
mySecrekKey='askdjasda8s6dad7a8s7d89a7d89as7d89';

app.listen(3000)