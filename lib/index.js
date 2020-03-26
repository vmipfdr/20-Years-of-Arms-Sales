const express = require("express");
const parser = require("body-parser");
const app = express();
const index = require("./routes/index");
const cors = require("cors");

app.use(cors());
app.use(parser.json());
app.use("/", index);
app.get("/", (req, res) => {
  res.redirect("./countries");
});

// this was for locally testing
app.listen(3001, () => console.log("listening on port 3001"));

// this is for mongo
// app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
