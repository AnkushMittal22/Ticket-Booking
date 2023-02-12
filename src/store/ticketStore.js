import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialStateOne = {
  numberOfTicket: 0,
  ticketPirce: 0,
  movieTitle: "",
  seats: [],
};
console.log(initialStateOne.seats);
const sliceReducerOne = createSlice({
  name: "numberOfTicket",
  initialState: initialStateOne,
  reducers: {
    increment(state) {
      state.numberOfTicket++;
    },
    increseby(state, action) {
      state.ticketPirce = state.ticketPirce + action.payload;
    },
    // decrease(state, action) {
    //   state.numberOfTicket = action.payload;
    //   state.ticketPirce = action.payload;
    // },
    movieName(state, action) {
      state.numberOfTicket = 0;
      state.ticketPirce = 0;
      state.seats = [];
      state.movieTitle = action.payload;
    },
    ticketNumber(state, action) {
      state.seats.push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: sliceReducerOne.reducer,
});

export const actionOne = sliceReducerOne.actions;
export default store;
