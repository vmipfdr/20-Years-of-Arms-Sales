const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Bachelor = new Schema({
  name: String,
  year: Number,
  winner: String,
  stillTogether: Boolean
});

module.exports = mongoose.model("Bachelor", Bachelor);
