const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/arms-deals", {
  useNewUrlParser: true
});
module.exports = mongoose;
