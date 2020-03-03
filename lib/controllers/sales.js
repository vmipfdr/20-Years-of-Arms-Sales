const Deals = require("../models/ArmsDeals");
module.exports = {
  index: (req, res) => {
    Deals.find({}).then(bachelor => {
      res.json(bachelor);
    });
  },
  showYear: (req, res) => {
    Deals.find({ year: req.params.year }).then(deal => {
      res.json(deal);
    });
  },
  showName: (req, res) => {
    Deals.find({ name: req.params.name }).then(deal => {
      res.json(deal);
    });
  },
  create: (req, res) => {
    Deals.create(req.body).then(deal => {
      res.json(deal);
    });
  },
  edit: (req, res) => {
    Deals.findOneAndUpdate({ name: req.params.name }, req.body).then(deal => {
      res.json(deal);
    });
  },
  delete: (req, res) => {
    Deals.findOneAndDelete({ name: req.params.name }).then(deal => {
      res.json(deal);
    });
  }
};
