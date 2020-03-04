const countryData = require("../db/countries.json");
const friendlyData = require("../db/friendlySales.json");
const Country = require("../models/Country");
const ArmsDeals = require("../models/ArmsDeals");

ArmsDeals.find({}).then(deals => {
  deals.forEach(sales => {
    Country.findOne({ buyerFull: sales.buyer }).then(country => {
      sales.buyer = country.name;
      sales.save();
      console.log(sales);
    });
  });
});
