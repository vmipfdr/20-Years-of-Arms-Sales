const mongoose = require("mongoose");
// this is for local testing
// mongoose.connect("mongodb://localhost/arms-deals", {
//   useNewUrlParser: true
// });

//this is for deploying
let mongoURI = "";
if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = "mongodb://localhost/arms-deals";
}

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(instance =>
    console.log(`Connected to db: ${instance.connections[0].name}`)
  )
  .catch(error => console.log("Connection Ffailed!", error));

module.exports = mongoose;
