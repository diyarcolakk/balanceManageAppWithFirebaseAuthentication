import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCoupon } from "../redux/feature/balanceReducer";

const CreateCoupon = ({ id, onClose }) => {
  const [amount, setAmount] = useState("");
  const selector = useSelector((state) => state.balance);
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const result = selector.filter((balance) => balance.id === id);
    if (result && amount < result[0].amount) {
      // Kupon oluşturuluyor
      const couponCreateDate = Date.now();
      const oneWeekInMillis = 7 * 24 * 60 * 60 * 1000;
      const couponFinishedAt = couponCreateDate + oneWeekInMillis;
      dispatch(
        addCoupon({
          id: result[0].id,
          couponCode: couponCreateDate,
          couponAmount: amount,
          createdAt: couponCreateDate,
          finishedAt: couponFinishedAt,
        })
      );
      onClose();
    } else {
      alert("Kupon bakiyesi, bakiyeden büyük olamaz.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg w-full max-w-lg p-8 relative">
        <div
          className="absolute top-4 right-4 text-2xl text-gray-600 cursor-pointer"
          onClick={onClose}
        >
          &times;
        </div>

        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Kupon Oluştur
        </h2>

        <form className="flex flex-col gap-6" onSubmit={onSubmitHandler}>
          <div>
            <label
              htmlFor="coupon"
              className="block text-gray-700 font-semibold mb-2"
            >
              Kupon Bakiyesi giriniz
            </label>
            <input
              onChange={(e) => setAmount(e.target.value)}
              id="coupon"
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              pattern="^\d+$"
              required
              title="Lütfen bir sayı girin."
            />
          </div>

          <button
            className="bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
            type="submit"
          >
            Onaylıyorum
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCoupon;
