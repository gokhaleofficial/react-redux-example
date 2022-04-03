// actions and reducers will be exported out of this.
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 1000,
    name: "Sandeep Gokhale"
  },
  reducers: {
    increment: (state) => {
      state.counter += 1; // state.counter = state.counter + 1
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    setName: (state, action) => {
      state.name = action.payload;
    }
  }
});

// console.log(counterSlice);
export const { increment, decrement, setName } = counterSlice.actions;

export default counterSlice.reducer;
