const Deals = require("../models/ArmsDeals");
module.exports = {
  index: (req, res) => {
    Deals.find({}).then(deal => {
      res.json(deal);
    });
  },
  showdeliveryYear: (req, res) => {
    Deals.find({ deliveryYear: req.params.deliveryYear }).then(deal => {
      res.json(deal);
    });
  },
  showfullSeller: (req, res) => {
    Deals.find({ sellerFull: req.params.sellerFull }).then(deal => {
      res.json(deal);
    });
  },
  showcodeSeller: (req, res) => {
    Deals.find({ seller: req.params.seller }).then(deal => {
      res.json(deal);
    });
  },
  showfullBuyer: (req, res) => {
    Deals.find({ buyerFull: req.params.buyerFull }).then(deal => {
      res.json(deal);
    });
  },
  showcodeBuyer: (req, res) => {
    Deals.find({ buyer: req.params.buyer }).then(deal => {
      res.json(deal);
    });
  },
  showCategory: (req, res) => {
    Deals.find({ weaponCategory: req.params.weaponCategory }).then(deal => {
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
