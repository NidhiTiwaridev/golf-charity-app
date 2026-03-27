const express =
  require("express");

const router =
  express.Router();

const {
  addCharity,
  getCharities
} = require(
  "../controllers/charityController"
);

router.post(
  "/add",
  addCharity
);

router.get(
  "/get",
  getCharities
);

module.exports =
  router;