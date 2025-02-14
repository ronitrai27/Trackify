const express = require("express");
const { registerUser } = require("../controllers/userController.js");
const { getUserByEmail } = require("../controllers/userController.js");

const router = express.Router();

router.post("/register", registerUser);
router.get("/user/email/:email", getUserByEmail);

module.exports = router;
