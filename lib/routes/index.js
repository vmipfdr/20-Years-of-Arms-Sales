const express = require("express");
const router = express.Router();

router.use("/bachelor", require("./bachelor"));
router.use("/bachelorette", require("./bachelorette"));

module.exports = router;
