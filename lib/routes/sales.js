const express = require("express");
const router = express.Router();
const salesController = require("../controllers/sales");

router.get("/", salesController.index);
router.get("/year/:year", salesController.showYear);
router.get("/:name", salesController.showName);
router.post("/", salesController.create);
router.put("/:name", salesController.edit);
router.delete("/:name", salesController.delete);

module.exports = router;
