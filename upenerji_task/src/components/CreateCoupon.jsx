import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addCoupon } from "../redux/feature/balanceReducer";

const CreateCoupon = ({ id, onClose }) => {
  const [amount, setAmount] = useState("");
  const selector = useSelector((state) => state.balance);
  console.log(selector);
  const dispatch = useDispatch();
  const onSubmitHandler = (e) => {
    e.preventDefault();

    const result = selector.filter((balance) => balance.id === id);
    if (result && amount < result[0].amount) {
      //Uniq bir id için oluşturulan andaki date kullanılıyor. udid vs gibi şeylerde kullanılabilirdi.
      const coupontCreateDate = Date.now();
      const oneWeekInMillis = 7 * 24 * 60 * 60 * 1000;
      const couponFinishedAt = coupontCreateDate + oneWeekInMillis;
      dispatch(
        addCoupon({
          id: result[0].id,
          couponCode: coupontCreateDate,
          couponAmount: amount,
          createdAt: coupontCreateDate,
          finishedAt: couponFinishedAt,
        })
      );
      onClose();
    } else alert("Kupon bakiyesi, bakiyeden büyük olamaz.");
  };

  return (
    <div className="bg-gray-300 opacity-90 absolute border border-black flex justify-center items-center flex-col gap-12 top-0 left-0 right-0 bottom-0 w-full h-full">
      <div className="w-[600px] h-[600px]  bg-black text-white">
        <div
          className="flex justify-end text-2xl w-full h-[10%] cursor-pointer"
          onClick={onClose}
        >
          X
        </div>
        <form
          className="flex  flex-col gap-12 justify-center items-center  w-full h-[90%]"
          onSubmit={onSubmitHandler}
        >
          <div className="w-[80%]">
            <label htmlFor="coupon">Kupon Bakiyesi giriniz </label>
            <input
              onChange={(e) => setAmount(e.target.value)}
              id="coupon"
              type="text"
              className="border border-black w-full text-black"
              pattern="^\d+$"
              required
              title="Lütfen bir sayı girin."
            />
          </div>

          <button
            className="border border-white bg-black text-white px-5 py-2 cursor-pointer"
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
