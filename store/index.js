import { createSlice, configureStore } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "taboo",
  initialState: {
    settings: {
      color: "random",
      time: 70,
    },
    scores: {
      team1: 0,
      team2: 0,
    },
  },
  reducers: {
    setColorSettings: (state, action) => {
      state.settings.color = action.payload;
    },
    setTimeSettings: (state, action) => {
      state.settings.time = action.payload;
    },
    incrementScore: (state, action) => {
      state.scores[action.payload]++;
    },
    decrementScore: (state, action) => {
      state.scores[action.payload]--;
    },
    resetScore: (state) => {
      state.scores = {
        team1: 0,
        team2: 0,
      };
    },
  },
});

const store = configureStore({
  reducer: { game: gameSlice.reducer },
});

export const gameActions = gameSlice.actions;

export default store;
