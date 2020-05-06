const express = require("express");
const router = express.Router();
const countryController = require("../controllers/countries");

router.get("/", countryController.index);
router.get("/:name", countryController.showName);
router.get("/code/:alpha3Code", countryController.showCode);
router.get("/region/:region", countryController.showRegion);
router.post("/", countryController.create);
router.put("/:name", countryController.edit);
router.delete("/:name", countryController.delete);

module.exports = router;
