const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Country = new Schema({
  name: String,
  topLevelDomain: [String],
  alpha2Code: String,
  alpha3Code: String,
  callingCodes: [String],
  capital: String,
  region: String,
  subregion: String,
  population: Number,
  timezones: [String],
  borders: [String]
  //add array of deals IDs (think harry potter)
});

module.exports = mongoose.model("Country", Country);

//name:  full name (string)
//topLevelDomain:  use for redirect (string)
//alpha2Code: use for ISO2 (string)
//alpha3Code: use for ISO3 we want this for comparison (string)
//callingCodes: number prefix (string)
//capital: String
//altSpellings: string
//region: String
//subregion: String
//population: Number
//timezone: multiple strings
//borders: multiple strings
