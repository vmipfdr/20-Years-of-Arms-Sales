const Country = require("../models/Country");

module.exports = {
  index: (req, res) => {
    Country.find({}).then(country => {
      res.json(country);
    });
  },
  showRegion: (req, res) => {
    Country.find({ region: req.params.region }).then(country => {
      res.json(country);
    });
  },
  showName: (req, res) => {
    Country.find({ name: req.params.name }).then(country => {
      res.json(country);
    });
  },
  create: (req, res) => {
    Country.create(req.body).then(country => {
      res.json(country);
    });
  },
  edit: (req, res) => {
    Country.findOneAndUpdate({ name: req.params.name }, req.body).then(
      country => {
        res.json(country);
      }
    );
  },
  delete: (req, res) => {
    Country.findOneAndDelete({ name: req.params.name }).then(country => {
      res.json(country);
    });
  }
};
