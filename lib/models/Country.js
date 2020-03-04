const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Country = new Schema({
  name: String,
  alpha2Code: String,
  alpha3Code: String,
  capital: String,
  region: String,
  subregion: String,
  population: Number,
  demonym: String,
  borders: [String]
});

module.exports = mongoose.model("Country", Country);
