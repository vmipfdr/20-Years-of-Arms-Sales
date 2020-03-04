const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Sale = new Schema({
  buyercod: String,
  sellercod: String,
  odat: Date,
  onum: Number,
  desig2: String,
  wcat: String,
  desc: String,
  delyears: Date,
  buyer: String,
  seller: String,
  tivorder: Number,
  tivdel: Number
});

module.exports = mongoose.model("Sale", Sale);

// buyercod = ISO country code of buying country (string)
// sellercod = ISO country of selling country (string)
// odat = order date (year)
// odai = UNK (boolean)
// onum = order number (number)
// onai = UNK (boolean)
// ldat = UNK date (year)
// term = UNK (string)
// desig2 = nomenclature of weapon (string)
// wcat = code for weapon type AC = Air Craft (string)
// desc = description (string)
// coprod = UNK (string)
//nrdel = UNK order number (number)
//nrdelai = UNK  (boolean)
//delyears = delivery years (string)
//buyer = buying country (string)
//seller = selling country (string)
//status = UNK (string)
//tivunit = UNK (number)
//tivorder = ordered quantity (number)
//tivdel = delivered quantity (number)
