const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/bachelor_nation", {
  useNewUrlParser: true
});
module.exports = mongoose;
