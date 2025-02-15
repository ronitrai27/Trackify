const express = require("express");
const {
  addItem,
  getUserInventory,
  getItemCountByType,
} = require("../controllers/inventoryController.js");

const router = express.Router();

router.post("/add", addItem);

// Route to get inventory items (with pagination and filters)
router.get("/items", getUserInventory);
// Route to get count of Items---
router.get("/items/count-by-type", getItemCountByType);

module.exports = router;
