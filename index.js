const express = require("express");
const app = express();

app.all("/test", (req, res) => {
  res.send("HTTP method does not have any effect on this route");
})

app.get('/hello', (req, res) => {
  res.send("Hello World!");
});

app.post("/hello", (req, res) => {
  res.send("You just called the post menthod");
})

app.listen(3000);
