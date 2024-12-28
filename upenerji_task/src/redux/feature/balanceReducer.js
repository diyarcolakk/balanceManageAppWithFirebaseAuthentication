import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: [
    { id: 1, type: "Fuel", amount: 400 },
    { id: 2, type: "Cash", amount: 12000 },
    { id: 3, type: "Meal", amount: 300 },
    { id: 4, type: "Toll", amount: 20 },
    { id: 5, type: "Flight", amount: 770 },
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

      const balanceItem = state.balance.find((item) => item.id === id);
      if (balanceItem) {
        balanceItem.amount += amount;
      }
    },
    addCoupon: (state, action) => {
      const { id, couponCode, couponAmount, createdAt, finishedAt } =
        action.payload;
      const balanceItem = state.balance.find((item) => item.id === id);
      if (balanceItem) {
        // Her balance item'ına yeni bir kupon ekliyoruz
        const newCoupon = {
          couponCode, // Her yeni kuponun ID'si otomatik artacak
          couponAmount,
          createdAt,
          finishedAt,
        };

        if (!balanceItem.coupons) {
          balanceItem.coupons = [newCoupon]; // Eğer coupons dizisi yoksa, yeni bir dizi oluşturup kuponu ekliyoruz
        } else {
          // Eğer coupons dizisi varsa, mevcut dizinin sonuna yeni kuponu ekliyoruz
          balanceItem.coupons = [...balanceItem.coupons, newCoupon];
        }
      }
    },
  },
});

export const { setBalance, incrementBalance, addCoupon } = balanceSlice.actions;

export default balanceSlice.reducer;
