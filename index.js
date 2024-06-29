require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Programmers!')
})
app.get('/bakhat', (req, res) => {
  res.send('Bakhat!')
})
app.get('/chai', (req, res) => {
  res.send('Hetish Chaudhary!')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})