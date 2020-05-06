const express = require("express");
const router = express.Router();

router.use("/countries", require("./countries"));
router.use("/sales", require("./sales"));

module.exports = router;
