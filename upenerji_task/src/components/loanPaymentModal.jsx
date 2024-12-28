import React from "react";
import { useDispatch } from "react-redux";
import { incrementBalance } from "../redux/feature/balanceReducer";
import { useState } from "react";
import loanModalCheck from "./Validators/validator";

const LoanPaymentModal = ({ id, onClose }) => {
  const dispatch = useDispatch();
  const [loanAmount, setLoanAmount] = useState("");
  const [tcNo, setTcNo] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (loanModalCheck(tcNo) && Number(loanAmount) < 10000) {
      onClose();
      const newData = Number(loanAmount);
      dispatch(incrementBalance({ id, amount: newData }));
      alert("Ödeme başarılı");
    } else alert("Ödeme başarısız.");
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
            <label htmlFor="">Ad</label>
            <input
              type="text"
              className="border border-black w-full text-black"
              required
              title="Lütfen tam 16 rakamdan oluşan bir sayı girin."
            />
          </div>
          <div className="w-[80%] ">
            <label htmlFor="">Soyad</label>
            <input
              type="text"
              className="border border-black w-full text-black"
            />
          </div>
          <div className="w-[80%]">
            <label htmlFor="">Tc Kimlik No</label>
            <input
              type="text"
              onChange={(e) => setTcNo(e.target.value)}
              className="border border-black w-full text-black"
            />
          </div>
          <div className="w-[80%]">
            <label htmlFor="">Kredi Tutarı</label>
            <input
              type="text"
              pattern="^\d+$"
              className="border border-black w-full text-black"
              onChange={(e) => setLoanAmount(e.target.value)}
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

export default LoanPaymentModal;
