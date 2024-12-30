import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { incrementBalance } from "../redux/feature/balanceReducer";

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
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg w-full max-w-lg p-8 relative">
        <div
          className="absolute top-4 right-4 text-2xl text-gray-600 cursor-pointer"
          onClick={onClose}
        >
          &times;
        </div>

        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Kredi Kartı Bilgilerinizi Girin
        </h2>

        <form className="flex flex-col gap-6" onSubmit={onSubmitHandler}>
          <div>
            <label
              htmlFor="cardNumber"
              className="block text-gray-700 font-semibold mb-2"
            >
              Kart Numarası
            </label>
            <input
              type="text"
              id="cardNumber"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              pattern="^\d{16}$"
              required
              title="Lütfen tam 16 rakamdan oluşan bir sayı girin."
            />
          </div>

          <div>
            <label
              htmlFor="expiryDate"
              className="block text-gray-700 font-semibold mb-2"
            >
              Son Kullanma Tarihi
            </label>
            <input
              type="date"
              id="expiryDate"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="cvv"
              className="block text-gray-700 font-semibold mb-2"
            >
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setCvv(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="amount"
              className="block text-gray-700 font-semibold mb-2"
            >
              Tutar
            </label>
            <input
              type="text"
              id="amount"
              pattern="^\d+$"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setAmount(e.target.value)}
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

export default CreditCardModal;
