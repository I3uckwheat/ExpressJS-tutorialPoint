const express = require("express");
const app = express();

const things = require("./things.js")

app.use("/things", things)

app.get(':id', function(req, res) {
  res.send("Thie id you specified is " + req.params.id)
})

app.listen(3000);
