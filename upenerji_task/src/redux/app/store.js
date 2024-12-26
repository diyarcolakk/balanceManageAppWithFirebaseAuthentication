import { configureStore } from "@reduxjs/toolkit";
import balanceSlice from "../feature/balanceReducer";

const store = configureStore({
  reducer: balanceSlice,
});

export default store;
