const express = require("express");
const router = express.Router();
const ControllerProduct = require("../controllers/ControllerProducts");
// const authorization = require("../middlewares/authorization");

router.post("/", ControllerProduct.add);
router.get("/", ControllerProduct.findAll);
router.get("/:id", ControllerProduct.findOne);
router.delete("/:id", ControllerProduct.destroy);
router.patch("/:id", ControllerProduct.edit);


module.exports = router;
