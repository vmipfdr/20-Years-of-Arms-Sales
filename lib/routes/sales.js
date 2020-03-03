const express = require("express");
const router = express.Router();
const bachelorController = require("../controllers/bachelor");

router.get("/", bachelorController.index);
router.get("/year/:year", bachelorController.showYear);
router.get("/:name", bachelorController.showName);
router.post("/", bachelorController.create);
router.put("/:name", bachelorController.edit);
router.delete("/:name", bachelorController.delete);

module.exports = router;
