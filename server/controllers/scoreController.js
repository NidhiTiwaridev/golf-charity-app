const Score = require("../models/Score");

// ADD SCORE FUNCTION
exports.addScore = async (req, res) => {
  try {

    const { userId, score, date } = req.body;

    // Get existing scores
    const scores = await Score
      .find({ userId })
      .sort({ createdAt: 1 });

    // If already 5 scores → delete oldest
    if (scores.length >= 5) {
      await Score.deleteOne({
        _id: scores[0]._id
      });
    }

    // Add new score
    const newScore = new Score({
      userId,
      score,
      date
    });

    await newScore.save();

    res.json({
      message: "Score added successfully"
    });

  } catch (error) {
    res.status(500).json(error);
  }
};


// GET SCORES FUNCTION
exports.getScores = async (req, res) => {
  try {

    const { userId } = req.params;

    const scores = await Score
      .find({ userId })
      .sort({ createdAt: -1 });

    res.json(scores);

  } catch (error) {
    res.status(500).json(error);
  }
};