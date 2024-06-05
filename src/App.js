// src/App.js
import React, { useState } from 'react';
import { Container, Typography, Button, Select, MenuItem, Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import axios from 'axios';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4caf50',
    },
    secondary: {
      main: '#ff9100',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h4: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 500,
    },
  },
});

const diceImages = [
  '/dice1.png',
  '/dice2.png',
  '/dice3.png',
  '/dice4.png',
  '/dice5.png',
  '/dice6.png',
];

function App() {
  const [points, setPoints] = useState(5000);
  const [betAmount, setBetAmount] = useState(100);
  const [betOption, setBetOption] = useState('7up');
  const [result, setResult] = useState(null);

  const handleRollDice = async () => {
    try {
      const response = await axios.post('https://seven-up-server-latest.onrender.com/api/roll-dice', {
        betAmount,
        betOption,
      });
      setResult(response.data);
      setPoints(response.data.newPoints);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs" style={{ textAlign: 'center', marginTop: '20px' }}>
        <Typography variant="h4" color="primary" gutterBottom>7 Up 7 Down Game</Typography>
        <Typography variant="h6" gutterBottom>Points: {points}</Typography>
        <Box marginBottom={2}>
          <Select
            value={betAmount}
            onChange={(e) => setBetAmount(e.target.value)}
            variant="outlined"
            style={{ marginRight: '10px' }}
          >
            <MenuItem value={100}>100</MenuItem>
            <MenuItem value={200}>200</MenuItem>
            <MenuItem value={500}>500</MenuItem>
          </Select>
          <ToggleButtonGroup
            value={betOption}
            exclusive
            onChange={(e, newBetOption) => setBetOption(newBetOption)}
            aria-label="bet option"
          >
            <ToggleButton value="7up" aria-label="7up">
              7 Up
            </ToggleButton>
            <ToggleButton value="7" aria-label="7">
              Lucky 7
            </ToggleButton>
            <ToggleButton value="7down" aria-label="7down">
              7 Down
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Button variant="contained" color="secondary" onClick={handleRollDice}>
          Roll Dice
        </Button>
        {result && (
          <Box marginTop={2}>
            <Typography variant="h6">
              Dice Result:
            </Typography>
            <Box display="flex" justifyContent="center" alignItems="center">
              <img src={diceImages[result.dice1 - 1]} alt={`Dice ${result.dice1}`} style={{ width: '50px', height: '50px' }} />
              <img src={diceImages[result.dice2 - 1]} alt={`Dice ${result.dice2}`} style={{ width: '50px', height: '50px' }} />
            </Box>
            <Typography variant="h6" color="secondary" gutterBottom>
              {result.message}
            </Typography>
          </Box>
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;
