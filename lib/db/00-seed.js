const countryData = require("../db/countries.json");
const friendlyData = require("../db/friendlySales.json");
const Country = require("../models/Country");
const Sale = require("../models/ArmsDeals");

const initialData = friendlyData.map(item => {
  const armsData = {
    buyer: item.buyercod,
    seller: item.sellercod,
    orderDate: item.odat,
    orderNumber: item.onum,
    weaponType: item.desig2,
    weaponCategory: item.wcat,
    weaponDescription: item.desc,
    deliveryYear: item.delyears,
    buyerFull: item.buyer,
    sellerFull: item.seller,
    buyingcountry: item.buyingcountry,
    sellingcountry: item.sellingcountry
  };
  return armsData;
});

Sale.remove({});
Sale.collection
  .insert(initialData)
  .then(deals => {
    console.log(deals);
  })
  .catch(err => {
    console.log(err);
  });

const countrySeed = countryData.map(item => {
  const countryCleanData = {
    name: item.name,
    alpha2Code: item.alpha2Code,
    alpha3Code: item.alpha3Code,
    callingCodes: item.callingCodes,
    capital: item.capital,
    region: item.region,
    subregion: item.subregion,
    population: item.population,
    timezones: item.timezones,
    borders: item.borders
  };
  return countryCleanData;
});

Country.remove({}).then(() => {
  Country.create(countrySeed)
    .then(countries => {
      console.log(countries);
    })
    .catch(err => {
      console.log(err);
    });
});

//update the countries collection to show all of the deals
//search by deal
