// dependencies - yarn add express cors twilio 
require('dotenv').config();

const express = require('express')
const cors = require('cors')
const twilio = require('twilio')

// twili requirements - texting API
const accountSid = process.env.ACCOUNTSID
const authToken = process.env.AUTHTOKEN
const client = new twilio(accountSid, authToken)


const server = express();  // alias
server.use(cors())     // blocks the browser from restricting any data 


// TODO - welcome page for the server
server.get('/', (req, res) => {
     res.send('Welcome to the express server')
})


// TODO - Twilio text
server.get('/send-text', (req, res) => {
     // GET variables - passed via query string 
     const {recipient, textmessage} = req.query 

     console.log(recipient)
     console.log(textmessage)
     // send text - from twilio phone number given
     client.messages.create({
          body: textmessage, 
          to: recipient, 
          from: '+18646687632'   
     }).then((message) => {
          console.log(message)
     }).catch((error) => {
          console.log(error)
     })
})


// TODO must have nodemon installed http:localhost:4000 
const port = process.env.PORT || 4000
server.listen(port, () => {
     console.log(`Hello you're running on port ${port}`)
})