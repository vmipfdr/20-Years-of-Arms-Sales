const countryData = require("../db/countries.json");
const CountryList = require("../models/CountryList");

const countrySeed = countryData.map(item => {
  const countryCleanData = {
    name: item.name,
    alpha3Code: item.alpha3Code
  };
  return countryCleanData;
});

CountryList.remove({}).then(() => {
  CountryList.create(countrySeed)
    .then(countries => {
      console.log(countries);
    })
    .catch(err => {
      console.log(err);
    });
});
