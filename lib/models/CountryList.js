const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const CountryList = new Schema({
  name: String,
  alpha3Code: String
});

module.exports = mongoose.model("CountryList", CountryList);
