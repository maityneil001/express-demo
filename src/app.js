const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)

while(true) {
    console.log(1);
}

app.listen(3000)