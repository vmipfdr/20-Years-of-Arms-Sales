const express = require("express");
const parser = require("body-parser");
const app = express();
const index = require("./routes/index");

app.use(parser.json());
app.use("/", index);

// this was for locally testing
// app.listen(3000, () => console.log("listening on port 3000"));

//this is for mongo
app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
