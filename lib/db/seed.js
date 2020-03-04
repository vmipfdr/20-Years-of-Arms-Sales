const countryData = require("../db/countries.json");
const Country = require("../models/Country");

Country.remove({});
Country.collection
  .insert(countryData)
  .then(countries => {
    console.log(countries);
  })
  .catch(err => {
    console.log(err);
  });
