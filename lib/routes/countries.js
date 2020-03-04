const express = require("express");
const router = express.Router();
const countryController = require("../controllers/countries");

router.get("/", countryController.index);
router.get("/year/:year", countryController.showYear);
router.get("/:name", countryController.showName);
router.post("/", countryController.create);
router.put("/:name", countryController.edit);
router.delete("/:name", countryController.delete);

module.exports = router;
