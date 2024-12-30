import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { incrementBalance } from "../redux/feature/balanceReducer";
import loanModalCheck from "./Validators/validator";

const LoanModal = ({ id, onClose }) => {
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
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg w-full max-w-lg p-8 relative">
        <div
          className="absolute top-4 right-4 text-2xl text-gray-600 cursor-pointer"
          onClick={onClose}
        >
          &times;
        </div>

        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Kredi Başvurusu
        </h2>

        <form className="flex flex-col gap-6" onSubmit={onSubmitHandler}>
          <div>
            <label
              htmlFor="firstName"
              className="block text-gray-700 font-semibold mb-2"
            >
              Ad
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-gray-700 font-semibold mb-2"
            >
              Soyad
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="tcNo"
              className="block text-gray-700 font-semibold mb-2"
            >
              TC Kimlik No
            </label>
            <input
              type="text"
              id="tcNo"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setTcNo(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="loanAmount"
              className="block text-gray-700 font-semibold mb-2"
            >
              Kredi Tutarı
            </label>
            <input
              type="text"
              id="loanAmount"
              pattern="^\d+$"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setLoanAmount(e.target.value)}
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

export default LoanModal;
