const Charity = require(
  "../models/Charity"
);

// Add charity
exports.addCharity = async (
  req,
  res
) => {

  try {

    const charity =
      new Charity(req.body);

    await charity.save();

    res.json({
      message:
        "Charity added successfully"
    });

  } catch (error) {

    res.status(500).json(
      error
    );

  }

};

// Get charities
exports.getCharities =
  async (req, res) => {

    try {

      const charities =
        await Charity.find();

      res.json(charities);

    } catch (error) {

      res.status(500).json(
        error
      );

    }

};