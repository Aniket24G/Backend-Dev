const express = require('express')
// import express from "express"

const app = express()

app.get('/',(req,res) => {
    res.send('server is ready')
})

//get a list of 5 jokes

app.get('/api/jokes', (req,res) => {
    const jokes = [
        {
            id:1,
            title: 'joke 1',
            content: "this is first joke"
        },
        {
            id:2,
            title: 'joke 2',
            content: "this is second joke"
        },
        {
            id:3,
            title: 'joke 3',
            content: "this is third joke"
        },
        {
            id:4,
            title: 'joke 4',
            content: "this is fourth joke"
        },
        {
            id:5,
            title: 'joke 5',
            content: "this is ffith joke"
        },
    ];
    res.send(jokes)
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`serving at https://localhost:${port}`)
})