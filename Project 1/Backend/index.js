const express = require("express");
require("dotenv").config();
const cors = require('cors')

const app = express();
const port = process.env.PORT || 3000;

const jokes = [
  {
    id: 1,
    title: "Why don't skeletons fight?",
    content: "Because they don't have the guts!",
  },
  {
    id: 2,
    title: "Why did the scarecrow win an award?",
    content: "Because he was outstanding in his field!",
  },
  {
    id: 3,
    title: "What do you call cheese that isn't yours?",
    content: "Nacho cheese!",
  },
  {
    id: 4,
    title: "Why can't your nose be 12 inches long?",
    content: "Because then it’d be a foot!",
  },
  {
    id: 5,
    title: "Why did the bicycle fall over?",
    content: "Because it was two-tired!",
  },
];

{
//solving the cors error with url whitelisting

// const whiteList = ['http://localhost:5173',]

// const corsOptions = {
//   origin:function (origin,callback){
//     if(!origin || whiteList.includes(origin)){
//       callback(null,true)
//     }else{
//       console.log('origin: ',origin,'not allowed');
//       callback(new Error("CORS Policy not allowed"))
//     }
//   }
// }

// app.use(cors(corsOptions))
}

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/home", (req, res) => {
  res.send("<h1> Home page </h1>");
});

app.get("/api/jokes", (req, res) => {
  res.json(jokes);
});

app.get("/user/:username/:id", (req, res) => {
  res.send(req.params);
});

app.listen(port, (req, res) => {
  console.log(`Application running on port ${port}`);
});
