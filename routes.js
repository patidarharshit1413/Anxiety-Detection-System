const express = require("express");
const router = express.Router();

function calculateAnxietyLevel(score, emotion) {

  let adjustedScore = score;

  if (emotion === "stressed" || emotion === "sad") {
    adjustedScore = Math.min(75, adjustedScore + 5);
  }

  let level;

  if (adjustedScore <= 25) {
    level = "Low";
  } else if (adjustedScore <= 50) {
    level = "Moderate";
  } else {
    level = "High";
  }

  return { score: adjustedScore, level };
}

router.post("/predict", (req, res) => {

  const { answers, emotion } = req.body;

  const totalScore = answers.reduce((a, b) => a + b, 0);

  const result = calculateAnxietyLevel(totalScore, emotion);

  res.json({
    totalScore: result.score,
    level: result.level
  });

});

module.exports = router;