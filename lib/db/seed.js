// const Bachelor = require("../models/Bachelor");
// const Bachelorette = require("../models/Bachelorette");
const friendlyArmsData = require("./friendlySales");

//this will be country data
const bacheloretteData = require("./bachelorettes");

Bachelor.remove({});
Bachelor.collection
  .insert(bachelorData)
  .then(bachelors => {
    console.log(bachelors);
  })
  .catch(err => {
    console.log(err);
  });

Bachelorette.remove({});
Bachelorette.collection
  .insert(bacheloretteData)
  .then(bachelorettes => {
    console.log(bachelorettes);
  })
  .catch(err => {
    console.log(err);
  });