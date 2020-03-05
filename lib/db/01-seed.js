const countryData = require("../db/countries.json");
const friendlyData = require("../db/friendlySales.json");
const Country = require("../models/Country");
const ArmsDeals = require("../models/ArmsDeals");

ArmsDeals.find({}).then(deals => {
  deals.forEach(deal => {
    //this is where i match it
    Country.findOne({ alpha3Code: deal.buyer }).then(buyer => {
      //this is where i put the variable
      deal.buyer = buyer;
      deal.save();
      console.log(deal);
    });
    Country.findOne({ alpha3Code: deal.seller }).then(seller => {
      deal.seller = seller;
      deal.save();
      console.log(deal);
    });
  });
});

const mongoose = require("../db/connection");

// .then(sellersdeals => {
//   sellersdeals.forEach(dealt => {
//     Country.findOne({ alpha3Code: deal.seller }).then(seller => {
//       dealt.seller = seller;
//       dealt.save();
//       console.log(deal);
//     });
//   });
