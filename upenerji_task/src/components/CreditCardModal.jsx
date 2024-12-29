import React from "react";
import { useDispatch } from "react-redux";
import { incrementBalance } from "../redux/feature/balanceReducer";
import { useState } from "react";

const CreditCardModal = ({ id, onClose }) => {
  const dispatch = useDispatch();

  const [amount, setAmount] = useState("");
  const [cvv, setCvv] = useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (cvv === "000") {
      const newData = Number(amount);
      dispatch(incrementBalance({ id, amount: newData }));
      onClose();
    } else alert("CVV hatalı");
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
            <label htmlFor="">Kart No</label>
            <input
              type="text"
              className="border border-black w-full text-black"
              pattern="^\d{16}$"
              required
              title="Lütfen tam 16 rakamdan oluşan bir sayı girin."
            />
          </div>
          <div className="w-[80%] ">
            <label htmlFor="">Son Kullanma Tarihi</label>
            <input
              type="date"
              className="border border-black w-full text-black"
            />
          </div>
          <div className="w-[80%]">
            <label htmlFor="">CVV</label>
            <input
              type="text"
              className="border border-black w-full text-black"
              onChange={(e) => setCvv(e.target.value)}
            />
          </div>
          <div className="w-[80%]">
            <label htmlFor="">Amount</label>
            <input
              type="text"
              pattern="^\d+$"
              className="border border-black w-full text-black"
              onChange={(e) => setAmount(e.target.value)}
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

export default CreditCardModal;
