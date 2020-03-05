const express = require("express");
const router = express.Router();
const salesController = require("../controllers/sales");

router.get("/", salesController.index);
router.get("/deliveryYear/:deliveryYear", salesController.showdeliveryYear);
router.get("/seller/:sellerFull", salesController.showfullSeller);
router.get("/seller/code/:seller", salesController.showcodeSeller);
router.get("/buyer/:buyerFull", salesController.showfullBuyer);
router.get("/buyer/code/:buyer", salesController.showcodeBuyer);
router.get("/weaponCategory/:weaponCategory", salesController.showCategory);
router.post("/", salesController.create);
router.put("/:name", salesController.edit);
router.delete("/:name", salesController.delete);

module.exports = router;
