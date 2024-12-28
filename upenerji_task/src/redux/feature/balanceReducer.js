import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: [
    { id: 1, type: "Fuel", amount: 0 },
    { id: 2, type: "Cash", amount: 0 },
    { id: 3, type: "Meal", amount: 0 },
    { id: 4, type: "Toll", amount: 0 },
    { id: 5, type: "Flight", amount: 0 },
  ],
};

const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    setBalance: (state, action) => {
      state.balance = action.payload;
    },
    incrementBalance: (state, action) => {
      const { id, amount } = action.payload;
      console.log(id, amount);
      console.log(action.payload);

      const balanceItem = state.balance.find((item) => item.id === id);
      if (balanceItem) {
        balanceItem.amount += amount;
      }
    },
  },
});

export const { setBalance, incrementBalance, decrementBalance } =
  balanceSlice.actions;

export default balanceSlice.reducer;
