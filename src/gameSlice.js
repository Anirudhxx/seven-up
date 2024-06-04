// src/gameSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    points: 5000,
    result: null,
  },
  reducers: {
    setPoints: (state, action) => {
      state.points = action.payload;
    },
    setResult: (state, action) => {
      state.result = action.payload;
    },
  },
});

export const { setPoints, setResult } = gameSlice.actions;

export default gameSlice.reducer;
