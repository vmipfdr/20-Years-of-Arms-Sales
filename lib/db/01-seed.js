const countryData = require("../db/countries.json");
const friendlyData = require("../db/friendlySales.json");
const Country = require("../models/Country");
const ArmsDeals = require("../models/ArmsDeals");

ArmsDeals.find({}).then(deals => {
  deals.forEach(deal => {
    Country.findOne({ name: deal.buyer }).then(buyer => {
      deal.buyer = buyer;
      deal.save();
      console.log(deal);
    });
    Country.findOne({ name: deal.seller }).then(seller => {
      deal.seller = seller;
      deal.save();
      console.log(deal);
    });
  });
});
