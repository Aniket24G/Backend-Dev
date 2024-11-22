const express = require('express')
require('dotenv').config()

const app = express();
 const port = process.env.PORT

 app.get('/',(req,res) => {
    res.send("Hello world")
 })

 app.get('/home',(req,res) => {
    res.send('<h1> Home page </h1>')
 })

 app.listen(port,(req,res) => {
    console.log(`Application running on port ${port}`);
 })