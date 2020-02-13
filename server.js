const express = require("express");
const compression = require("compression");
const path = require("path");
const app = express();
app.use(compression());
app.use(express.static(__dirname + "/dist/angular-pokedex"));
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/angular-pokedex/index.html"));
});
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(404).send("Something broke!");
});
app.listen(process.env.PORT || 3000);
