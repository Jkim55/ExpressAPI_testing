const express = require('express')

const app = express()
app.get('/', (req, res, next) => {
  // res.json({message:'yay!'})  // canary test to see that this route is working. should see test fail with {"message":"yay!"}
  res.sendFile('index.html', {root: __dirname + '/public'}, (err) => {
    if (err) return next(err)
  })
})
module.exports = app
