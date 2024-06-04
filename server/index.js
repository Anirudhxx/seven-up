// server/index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

let points = 5000;

app.post('/api/roll-dice', (req, res) => {
  const { betAmount, betOption } = req.body;

  // Roll two dice
  const dice1 = Math.floor(Math.random() * 6) + 1;
  const dice2 = Math.floor(Math.random() * 6) + 1;
  const sum = dice1 + dice2;

  let resultMessage = '';
  let newPoints = points;

  if ((betOption === '7up' && sum > 7) || (betOption === '7down' && sum < 7)) {
    newPoints += betAmount;
    resultMessage = 'You win! You get double your stake.';
  } else if (betOption === '7' && sum === 7) {
    newPoints += betAmount * 4;
    resultMessage = 'Lucky 7! You get 5 times your stake.';
  } else {
    newPoints -= betAmount;
    resultMessage = 'You lose! Better luck next time.';
  }

  points = newPoints;

  res.json({
    dice1,
    dice2,
    sum,
    message: resultMessage,
    newPoints: points,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
