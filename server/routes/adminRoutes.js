const express = require("express");
const router = express.Router();

const User = require("../models/User");
const Score = require("../models/Score");

router.get(
  "/users",
  async (req, res) => {

    try {

      const users =
        await User.find();

      res.json(users);

    } catch (error) {

      res.status(500).json(error);

    }

  }
);

router.get(
  "/scores",
  async (req, res) => {

    try {

      const scores =
        await Score.find();

      res.json(scores);

    } catch (error) {

      res.status(500).json(error);

    }

  }
);

module.exports = router;