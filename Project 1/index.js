const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/home", (req, res) => {
  res.send("<h1> Home page </h1>");
});

app.get("/user", (req, res) => {
  res.send("User Page");
});

app.get("/user/:username/:id", (req, res) => {
  res.send(req.params);
});

app.listen(port, (req, res) => {
  console.log(`Application running on port ${port}`);
});
