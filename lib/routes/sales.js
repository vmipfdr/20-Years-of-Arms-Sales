const express = require("express");
const router = express.Router();
const salesController = require("../controllers/sales");

router.get("/", salesController.index);
router.get("/deliveryYear/:deliveryYear", salesController.showdeliveryYear);
router.get("/seller/:sellerFull", salesController.showSeller);
router.get("/buyer/:buyerFull", salesController.showBuyer);
router.post("/", salesController.create);
router.put("/:name", salesController.edit);
router.delete("/:name", salesController.delete);

module.exports = router;
