var express = require('express')
var app = express()
var firebase = require('firebase')
var config = {
    apiKey: "AIzaSyAde2kk_GZXCIoXM7atj1LzV1RqiouvH3k",
    authDomain: "selected-midterm1.firebaseapp.com",
    databaseURL: "https://selected-midterm1.firebaseio.com",
    projectId: "selected-midterm1",
    storageBucket: "selected-midterm1.appspot.com",
    messagingSenderId: "1083119831770"
  };
firebase.initializeApp(config);

app.get('/', async (req, res) => {
    var dataRespon = ''
    dataRespon = await firebase.database().ref('/').once('value')
    res.send(dataRespon)
})

app.listen(3000, () => console.log('Online at port 3000'))