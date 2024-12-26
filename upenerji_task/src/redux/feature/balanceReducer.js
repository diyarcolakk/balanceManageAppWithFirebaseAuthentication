import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: [
    { id: 1, type: "fuel", amount: 0 },
    { id: 2, type: "cash", amount: 0 },
    { id: 3, type: "meal", amount: 0 },
    { id: 4, type: "toll", amount: 0 },
    { id: 5, type: "flight", amount: 0 },
  ],
};

const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    setBalance: (state, action) => {
      state.balance = action.payload;
    },
  },
});

export const { setBalance, incrementBalance, decrementBalance } =
  balanceSlice.actions;

export default balanceSlice.reducer;
