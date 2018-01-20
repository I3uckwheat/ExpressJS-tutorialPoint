const express = require("express");
const app = express();

app.get('/hello', (req, res) => {
  res.send("Hello World!");
});

app.post("/hello", (req, res) => {
  res.send("You just called the post menthod");
})

app.listen(3000);
