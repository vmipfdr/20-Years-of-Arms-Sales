const express = require("express");
const router = express.Router();

router.use("/country", require("./countries"));
router.use("/sales", require("./sales"));

module.exports = router;
