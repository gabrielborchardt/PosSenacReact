const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const expressLayouts = require('express-ejs-layouts')

app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(bodyParser.urlencoded())

app.get('/', function (req, res) {
  res.render('pages/home')
})

app.get('/dashboard', function (req, res) {
  setTimeout(() => {
    res.render('pages/dashboard')
  }, 2000)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
