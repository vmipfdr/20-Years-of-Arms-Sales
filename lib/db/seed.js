const countryData = require("../db/countries.json");
const friendlyData = require("../db/friendlySales.json");
// const Country = require("../models/Country");
const ArmsDeals = require("../models/ArmsDeals");

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
    orderedQuantity: item.tivorder,
    deliveredQuantity: item.tivdel
  };
  return armsData;
});

ArmsDeals.remove({});
ArmsDeals.collection
  .insert(initialData)
  .then(countries => {
    console.log(countries);
  })
  .catch(err => {
    console.log(err);
  });
