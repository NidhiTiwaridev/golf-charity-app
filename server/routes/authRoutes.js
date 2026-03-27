const express = require("express");

const router = express.Router();

const {
  registerUser
} = require("../controllers/authController");

router.post(
  "/register",
  registerUser
);
const { loginUser } = require("../controllers/authController");

router.post("/login", loginUser);

module.exports = router;