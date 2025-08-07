require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World! this is home')
})

app.get('/twitter', (req, res)=>{
    res.send("hello twitter");
})

app.get('/login', (req, res)=>{
    res.send("<h1> Hello World! this is login page </h1>");
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})