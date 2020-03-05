const countryData = require("../db/countries.json");
const friendlyData = require("../db/friendlySales.json");
const Country = require("../models/Country");
//should i make a new model to make the country codes objects?
const ArmsDeals = require("../models/ArmsDeals");

ArmsDeals.find({}).then(deals => {
  deals.forEach(deal => {
    //this is where i match it
    Country.findOne({ alpha3Code: deal.seller }).then(seller => {
      //this is where i put the variable
      deal.sellingcountry = seller;
      deal.save();
      console.log(deal);
    });
  });
});

const mongoose = require("../db/connection");
