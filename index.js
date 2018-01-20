const express = require("express");
const app = express();
app.set("view engine", "pug");
app.set("views", "./views");

const things = require("./things.js")

app.use("/things", things)

app.get(':id', function(req, res) {
  res.send("Thie id you specified is " + req.params.id)
})

app.get("/first_template", (req, res) => {
  res.render("first_view")
})

app.listen(3000);
