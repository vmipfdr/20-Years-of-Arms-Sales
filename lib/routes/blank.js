const express = require("express");
const router = express.Router();
const app = express();

app.get("/", function(req, res) {
  res.redirect("https://lord-of-war-data.herokuapp.com//countries");
});

module.exports = router;

app.get("/", (req, res) => {
  res.redirect("https://lord-of-war-data.herokuapp.com//countries");
});
